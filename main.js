// console.log("First line in JS file: ", Date.now());

var dinoContainer = document.getElementById("dinoContainer");


function makeDom(xhrData){
	var dinosaurString = "";
	var currentDinosaur;
	for (var i=0; i<xhrData.dinosaurs.length; i++){
		currentDinosaur = xhrData.dinosaurs[i];

	dinosaurString += `<div class="col-sm-6 col-md-4">`
	dinosaurString += `<div class="thumbnail">`
	dinosaurString += `<img src="${currentDinosaur.url}" alt="dino">`
	dinosaurString += `<div class="caption">`
	dinosaurString += `<h3>${currentDinosaur.name}</h3>`
	dinosaurString += `<p>Is a ${currentDinosaur.type}</p>`
	dinosaurString += `<p>Likes to eat: ${currentDinosaur.food}</p>`
	dinosaurString += `</div></div></div>`;
	}

		dinoContainer.innerHTML = dinosaurString;
	}



function executeThisCodeAfterFileLoaded(){
	// console.log("Data returned: ", Date.now());
	var data = JSON.parse(this.responseText);		//there's also a .stringify
	makeDom(data);
}

function executeThisCodeAfterFileFails(){
	// console.log("not working")
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();

// console.log("Last line in JS file: ", Date.now());