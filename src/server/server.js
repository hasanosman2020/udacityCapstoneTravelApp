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

//GET endpoint gets the data for the UI
app.get('/getData', (req, res) => {
  console.log(projectData);
  res.send(geonamesCoords);
});

  let geonamesCoords= [];

  app.post('/addGeonamesCoords', (req, res) => {
    geonamesCoords = {
      city: req.body.name,
      lat: req.body.lat,
      lon: req.body.lon
    };
    console.log(geonamesCoords)
  })