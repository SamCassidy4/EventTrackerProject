console.log('loaded');

window.addEventListener('load', function(e){
	console.log('Page Loaded');
	init();
});

function init(){
	loadWorkouts();
}

function loadWorkouts(){
	//AJAX
	
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/workouts');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let list = JSON.parse(xhr.responseText);
				console.log(list);
				displayWorkouts(list);
			}
			else{
				displayError('Workouts not Found')
			}
		}
	};
	
	xhr.send();
}

function addWorkout(newWorkout){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/workouts');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let workout = JSON.parse(xhr.responseText);
				displaySingleWorkout(workout);
			} 
			else{
				displayError("Error in Creating Workout: " + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(newWorkout));
}

function displayError(message){
	let div = document.getElementById('eventList');
	div.textContent = message;
}
//TODO: build display SingleWorkout using workout id
function displaySingleWorkout(workout){
	
}

function displayWorkouts(workout){
	console.log(workout);	
	let dataDiv = document.getElementById('eventList');
	dataDiv.textContent = '';
	
	let ul = document.createElement('ul');
	workout.forEach((workout)=>{
		console.log(workout);
		
		let li = document.createElement('li');
		li.textContent = workout.name
		ul.appendChild(li);
	});
	dataDiv.appendChild(ul)
	
	//DOM
}