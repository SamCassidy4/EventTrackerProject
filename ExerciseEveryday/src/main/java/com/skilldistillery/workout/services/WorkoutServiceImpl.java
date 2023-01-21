package com.skilldistillery.workout.services;

import java.util.List;

import javax.transaction.Transactional;

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

		return workoutRepo.findById(id);
	}

	@Override
	public Workout create(Workout workout) {
		workoutRepo.saveAndFlush(workout);
		return workout;
	}

	@Override
	public Workout updateWorkout(int id, Workout workout) {
		Workout updatedWorkout = workoutRepo.findById(id);
		if (updatedWorkout != null) {
			updatedWorkout.setName(workout.getName());
			updatedWorkout.setSet(workout.getSet());
			updatedWorkout.setRep(workout.getRep());
			updatedWorkout.setDescription(workout.getDescription());
			updatedWorkout.setImageUrl(workout.getImageUrl());
			updatedWorkout.setBodyPart(workout.getBodyPart());
			
			workoutRepo.saveAndFlush(updatedWorkout);
			return updatedWorkout;
		}
		return null;
	}

	@Override
	public boolean deleteBy(int id) {
		boolean deleted = false;
		Workout workout = workoutRepo.findById(id);
		if(workout != null) {
			workoutRepo.delete(workout);
			deleted = true;
		}
		return deleted;
	}

}
