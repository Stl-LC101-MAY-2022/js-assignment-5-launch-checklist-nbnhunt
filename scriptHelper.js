// // Write your helper functions here!
require('isomorphic-fetch');



// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    // Here is the HTML formatting for our mission target div.
//    /*
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    */
// }

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
    let pilotLiteral = document.querySelector("input[name=pilotName]");
    let copilotLiteral = document.querySelector("input[name=copilotName]");
    
    if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && validateInput(fuelLevel) === "Is a Number") {
        document.getElementById("faultyItems").style.visibility = "visible";
    } else {
        alert("Make sure to enter valid information for each field!");
    }
    
    if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
    } else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel >= 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (validateInput(cargoStatus) === "Is a Number" && cargoLevel > 10000) {
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

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch().then( function(response) {
//         });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
// }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
