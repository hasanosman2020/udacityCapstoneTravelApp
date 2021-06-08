//* Global Variables */

/** Personal API key for OpenWeatherMap API */
const geoNamesUsername = 'hasan79';
const geoNamesRoot = 'http://api.geonames.org/searchJSON?q=';
//const apiKey = '&appid=297d714c461b021c0e0eac76978ccbad&units=metric'
//const weatherBitApiKey = process.env.weatherBitApiKey;


import fetch from 'node-fetch'

//Event listener to add function to existing DOM element ("Let's Go!" button with id "depart-btn") to create an event when the button is clicked
document.getElementById('depart-btn').addEventListener('click', performAction)

//Function that fires off when the click has been registered
async function performAction (e) {
  e.preventDefault()

  //Before clicking on the "Let's Go!" button, the user first inputs the city of his destination and dates of his journey - this information is stored in variables.
  const destinationCity = document.getElementById('destination-city').value
  const departureDate = document.getElementById('date-departure').value
  const returnDate = document.getElementById('date-return').value

  // Create a new date instance dynamically with JS
  let d = new Date()
  let currentDate = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear();

  if (parseInt(departureDate) >= parseInt(currentDate)) {
    const departDate = departureDate;
  }

  getGeonamesCoords(geoNamesRoot, geoNamesUsername, city)
  .then(function (geonamesCoords){
    const lat = geonamesCoords.lat;
    const lon = geonamesCoords.lon;
    postData('http://localhost:3000/addGeonamesCoords', {
      lat: geonamesCoords.lat,
      lon: geonamesCoords.lon,
      city: geonamesCoords.city
    })
    //console.log(geonamesCoords.city)
    .then(() => {
      updateUI();
    })
  })
}

/**************************************/
//function to get Geonames API data
const getGeonamesCoords = async(geoNamesRoot, geonamesCoords, geoNamesUsername) => {
  const res = await fetch(`${geoNamesRoot}&city=${geonamesCoords.city}&maxRows=10&username=hasan79&style=SHORT`);

  //call API
  try {
    const geonamesCoords = await res.json();
    console.log(geonamesCoords);
    return geonamesCoords;
    //handle error
  } catch (error) {
    console.log('error', error);
  }
};

//function to POST data
const postData = async (url = ' ', projectData = {}) => {
  const res = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectData),
  });
};

//function to update UI
export const updateUI = async () => {
  const request = await fetch('http://localhost:3000/getData');
  try {
    const geonamesCoords = await request.json();
    document.getElementById('latitude').innerHTML = geonmesCoords['latitude'];
    document.getElementById('longitude').innerHTML = geonmesCoords['longitude'];
    document.getElementById('city').innerHTML = geonmesCoords['city'];
  } catch (error) {
    console.log('error', error);
  }
}


export { performAction }
