/*TODO
- adjust the size of country image
*/

import fetch from 'node-fetch'
let countries
/*Global Variables*/
//Geonames API
const geonamesBaseUrl = 'http://api.geonames.org/searchJSON?q='

const geonamesApiKey = 'hasan79'

//Weatherbit API
var weatherbitBaseUrl = ' '
const weatherbitCurrent = 'http://api.weatherbit.io/v2.0/current?'
const weatherbitForecast = 'http://api.weatherbit.io/v2.0/forecast/daily?'
const weatherbitApiKey = '334b39cd7f05408190e076877f6411f9'

//Pixabay API
const pixabayBaseUrl = 'https://pixabay.com/api/?key='
const pixabayApiKey = '22008827-e069452971dbec7aa6f1cef1a'

/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked */
document.getElementById('depart_btn').addEventListener('click', performAction)

export async function performAction (e) {
  e.preventDefault()
  /* const destinationCountry = document.getElementById('destinationCountry').value*/
  const destination_city = document.getElementById('destination_city').value
  const dateDepart = document.getElementById('dateDepart').value
  const dateReturn = document.getElementById('dateReturn').value
  const daysTillDepart = getDaysTillDepart(dateDepart)
  const tripDuration = getTripDuration(dateDepart, dateReturn)

  if (daysTillDepart <= 1) {
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
        dateDepart: dateDepart,
        dateReturn: dateReturn,
        tripDuration: tripDuration,
        daysTillDepart: daysTillDepart
      })
    })
    .then(function (data) {
      return getPixabayData(pixabayBaseUrl, pixabayApiKey, destination_city)
    })
    .then(function (data) {
      updateUI(data.hits[0].imageURL)
    })
  /*.then(function (data) {
      return getRestCountriesInfo(countriesData)
    })*/
}

//Function that generates the countdown to date of departure
function getDaysTillDepart (dateDepart) {
  const now = new Date()
  const nowSeconds = Date.parse(now)
  const dateDepartSeconds = Date.parse(dateDepart)
  const difference = Math.abs(dateDepartSeconds - nowSeconds)
  const daysTillDepart = Math.ceil(difference / (1000 * 60 * 60 * 24))
  console.log(daysTillDepart)
  return daysTillDepart
}

//Function that generates the trip duration
function getTripDuration (dateDepart, dateReturn) {
  const tripLengthDepart = Date.parse(dateDepart)
  const tripLengthReturn = Date.parse(dateReturn)
  const diff = Math.abs(tripLengthDepart - tripLengthReturn)
  const tripDuration = Math.ceil(diff / (1000 * 60 * 60 * 24))
  console.log(tripDuration)
  return tripDuration
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
export const getWeatherbitData = async (weatherbitBaseUrl, lat, lng) => {
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
export const getPixabayData = async (
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

//Function to POST data
export const postData = async (url = ' ', data = {}) => {
  //console.log(`Data is ${data}`)
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
    const travelData = await req.json()
    document.getElementById('picture').src = imageURL
    /*document.getElementById('picture').alt = travelData.destination*/
    document.getElementById(
      'location'
    ).innerHTML = `Destination: ${travelData.destination}`
    document.getElementById(
      'outbound'
    ).innerHTML = `Trip Start: ${travelData.dateDepart} `
    document.getElementById(
      'inbound'
    ).innerHTML = `Trip End: ${travelData.dateReturn}`
    document.getElementById(
      'tripDuration'
    ).innerHTML = `Trip Duration: ${travelData.tripDuration} days`
    if (travelData.daysTillDepart === 1) {
      document.getElementById('daysTillDepart').innerHTML =
        'Your trip starts tomorrow!'
    } else {
      document.getElementById(
        'daysTillDepart'
      ).innerHTML = `You have ${travelData.daysTillDepart} days to go before your trip starts!`
    }

    document.getElementById(
      'capital'
    ).innerHTML = `Capital: ${countryData.capital}`
    document.getElementById('language').innerHTML =
      'Language(s): ' +
      countryData.languages
        .filter(n => n.name)
        .map(n => `${n.name}`)
        .join(', ')
    document.getElementById('diallingcode').innerHTML =
      'Dialling Code: +' + countryData.callingCodes[0]
    document.getElementById(
      'population'
    ).innerHTML = `Population: ${countryData.population}`

    //if trip is less than 4 days away, display the current weather
    if (travelData.daysTillDepart <= 1) {
      document.getElementById(
        'weatherCurrent'
      ).innerHTML = `Today\'s weather: ${travelData.data[0].temp} °C `
      const weatherIcon = document.createElement('img')
      weatherIcon.id = 'icon'
      weatherIcon.src =
        'https://www.weatherbit.io/static/img/icons' +
        travelData.data[0].weather.icon +
        '.png'
      document.getElementById('weatherCurrent').appendChild(weatherIcon)
    } else {
      document.getElementById('weatherHeading').innerHTML =
        '16- Day Weather Forecast'

      for (let i = 0; i < 16; i++) {
        const weatherForecast = document.getElementById('weatherForecast')

        const date = document.createElement('div')
        date.textContent = travelData.data[i].datetime
        const highTemp = document.createElement('div')
        highTemp.textContent = `Max temp: ${travelData.data[i].high_temp}`
        const lowTemp = document.createElement('div')
        lowTemp.textContent = `Min temp: ${travelData.data[i].low_temp}`
        const icon = document.createElement('img')
        icon.src =
          'https://www.weatherbit.io/static/img/icons/' +
          travelData.data[i].weather.icon +
          '.png'
        icon.alt = 'weather icon'

        weatherForecast.appendChild(date)
        weatherForecast.appendChild(highTemp)
        weatherForecast.appendChild(icon)
        weatherForecast.appendChild(lowTemp)
        weatherForecast.appendChild(icon)
      }
    }
  } catch (error) {
    console.log('error', error)
  }
}
