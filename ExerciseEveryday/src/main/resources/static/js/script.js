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
				//TODO - display error
			}
		}
	};
	
	xhr.send();
}

function displayWorkouts(workoutList){
	//DOM
}