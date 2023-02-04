window.addEventListener('load', function(e) {
	console.log("Page Loaded");
	init();
});


function init() {
	loadWorkouts();
	document.newWorkout.submit.addEventListener('click', createWorkout);
	
	
}


function loadWorkouts() {
	//AJAX
	
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/workouts");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workouts = JSON.parse(xhr.responseText);
				displayWorkouts(workouts);
			} else if( xhr.status === 404) {
				
			}
		} 
	};
	
	xhr.send();
}


function displayWorkouts(workouts) {
	//DOM
	let workoutTable = document.getElementById("workoutTable")
	workoutTable.textContent="";
	let tableHead = document.createElement("thead");
	let headerRow = document.createElement("tr");
	let workoutHeader = document.createElement("th");
	let descriptionHeader = document.createElement("th");
	workoutHeader.textContent = "Workout";
	descriptionHeader.textContent = "Description";
	headerRow.appendChild(workoutHeader);
	headerRow.appendChild(descriptionHeader);
	
	
	tableHead.appendChild(headerRow);
	workoutTable.appendChild(tableHead);
	
	
	
	let tableBody = document.createElement("tbody");
	workoutTable.append(tableBody);
	for (let workout of workouts) {
		let tr = document.createElement("tr");
		let tdName = document.createElement("td");
		let tdDescription = document.createElement("td");
		let tdID = document.createElement("td");
		let tdRep = document.createElement("td");
		let tdSet = document.createElement("td");
		let tdBodyPart = document.createElement("td")
		tdID.textContent = workout.id;
		tdName.textContent = workout.name;
		tdDescription.textContent = workout.description;
		tdRep.textContent = workout.rep;
		tdSet.textContent = workout.set;
		tdBodyPart.textContent = workout.bodyPart;
		
		
		tr.appendChild(tdName);
		tr.appendChild(tdDescription);
		tr.appendChild(tdID);
		tr.appendChild(tdRep);
		tr.appendChild(tdSet);
		tr.appendChild(tdBodyPart);
		tr.addEventListener('click', getWorkout);
		
		tableBody.appendChild(tr);
	}
}

function displayWorkout(workout) {
	let div = document.getElementById("displayWorkout");
	div.textContent = "";
	let id = document.createElement("div");
	id.textContent = workout.id;
	let name = document.createElement("h2");
	name.textContent = workout.name;
	let description = document.createElement("h4");
	description.textContent = workout.description;
	let rep = document.createElement("h5");
	rep.textContent = workout.rep;
	let set = document.createElement("h5");
	set.textContent = workout.set;
	let bodyPart = document.createElement("h5");
	bodyPart.textContent = workout.bodyPart;
	
	
	div.append(id);
	div.appendChild(name)
	div.appendChild(description);
	div.appendChild(rep);
	div.appendChild(set);
	div.appendChild(bodyPart);
	
	let br = document.createElement("br");
	div.appendChild(br)
	
	
	let deleteButton = document.createElement("input");
	deleteButton.type="button";
	deleteButton.name="delete";
	deleteButton.value="Delete";
	deleteButton.addEventListener('click', deleteWorkoutButton);
	div.appendChild(deleteButton);
	
	let edit = document.createElement("input");
	edit.type="button";
	edit.name="edit";
	edit.value="Edit";
	edit.addEventListener('click', generateEditForm);
	div.append(edit);
	
	
	
	
}

function getWorkout(e) {	
	let id = e.target.parentElement.lastElementChild.textContent;
	let xhr = new XMLHttpRequest();
	
	xhr.open("GET", "api/workouts/" + id);
	
	xhr.onreadystatechange = function() {
		if ( xhr.readyState === 4 ) {
			if (xhr.status === 200) {
				displayWorkout(JSON.parse(xhr.responseText));
			} else {
				console.log(xhr.status);
			}
		}
	};
	
	xhr.send();
}

