import { json } from 'body-parser'
import fetch from 'node-fetch'

/*Global Variables*/
//Geonames API
const geonamesBaseUrl = 'http://api.geonames.org/searchJSON?q='
const geonamesApiKey = 'hasan79'

//Weatherbit API
const weatherbitBaseUrl = 'http://api.weatherbit.io/v2.0/current?'
const weatherbitApiKey = '334b39cd7f05408190e076877f6411f9'

//Pixabay API
const pixabayBaseUrl = 'https://pixabay.com/api/?key='
const pixabayApiKey = '22008827-e069452971dbec7aa6f1cef1a'

/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked 
document.getElementById('depart_btn').addEventListener('click', performAction)

function performAction (e) {
  e.preventDefault()
  const destination_city = document.getElementById('destination_city').value
  const date_depart = document.getElementById('date_depart').valueAsDate
  const date_return = document.getElementById('date_return').valueAsDate

  console.log(
    `city: ${destination_city}, depart:${date_depart}, return:${date_return}`
  )
}

const geonamesData = await getGeonamesData(destination_city)
const weatherbitData = await getWeather(
  weatherbitBaseUrl,
  geonamesData.geonames[0].lat,
  geonamesData.geonames[0].lng,
  weatherbitApiKey
)
const pixabayData = await getPixabayData(
  pixabayBaseUrl,
  pixabayApiKey,
  destination_city
)
await postData('http://localhost:3000/addWeatherbitData', {
  weatherbitData: weatherbitData,
  city: destination_city,
  departure: date_depart,
  picture: pixabayData
})

updateUI()

/*
getGeonamesData(destination_city)
  .then(function (data) {
    return getWeather(
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
      departure: date_depart
    })
  })
  .then(function (data) {
    return getPixabay(pixabayBaseUrl, pixabayApiKey, destination_city)
  })
//.then(function (data) {
//updateUI(data.hits[0].webformatURL)
//})

/*postData('http://localhost:3000/addGeonamesData', {
        city: destination_city,
        depart: date_depart,
        return: date_return,
        latitude: data.geonames[0].lat,
        longitude: data.geonames[0].lng
      }).then(function () {
        updateUI()
      })
    })
  }
  */
//Async function makes GET request to the Geonames API to obtain Geonames data (1.e. co-ordinates) using fetch() method
/*
const getGeonamesData = async destination_city => {
  const res = await fetch(
    `http://api.geonames.org/searchJSON?q=${destination_city}&maxRows=10&username=hasan79`
  )
  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('error', error)
  }
}

//Async function makes GET request to the Weatherbit API to obtain Weatherbit API data using fetch() method
export const getWeather = async (
  weatherbitBaseUrl,
  lat,
  lon,
  weatherbitApiKey
) => {
  const res = await fetch(
    `${weatherbitBaseUrl}&lat=${lat}&lon=${lon}&key=${weatherbitApiKey}`
  )
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
  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('error', error)
    alert('Cannot find your destination')
  }
}

postData = async () => {
  '/addGeonamesData',
    (data = { longitude: data.geonames[0].lon, latitude: data.geonames[0].lat })

  //Async function makes a POST request to add the API data to the app using fetch() method

  const postData = async (url = ' ', data = {}) => {
    console.log('Data is ' + data)
    const res = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    try {
      const newWeatherData = await res.json()
      console.log(newWeatherData)
      return newWeatherData
    } catch (error) {
      console.log('error', error)
    }
  }
}
/*
//Function to update UI
async function updateUI () {
  const response = await fetch('http://localhost:3000/getData')
  const allData = await response.json()
  console.log(allData)

  const updateUI = async webFormatURL => {
    const res = await fetch('http://localhost:3000/getData')
    try {
      const allData = await res.json()
      document.getElementById('city_image').src = allData.image
      document.getElementById('city_image').alt = allData.city_destination
      document.getElementById('city_destination').innerHTML =
        'You are travelling to ' + allData.city_destination
    }
  
  
//document.getElementById('days').innerHTML =
// 'You have ' +
//allData.days +
//' days to go before your trip to ' +
//allData.city_destination

/*
  if (allData.days <= 7) {
    document.getElementById('currentWeather').innerHTML =
      'Current weather is: ' + allData.weatherbitData.data[0].temp + '°C'

    const icon = document.createElement('img')
    icon.setAttribute('id', 'icon')
    icon.src =
      'https://www.weatherbit.io/static/img/icons/' +
      allData.weatherbitData.data[0].weather.icon +
      '.png'
    icon.alt = 'weather icon'

    document.getElementById('currentWeather').appendChild(icon)
  } else {
    document.getElementById('weatherForecast').innerHTML =
      '10-day weather forecast: '
    for (var i = 0; i < 10; i++) {
      const weatherForecast = document.getElementById('weatherForecast')
    }
  }
  const date = document.createElement('div')
  date.setAttribute('id', 'day')
  date.textContent = allData.weatherData.data[i].datetime

  const icon = document.createElement('img')
  icon.setAttribute('id', 'icon')
  icon.src =
    'https://www.weatherbit.io/static/img/icons/' +
    allData.weatherData.data[i].weather.icon +
    '.png'
  icon.alt = 'weather icon'

  weatherForecast.appendChild(date)
  weatherForecast.appendChild(icon)
  //} catch (error) {
  //console.log('error', error)
}


export { performAction, getWeather, postData }
*/
