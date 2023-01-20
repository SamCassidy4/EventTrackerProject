package com.skilldistillery.workout.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.services.WorkoutService;

@RestController
@RequestMapping("api")
public class WorkoutController {
	
	@Autowired
	private WorkoutService wService;
	
	@GetMapping("workouts")
	public List<Workout> listAllWorkouts(){
		return wService.allWorkouts();
	}
	

}
