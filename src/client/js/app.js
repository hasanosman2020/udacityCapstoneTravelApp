import fetch from 'node-fetch'

/*Global Variables*/
//Geonames API
const geonamesBaseUrl = 'http://api.geonames.org/searchJSON?q='

const geonamesApiKey = 'hasan79'

//Weatherbit API
let weatherbitBaseUrl = ' '
const weatherbitCurrent = 'http://api.weatherbit.io/v2.0/current?'
const weatherbitForecast = 'http://api.weatherbit.io/v2.0/forecast/daily?'
const weatherbitApiKey = '334b39cd7f05408190e076877f6411f9'

//Pixabay API
const pixabayBaseUrl = 'https://pixabay.com/api/?key='
const pixabayApiKey = '22008827-e069452971dbec7aa6f1cef1a'

/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked */
document.getElementById('depart_btn').addEventListener('click', performAction)

function performAction (e) {
  e.preventDefault()
  const destination_city = document.getElementById('destination_city').value
  const date_depart = document.getElementById('date_depart').value
  const date_return = document.getElementById('date_return').value
  const timeRemaining = getTimeRemaining(date_depart)
  const tripLength = getTripLength(date_depart, date_return)
  if (timeRemaining <= 7) {
    weatherbitBaseUrl = weatherbitCurrent
  } else {
    weatherbitBaseUrl = weatherbitForecast
  }

  getGeonamesData(destination_city)
    .then(function (data) {
      return getWeatherbitData(
        weatherbitBaseUrl,
        data.geonames[0].lat,
        data.geonames[0].lng,
        weatherbitApiKey
      )
    })
    .then(function (data) {
      return postData('/', {
        data: data.data,
        destination: destination_city,
        departure: date_depart,
        return: date_return,
        days: timeRemaining
      })
    })
    .then(function (data) {
      return getPixabayData(pixabayBaseUrl, pixabayApiKey, destination_city)
    })
    .then(function (data) {
      updateUI(data.hits[0].webformatURL)
    })
}

//Function that generates the time remaining till date of departure

//The variable 'total' holds the remaining time until the date of departure. The Date.parse() function convers a time string into a value in milliseconds which allos us to subtract two times from each other and get the amount of time in between.
function getTimeRemaining (date_depart) {
  const total = Date.parse(date_depart) - Date.parse(new Date())

  //convert the miiliseconds to days
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  console.log(days)
  return days
}

//Function that generates the number of days of the trip
function getTripLength (date_depart, date_return) {
  const triplength_depart = Date.parse(date_depart)
  const triplength_return = Date.parse(date_return)
  const diff = Math.abs(triplength_depart - triplength_return)
  const tripLength = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return tripLength
}

//Async function makes GET request to the Geonames API to obtain Geonames data (i.e. co-ordinates) using fetch() method
const getGeonamesData = async destination_city => {
  const res = await fetch(
    `${geonamesBaseUrl}${destination_city}&maxRows=10&username=hasan79`
  )
  //call API
  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('error', error)
  }
}

//Async function makes GET request to the Weatherbit API to obtain Weatherbit API data using fetch() method
const getWeatherbitData = async (weatherbitBaseUrl, lat, lng) => {
  const res = await fetch(
    `${weatherbitBaseUrl}&lat=${lat}&lon=${lng}&key=334b39cd7f05408190e076877f6411f9`
  )
  //call API
  try {
    const data = await res.json()
    //console.log(data)
    return data
  } catch (error) {
    console.log('error', error)
  }
}

//Async function makes GET request to the Pixabay  API to obtain images using fetch() method
const getPixabayData = async (
  pixabayBaseUrl,
  pixabayApiKey,
  destination_city
) => {
  const res = await fetch(
    `${pixabayBaseUrl}${pixabayApiKey}&q=${destination_city}&image_type=photo`
  )
  //call API
  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('error', error)
    alert('Cannot find your destination')
  }
}

//Async function makes a POST request to add the API data to the app using fetch() method
const postData = async (url = ' ', data = {}) => {
  const res = await fetch('http://localhost:3000', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  try {
    const newData = await res.json()
    console.log(newData)
    return newData
  } catch (error) {
    console.log('error', error)
  }
}

const updateUI = async imageURL => {
  const req = await fetch('http://localhost:3000/data')
  try {
    const allData = await req.json()
    console.log(allData)
    document.getElementById('picture').src = imageURL
    document.getElementById('picture').alt = allData.destination
    document.getElementById(
      'location'
    ).innerHTML = `Your trip is to ${allData.destination}`
    document.getElementById(
      'duration'
    ).innerHTML = `Your trip is ${allData.tripLength} days long.`
    //if trip is less than 4 days away, display the current weather
    if (allData.days <= 4) {
      document.getElementById('weather').innerHTML =
        'Current weather: ' + allData.data[0].temp + ' °C '
    }
  } catch (error) {
    console.log('error', error)
  }
}

export {
  performAction,
  getTimeRemaining,
  getWeatherbitData,
  postData,
  getPixabayData
}
