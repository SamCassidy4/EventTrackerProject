
window.addEventListener('load', function(e) {
	console.log('Page Loaded');
	init();
	document.addEventListener('click',updateWorkout);
})

let workouts;

function init() {

	loadWorkouts();
	newWorkoutForm.addWorkoutButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		//console.log("adding workout");
		let newWorkout = {
			name: document.newWorkoutForm.name.value,
			set: document.newWorkoutForm.set.value,
			rep: document.newWorkoutForm.rep.value,
			description: document.newWorkoutForm.description.value,
			imageUrl: document.newWorkoutForm.imageUrl.value,
			bodyPart: document.newWorkoutForm.bodyPart.value

		};
		addWorkout(newWorkout);
	});
	}


	function loadWorkouts() {

		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/workouts');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					workouts = JSON.parse(xhr.responseText);
					displayWorkouts(JSON.parse(xhr.responseText));
					console.log(JSON.parse(xhr.responseText));
				}
				else {
					displayError('Workouts not Found')
				}
			}
		};

		xhr.send();
	}


	function addWorkout(newWorkout) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/workouts');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 201) {
					let workout = JSON.parse(xhr.responseText);
					displaySingleWorkout(workout);
				}
				else {
					displayError("Error in Creating Workout: " + xhr.status);
				}
			}
		};
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(newWorkout));
	}


	function updateWorkout(workout, workoutId) {
		let xhr = new XMLHttpRequest();
		xhr.open("PUT", 'api/workouts/' + workoutId);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let contentDiv = document.getElementById('content');
					contentDiv.textContent = '';
					loadWorkouts();
				} else {
					let fail = document.createElement('div');
					fail.name = "Fail";
					fail.textContent = "Failed to update workout";
					let table = document.getElementById('content');
					table.appendChild(fail);
				}
			}
		}
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify(workout));
	}

	function displayError(message) {
		let div = document.getElementById('eventList');
		div.textContent = message;
	}


	function displayWorkouts(workoutList) {
		let contentDiv = document.getElementById('content');
		let label = document.createElement('lable');
		label.textContent = "Workouts";
		contentDiv.appendChild(label);
		label.for = 'contentTable';
		let table = document.createElement('table');
		table.name = 'contentTable';
		let head = document.createElement('thead');

		table.appendChild(head);
		head = document.createElement('thead');
		let name = document.createElement('th');
		let id = document.createElement('th');
		let description = document.createElement('th');
		let bodyPart = document.createElement('th');

		id.textContent = 'ID';
		name.textContent = 'Name';
		bodyPart.textContent = 'Worked Body Part';
		description.textContent = 'Description';
		head.appendChild(id);
		head.appendChild(name);
		head.appendChild(bodyPart);
		head.appendChild(description);
		table.appendChild(head);

		let body = document.createElement('tbody');
		console.log(workoutList);
		for (let workout of workoutList) {

			let tr = document.createElement('tr');
			name = document.createElement('td');
			id = document.createElement('td');
			description = document.createElement('td');
			bodyPart = document.createElement('td');

			id.textContent = workout.id;
			name.textContent = workout.name;
			bodyPart.textContent = workout.bodyPart;
			description.textContent = workout.description;

			tr.appendChild(id);
			tr.appendChild(name);
			tr.appendChild(bodyPart);
			tr.appendChild(description);

			let button = document.createElement('input');
			button.id = workout.id;
			button.type = 'submit';
			button.value = 'details';
			button.addEventListener('click', displayDetails);
			tr.appendChild(button);

			body.appendChild(tr);


		}

		table.appendChild(body);
		contentDiv.appendChild(table);
	}

	function displayDetails(e) {
		e.preventDefault();
		removeWorkout();
		let workoutId = e.target.id;
		console.log(workoutId);
		let sibling = e.target.previousElementSibling
		let content = document.createElement('div');
		console.log(e.target);
		//let workoutId = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
		//let exercises = workouts[workoutId - 1].workout;

		for (let ex of workouts) {
			if(ex.id == workoutId){
			let para = document.createElement('p');
			para.textContent = ex.name + " " + "Reps: " + ex.rep + "Sets: " + ex.set + "Body Part: " + ex.bodyPart;
			content.appendChild(para);
			}
		}
		let updateBtn = document.createElement('input');
		updateBtn.type = 'submit';
		updateBtn.value = 'update';
		updateBtn.id = e.target.id;
		updateBtn.addEventListener('click', updateWorkoutForm);
		let deleteBtn = document.createElement('input');
		deleteBtn.type = 'submit';
		deleteBtn.value = 'delete';
		deleteBtn.addEventListener('click', deleteWorkout);
		content.appendChild(updateBtn);
		content.appendChild(deleteBtn);
		window.exercise = content;
		sibling.appendChild(content);
	}

	function removeWorkout(e) {
		if (window.exercise != undefined) {
			window.exercise.parentElement.removeChild(window.exercise);
		}
	}

	let updateWorkoutForm = function(e) {
		e.preventDefault();
		let workoutId = e.target.id;
		console.log(workoutId);
		let workout = workouts[workoutId - 1];
		document.editWorkout.name.value = workout.name;

		let div = document.getElementById('content');
		div.textContent = "";
		let form = document.createElement('form');

		let updateBtn = document.createElement('input');
		updateBtn.type = 'submit';
		updateBtn.value = 'update';
		updateBtn.addEventListener('click', updateWorkoutFormButton);
		div.appendChild(form);

	}
	function updateWorkoutFormButton(e) {
		e.preventDefault();
		let workoutId = +e.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
		let workout = window.workouts[workoutId - 1];
		updateWorkout(workout, workoutId);
	}
	function updateWorkout(e){
		console.log("updating workout")
		//TODO create an object with all the fields
		// call the AJAX method
		// change button name
		
	}

	let deleteWorkout = function(e) {
		e.preventDefault();
		let workoutId = +e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;

		let xhr = new XMLHttpRequest();
		xhr.open("DELETE", "api/workouts/" + workoutId);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 204) {
					let contentDiv = document.getElementById('content');
					contentDiv.textContent = '';
					loadWorkouts();
				} else {
					let fail = document.createElement('div');
					fail.textContent = 'Failed to delete Workout';

					let table = document.getElementById('content');
					table.appendChild(fail);
				}
			}
		}
		xhr.send();
	}
