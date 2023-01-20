package com.skilldistillery.workout.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {
	
	@Autowired
	private WorkoutRepository workoutRepo;

	@Override
	public List<Workout> allWorkouts() {
		return workoutRepo.findAll();
		
	}

	@Override
	public Workout getSingleWorkout(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Workout create(Workout workout) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Workout update(int id, Workout workout) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteBy(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
