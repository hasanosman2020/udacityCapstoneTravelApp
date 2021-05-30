//* Global Variables */

/** Personal API key for OpenWeatherMap API */
//const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
//const apiKey = '&appid=297d714c461b021c0e0eac76978ccbad&units=metric'

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
  /* const feelings = document.getElementById('feelings').value*/

  // Create a new date instance dynamically with JS
  let d = new Date()
  let currentDate = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear()

  if (parseInt(departureDate) >= parseInt(currentDate)) {
    const departDate = departureDate

    await postData('/clientData', {
      city: city,
      date: departDate
    })

    //function to call servers after post request
    await callServer('/getWeatherbit')
    await callServer('/getPix')
    await callServer('/getRest')

    const travelData = await callServer('/getData')
    console.log(travelData)

    updateUI()
  } else {
    alert('Plesase enter a valid date')
  }
}

//POST route for server
async function postData (url, tripData) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tripData)
  })
}

//call to server for data
const callServer = async url => {
  const asyncParams = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const res = await fetch(url, asyncParams)
  try {
    const data = await res.json()
    return data
  } catch {
    console.log(`Error: ${res.statusText}`)
  }
}

//function that updates the UI with a call to the server
async function updateUI () {
  const response = await fetch('/getData')
  const userData = await response.json()
  console.log(userData)
  document.querySelector('.city').innerHTML = userData.city
}

export { callServer, updateUI }
