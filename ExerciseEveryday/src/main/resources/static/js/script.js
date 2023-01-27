console.log('loaded');

window.addEventListener('load', function(e) {
	console.log('Page Loaded');
	init();
});

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
	//AJAX

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/workouts');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let list = JSON.parse(xhr.responseText);
				console.log(list);
				displayWorkouts(list);
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

//TODO: Place a delete workout button in the expanded workout fields
function deleteWorkout(workoutId){
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/workouts/' + workoutId);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 204){
				let workout = JSON.parse(xhr.responseText);
			}
			else{
				displayError("Error in Deleting Workout: " + xhr.status);
			}
		}
	}
}

function displayError(message) {
	let div = document.getElementById('eventList');
	div.textContent = message;
}

function displaySingleWorkout(workout) {

}

function displayWorkouts(workout) {
	console.log(workout);
	let dataDiv = document.getElementById('eventList');
	dataDiv.textContent = '';

	let ul = document.createElement('ul');
	workout.forEach((workout) => {
		console.log(workout);

		let li = document.createElement('li');
		li.textContent = workout.name
		ul.appendChild(li);
	});
	dataDiv.appendChild(ul)

	//DOM
}