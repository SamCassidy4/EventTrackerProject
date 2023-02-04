import { Workout } from './../../models/workout';
import { WorkoutService } from './../../services/workout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService){}




  ngOnInit(){
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

}