function getWorkoutHidden(id) {
	let xhr = new XMLHttpRequest();
	
	xhr.open("GET", "api/workouts/" + id);
	
	xhr.onreadystatechange = function() {
		if ( xhr.readyState === 4 ) {
			if (xhr.status === 200) {
				let workout = JSON.parse(xhr.responseText);
				populateEditForm(workout);
			} else {
				console.log(xhr.status);
			}
		}
	};
	
	xhr.send();
}

function createWorkout(e) {
	e.preventDefault();
	let workout = {
		name: document.newWorkout.name.value,
		description: document.newWorkout.description.value,
		rep: document.newWorkout.rep.value,
		set: document.newWorkout.set.value,
		bodyPart: document.newWorkout.bodyPart.value
	};
	
	
	let xhr = new XMLHttpRequest();
	
	xhr.open("POST", "api/workouts")
	
	xhr.setRequestHeader("Content-Type", "Application/JSON");
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayWorkout(JSON.parse(xhr.responseText));
				loadWorkouts();
			}
		}
	};
	
	xhr.send(JSON.stringify(workout));
	
}

function generateEditForm() {
	let div = document.getElementById("displayWorkout");
	let id = div.firstElementChild.textContent;
	div.textContent = "";
	
	
	getWorkoutHidden(id);
	
	let hiddenId = document.createElement("div");
	hiddenId.textContent = id;
	
	let editForm = document.createElement("form");
	let name = document.createElement("input");
	let description = document.createElement("input");
	let rep = document.createElement("textarea");
	let set = document.createElement("input");
	let bodyPart = document.createElement("input")
	let submit = document.createElement("input");
	
	//TODO: FIX THIS PART BELOW TO MIRROR YOUR EDIT FORM NOT A BOOK
	
	editForm.name="editForm";
	name.type="text";
	name.name="name";
	description.type="text";
	description.name="description";
	rep.type ="number"
	rep.name = "rep";
	set.type = "number"
	set.name = "name"
	bodyPart.type = "text"
	bodyPart.name ="bodyPart"
	submit.type="submit";
	submit.name="submit";
	submit.value="Submit";
	
	editForm.appendChild(hiddenId);
	
	editForm.appendChild(name);
	editForm.appendChild(description);
	editForm.appendChild(rep);
	editForm.appendChild(set);
	editForm.appendChild(bodyPart);
	editForm.appendChild(submit);
	div.appendChild(editForm);
	
	for (input of editForm) {
		let br = document.createElement("br");
		input.after(br);
	}
	
}

function populateEditForm(workout) {
	
	let form = document.editForm;
	form.name.value=workout.name;
	form.description.value=workout.description;
	form.rep.value=workout.rep;
	form.set.value=workout.set;
	form.bodyPart.value = workout.bodyPart;
	
	
	
	form.submit.addEventListener('click', updateWorkout);

	
}

function updateWorkout(e) {
	e.preventDefault();
	
	let editForm = document.editForm;
	
	let id = editForm.firstElementChild.textContent;
	
	let workout = {
		name: editForm.name.value,
		description: editForm.description.value,
		rep: editForm.rep.value,
		set: editForm.set.value,
		bodyPart: editForm.bodyPart.value
	};
	console.log(JSON.stringify(workout));
	
	let xhr = new XMLHttpRequest();
	
	xhr.open("PUT", "api/workouts/" + id);
	
	xhr.setRequestHeader("Content-Type", "Application/JSON");
	
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log(JSON.parse(xhr.responseText));
				displayWorkout(JSON.parse(xhr.responseText));
			} else {
				console.error(xhr.responseText);
			}
		}
	};
	
	xhr.send(JSON.stringify(workout));
	
}



function deleteWorkoutButton() {
	
	let id = document.getElementById("displayWorkout").firstElementChild.textContent;
	console.log(id);
	deleteWorkout(id);
	
}

function deleteWorkout(id) {
	let xhr = new XMLHttpRequest();
	
	xhr.open("DELETE", "api/workouts/" + id);
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				loadWorkouts();
				document.getElementById("displayWorkout").textContent = "";
			} else if (xhr.status === 404) {
				console.log(xhr.responseText);
			}
		}
	};
	
	xhr.send();
}