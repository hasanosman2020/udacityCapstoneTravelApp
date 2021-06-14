//'use strtict';

import fetch from 'node-fetch';

//* Global Variables */

/** Personal API key for OpenWeatherMap API */
//const geoNamesUsername = 'hasan79';
const  geonamesBaseUrl= 'http://api.geonames.org/searchJSON?q=';
const geonamesApiKey = 'hasan79';
/*
const weatherBitUrl = ' ';
const weatherBitUrlCurrent = 'http://api.weatherbit.io/v2.0/current?';
const weatherbitUrlForecast = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const weatherBitApiKey = '&units=I&key=334b39cd7f05408190e076877f6411f9';
const pixabayUrl = 'https://pixabay.com/api/?';
const pixabayApiKey = '22008827-e069452971dbec7aa6f1cef1a'; 
*/
//Event listener to add function to existing DOM element ("Let's Go!" button with id "depart-btn") to create an event when the button is clicked
document.getElementById('depart_btn').addEventListener('click', performAction)

//Function that fires off when the click has been registered, i.e. ffunction called by event listener (taken from knowledge.udacity.com/questions/606882)

  //Before clicking on the "Let's Go!" button, the user first inputs the city of his destination and dates of his journey - this information is stored in variables.
  export async function performAction (e) {
  const destination_city = document.getElementById('destination_city').value;
  const date_depart = document.getElementById('date_depart').valueAsDate;
  const date_return = document.getElementById('date_return').valueAsDate;
  //
  //add countdown to departureDate
 // const countdown = getCountdown(date_depart)
  //add length of trip for weather forecast
  //const tripLength = getTripLength(date_depart, date_return);
  //if(countdown <= 7){
    //weatherBitUrl = weatherBitUrlCurrent;
    //else {
      //weatherBitUrl = weatherBitUrlForecast;
      //}
    
  
  const geonamesData = await getGeonamesCoords(geonamesBaseUrl, geonamesApiKey,destination_city);
  const weatherBitData = await getWeatherBitData(
    weatherBitUrl, weatherBitApiKey, geonamesData.geonames[0].lat,
    geonamesData.geonames[0].lng
  );

  updateUI();
  }
  /*
  .then(function(data) {
    return getWeatherbit (weatherBitUrl, data.geonames[0].lat, data.geonames[0].lng, weatherBitApiKey)
  })
  */
 await postData('http://localhost:3000') 
  .then(function(data) {
    return postData('http://localhost:3000/addData', {data: data.data, destination: destination_city, count: countdown, date_depart: date_depart, length: tripLength})
  })
  
  .then(function(data){
    return getPixabayPic(pixabayUrl, pixabayApiKey, city);
})
.then(function(data) { 
  updateUI(data.hits[0].webformatURL);
})


  // Create a new date instance dynamically with JS - function that generates trip length
  //insert function that generates countdown
  let d = new Date()
  let currentDate = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear();

  if (parseInt(date_depart) >= parseInt(currentDate)) {
    const departDate = date_depart;
  }


  getGeonamesCoords(geonamesBaseUrl, city)
  .then(function (geonamesCoords){
    const lat = geonamesCoords.lat;
    const lng = geonamesCoords.lng;
    postData('http://localhost:3000/addGeonamesCoords', {
      lat: geonamesCoords.lat,
      lng: geonamesCoords.lng,
      city: geonamesCoords.city
    })
    //console.log(geonamesCoords.city)
    .then(() => {
      updateUI();
    })
  })
}


/*******GEONAMES API**********/
//async function makes GET request to the Geonames API to get Geonames API data, i.e. co-ordinayes, using fetch()
const getGeonamesCoords = async(geonamesBaseUrl, destinationCity)  => {
  const res = await fetch(`${geonamesBaseUrl}&city=${destinationCity}&maxRows=10&username=hasan79`);

  //call API
  try {
    const data = await res.json();
    console.log(data);
    return data;
    //handle error
  } catch (error) {
    console.log('error', error);
  }
};

/***********WEATHERBIT API********/
//async function makes GET request to the Weatherbit API to get the weather data, using fetch() 
const getWeatherbit = async(weatherBitUrl, lat, lng, weatherBitApiKey)  => {
  const res = await fetch(weatherBitUrl + 'lat=' + lat + 'lng=' + lng + '&key=' + weatherBitApiKey);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', error);
  }
  };

  /**********PIXABAY API********* */
  //async function makes a GET request to Pixabay API to get images from Pixabay, using fetch()
  const getPixabayPic = async(pixabayUrl, pixabayApiKey, city) => {
    const res = await fetch (`${pixabayUrl}+key=${pixabayApiKey}&q=${city}&image_type=photo`
    );
    try {
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log('error', error)
    }
  };




//async function that makes a POST request to add the API data to the app
//Query: do we change 'projectData' to 'data' in line with the code above?
const postData = async (url = ' ', projectData = {}) => {
  const res = await fetch ('http://localhost:3000/clientData', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectData),//this is how we access data on the server side - data sent to a web server has to be a string and it is attached to the body of the request. 
  });
  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log('error', error)
  }}
  

//function to update UI
export const updateUI = async (imageUrl) => {
  const request = await fetch('http://localhost:3000/clientData');
  try {
    const allData = await request.json();
    document.getElementById('image-destination').innerHTML = imageUrl;
    document.getElementById('image-destination').innerHTML = allData.destinationCity;
    document.getElementById('destinationCity').innerHTML = 'Your trip to' + allData.destinationCity + ' is ' + allData.destinationCity + ' days away'
  } catch (error) {
    console.log('error', error);
  }
}



export { performAction, getWeatherbit, postData }
