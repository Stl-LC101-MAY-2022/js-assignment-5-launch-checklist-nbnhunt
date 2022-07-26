// Write your JavaScript code here!
// Make sure to call your formSubmission() function at the appropriate time in your script.js file!
// import { formSubmission } from './scriptHelper.js';

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { addDestinationInfo, myFetch } = require("./scriptHelper");


window.addEventListener("load", function() {

    console.log('print something');

    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    
    form.addEventListener("submit", function(event) {
        
        //let list = [pilotName, copilotName, fuelLevel, cargoMass]
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            // event.preventDefault();
        } else {

            
            formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
            event.preventDefault();

        }
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageURL);

    });
   
});

