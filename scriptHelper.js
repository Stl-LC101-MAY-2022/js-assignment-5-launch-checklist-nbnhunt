// // Write your helper functions here!
require('isomorphic-fetch');

// This is the format of the innerHTML for the missionTarget div, which you can locate using the document parameter of addDestinationInfo(). addDestinationInfo() does not need to return anything.

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">`;
   
};

function validateInput(testInput) {
    if (testInput === '') {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && validateInput(cargoLevel) === "Is a Number") {
        document.getElementById("faultyItems").style.visibility = "visible";
    } else {
        alert("Make sure to enter valid information for each field!");
    }
    
    if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
    } else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel >= 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (fuelStatus.innerHTML === "Fuel level too low for launch" || cargoStatus.innerHTML === "Cargo mass too heavy for launch") {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    }

    if (launchStatus.innerHTML = "Shuttle Not Ready for Launch") {
        pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
        copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;
    }
    
    if (fuelStatus.innerHTML === "Fuel level high enough for launch" && cargoStatus.innerHTML === "Cargo mass low enough for launch") {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
        copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;    
    }

}

// when updating <div id=missionTarget> use the format from addDestinationInfo() via pickPlanet() & myFetch(). 

// myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. You need to add the URL and return response.json().

// name, diameter, star, distance, moons, imageUrl

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    // pickPlanet() takes in one argument: a list of planets. Using Math.random(), return one planet from the list with a randomly-selected index.  myFetch() Math.random()
    let randPlanet = Math.floor(Math.random() * planets.length);
    return randPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
