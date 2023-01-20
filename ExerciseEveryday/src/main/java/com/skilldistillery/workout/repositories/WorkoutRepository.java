package com.skilldistillery.workout.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.workout.entities.Workout;

public interface WorkoutRepository extends JpaRepository< Workout, Integer> {
 // query methods here
}
