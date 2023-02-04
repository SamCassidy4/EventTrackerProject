import { Workout } from './../models/workout';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  url = environment.baseUrl + 'api/workouts'

  constructor(private http: HttpClient) { }

  index(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'WorkoutService.index(): error retrieving workout: ' + err
            )
        );
      })
    );
  }

  show(workoutId: number): Observable<Workout>{
    return this.http.get<Workout>(`${this.url}/${workoutId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          new Error('WorkoutService.show(): Error retrieving workout: ' + err)
        );
      })
    );
  }
  create(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.url, workout).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error("WorkoutService.create(): error creating Workout: " + err)
        );
      })
    );
  }

  update(workout: Workout): Observable<Workout> {
    return this.http.put<Workout>(`${this.url}/${workout.id}`, workout).pipe(
      catchError((err: any) =>{
        console.log(err);
        return throwError(
          () => new Error("WorkoutService.update(): error updateing Workout: " + err)
        );
      })
    );

    }

    destroy(id: number): Observable<void>{
      return this.http.delete<void>(`${this.url}/${id}`).pipe(
        catchError((err: any) =>{
          console.log(err);
          return throwError(
            () => new Error("WorkoutService.delete(): error deleting Workout: " + err)
          );
        })
      );
    }
  }


