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

// so the first if statement doesn't return the right thing, because it's not testing for a negative, it's just the function taking a parameter...
function validateInput(testInput) {
    if (isNaN(testInput)) {
        return("Not a Number"); 
    } 
    if (isNaN('')) {
        return("Empty");
    }
    return("Is a Number");
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // if the form is submitted and passes through script, this function will take in a document as a parameter, with strings representing form inputs, and updating the <div id=faultyItems> list using template literals


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
