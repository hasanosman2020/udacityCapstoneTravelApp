require('dotenv').config()
const fetch = require('node-fetch')

const path = require('path')

// Setup empty JS object to act as endpoint for all routes
let projectData = {}

// Require Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express()

//Dependencies
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// Initialize the main project folder
const { url } = require('inspector')
const { response } = require('express')
app.use(express.static('dist'))

// Setup Server
const port = 3000

//Spin up the server
const server = app.listen(port, listening)

//Callback to debug
function listening () {
  console.log('The server is running.')
  console.log(`The server is running on localhost: ${port}.`)
}

//Initialise all route with a callback function - here the app needs data from the server, the callback function is sendData and it instructs the server to send data to the app whenever it gets a request from the app. The data the server sends is projectData
app.get('/', function (req, res) {
  res.send('dist/index.html')
})

//POST route - here the app sends data to the server and the server displays what is in the body of the app in the app's console before pushing it to projectData
app.post('/clientData', async (req, res) => {
  const data = req.body
  projectData = data
  console.log(projectData)

  /******Geonames API****** */
  const geoNamesUsername = process.env.geoNamesApiKey
  const geoNamesRoot = 'http://api.geonames.org/searchJSON?q='
  //console.log(`Your Geonames username is ${process.env.geoNamesApiKey}`)
  const cityName = document.getElementById('city').value
  const geoNamesUrl = await fetch(
    `${geoNamesRoot}${data.city}&username=${geoNamesUsername}&maxRows=10`,
    {
      method: 'POST'
      /*credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }*/
    }
  )

  try {
    const geoData = await geoNamesUrl.json()
    projectData['longitude'] = geoData.geonames[0].lng
    projectData['latitude'] = geoData.geonames[0].lat
    projectData['name'] = geoData.geonames[0].name
    projectData['countryName'] = geoData.geonames[0].countryName
    projectData['cityName'] = geoData.geonames[0].cityName

    console.log('apiData:', projectData)
    res.send(projectData)
  } catch (err) {
    console.log('error', err)
  }
})

/*
//GET endpoint gets the data for the UI
app.get('/getData', (req, res) => {
  console.log(projectData)
  res.send(projectData)
  res.json({ message: 'Data received.' })
})*/

/*********WEATHERBIT API************/
const weatherBitAPI = `&key=${process.env.weatherBitAPIKey}`
const weatherBitRoot = 'https://api.weatherbit.io/v2.0/forecast/daily?'

//Endpoint for the weatherbit API
app.get('/getWeatherbit', async (req, res) => {
  console.log(`Latitude is {projectData.lat}`)
  console.log(`Longitude is {projectData.lon}`)

  const lat = projectData.lat
  const lon = projectData.lon
  const weatherBitURL = `${weatherBitRoot}lat=${lat}&lon=${lon}${weatherBitAPI}`
  console.log(`WeatherBitURL is {weatherBitURL}`)

  try {
    const response = await fetch(weatherBitURL)

    //check for failed data transfer
    if (!response.ok) {
      console.log(
        `Error connecting to Weatherbit API. Response status ${response.status}`
      )
      response.send(null)
    }
    const weatherBitData = await response.json()
    projectData['icon'] = weatherBitData.data[0].weather.icon
    projectData['description'] = weatherBitData.data[0].weather.description
    projectData['temp'] = weatherBitData.data[0].temp
    res.send(weatherBitData)
    console.log(weatherBitData)
    //if failed connection to API, return null
  } catch (error) {
    console.log(`Error connecting to server: ${error}`)
    res.send(null)
  }
})

//GET endpoint gets the dta for the UI
app.get('/getData', (req, res) => {
  console.log(projectData)
  res.send(projectData)
  res.json({ message: 'The endpoint test passed.' })
})

module.exports = app
