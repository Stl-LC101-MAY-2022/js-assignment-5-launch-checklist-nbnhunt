// Write your JavaScript code here!
// Make sure to call your formSubmission() function at the appropriate time in your script.js file!
const helperScript = require('./scriptHelper.js');


window.addEventListener("load", function() {

    helperScript.formSubmission

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});