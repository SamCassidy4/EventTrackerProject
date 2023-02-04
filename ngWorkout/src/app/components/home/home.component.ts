import { Workout } from './../../models/workout';
import { WorkoutService } from './../../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Church of Iron"
  workouts: Workout[] = [];
  selected: null | Workout = null;
  newWorkout: Workout = new Workout();
  editWorkout: Workout | null = null;

  constructor(private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private router: Router){}



  ngOnInit(){
    let idString = this.route.snapshot.paramMap.get('workoutId');
    console.log('workout id: ' + idString);
    if(idString){
      let workoutId = +idString;
      if(!isNaN(workoutId)){
        this.workoutService.show(workoutId).subscribe({
          next: (workout) => {
            this.selected = workout;
          },
          error: (fail) => {
            console.error(fail);
            this.router.navigateByUrl('WorkoutNotFound');
          },
        });
      } else{
        this.router.navigateByUrl('InvalidWorkoutId')
      }
    }
    this.reload();
  }

  reload(){
    this.workoutService.index().subscribe({
      next: (workoutList) =>{
        this.workouts = workoutList;
      },
      error: (ouch) =>{
        console.error("Error loading workouts");
        console.error(ouch);
      }
    });

  }
  displayTable(){
    this.selected = null;
  }

  getNumberOfWorkouts(){
    return this.workouts.length;
  }
  displayWorkout(workout: Workout){
    this.selected = workout;
  }
  setEditWorkout(){
    this.editWorkout = Object.assign({}, this.selected);
  }
  updateWorkout(workout: Workout, goToDetail = true): void{
    this.workoutService.update(workout).subscribe({
      next: (updateWorkout) => {
        if(goToDetail){
          this.selected = updateWorkout;

        } else{
          this.selected = null;
        }
        this.editWorkout = null;
        this.reload();
      },
      error: (oopsie) => {
        console.error("WorkoutListComponent.updateWorkout: Error updating");
        console.error(oopsie);
      },
    });
  }

  deleteWorkout(id: number){
    this.workoutService.destroy(id).subscribe({
      next: () =>{
        this.reload();
      },
      error: (fail) => {
        console.error("WorkoutListComponent.deleteWorkout: Error deleting Workout");
        console.error(fail);
      }
    });
  }

  addWorkout(workout: Workout){
    this.workoutService.create(workout).subscribe({
      next: (data) => {
        this.newWorkout = new Workout();
        this.reload();
      },
      error: (nojoy) => {
        console.error('WorkoutComponent.addWorkout: Error creating Workout');
        console.error(nojoy);
      },
    });
//   next: (data) => {
//     this.newWorkout = new Workout();
//     this.reload();
//   },
//   error(bigUhOh) =>{
//     console.error("WorkoutListComponent.addWorkout: Error adding Workout");
//     console.error(bigUhOh);
//   }
// });
}




}
