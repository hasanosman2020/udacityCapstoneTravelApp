//require('dotenv').config()
//const fetch = require('node-fetch')

const path = require('path')

// Setup empty JS object to act as endpoint for all routes
const travelData = {}

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

const fetch = require('node-fetch')

// Initialize the main project folder
//const { url } = require('inspector')
//const { response } = require('express')
app.use(express.static('dist'))

/***POST route***/

app.post('/', addData)

function addData (req, res) {
  newData = {
    data: req.body.data,
    destination: req.body.destination_city,
    dateDepart: req.body.dateDepart,
    dateReturn: req.body.dateReturn,
    daysTillDepart: req.body.daysTillDepart,
    tripDuration: req.body.tripDuration,
    name: req.body.name,
    capital: req.body.capital,
    population: req.body.population,
    language: req.body.language,
    region: req.body.region,
    subregion: req.body.subregion
  }

  travelData.data = req.body.data
  travelData.destination = req.body.destination
  travelData.dateDepart = req.body.dateDepart
  travelData.dateReturn = req.body.dateReturn
  travelData.daysTillDepart = req.body.daysTillDepart
  travelData.tripDuration = req.body.tripDuration

  res.send(newData)
}

//GET endpoint gets the data for the UI
app.get('/data', function (req, res) {
  res.send(travelData)
})

module.exports = app
