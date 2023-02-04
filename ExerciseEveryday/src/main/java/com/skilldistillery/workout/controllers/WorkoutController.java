package com.skilldistillery.workout.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.services.WorkoutService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost/"})
public class WorkoutController {

	@Autowired
	private WorkoutService wService;

	@GetMapping("workouts")
	public List<Workout> listAllWorkouts() {
		return wService.allWorkouts();
	}

	@GetMapping("workouts/{id}")
	public Workout findWorkoutById(@PathVariable Integer id) {
		return wService.getSingleWorkout(id);
	}

	@PostMapping("workouts")
	public Workout createWorkout(@RequestBody Workout workout, HttpServletResponse res, HttpServletRequest req) {
		try {
			wService.create(workout);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(workout.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			workout = null;
		}
		return workout;
	}

	@PutMapping("workouts/{id}")
	public Workout updateWorkout(@RequestBody Workout workout, @PathVariable Integer id, HttpServletResponse res,HttpServletRequest req) {
		try {
			workout = wService.updateWorkout(id, workout);
			if( workout == null) {
				res.setStatus(404);
			}

		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			workout = null;
		}
		return workout;

	}
	@DeleteMapping("workouts/{id}")
	public void deleteWorkout(@PathVariable Integer id, HttpServletResponse res) {
		try {
			wService.deleteBy(id);
			res.setStatus(204);
		}catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}

}
