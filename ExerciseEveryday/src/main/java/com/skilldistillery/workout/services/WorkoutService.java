package com.skilldistillery.workout.services;

import java.util.List;

import com.skilldistillery.workout.entities.Workout;

public interface WorkoutService {

	public List<Workout> allWorkouts();

	public Workout getSingleWorkout(int id);

	public Workout create(Workout workout);

	public Workout update(int id, Workout workout);

	boolean deleteBy(int id);

}
