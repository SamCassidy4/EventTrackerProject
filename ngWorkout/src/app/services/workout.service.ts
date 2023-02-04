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

  //TODO: Create, show, update, destroy
}
