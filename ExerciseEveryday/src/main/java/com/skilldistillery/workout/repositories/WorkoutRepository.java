package com.skilldistillery.workout.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.workout.entities.Workout;

public interface WorkoutRepository extends JpaRepository< Workout, Integer> {
 // query methods here
	
	public Workout findById(int id);
	
	
}
