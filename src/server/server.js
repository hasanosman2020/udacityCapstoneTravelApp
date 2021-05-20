// Setup empty JS object to act as endpoint for all routes
projectData = {}

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
const { response } = require('express')
app.use(cors())

// Initialize the main project folder
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

/*
//Initialise all route with a callback function - here the app needs data from the server, the callback function is sendData and it instructs the server to send data to the app whenever it gets a request from the app. The data the server sends is projectData
app.get('/all', sendData)

//Callback function to complete GET '/all'
function sendData (req, res) {
  res.send(projectData)
}

/*The code below is the project 4 code, as well as the code above. The code below does not apply to the capstone project .*/

/*
//POST route - here the app sends data to the server and the server displays what is in the body of the app in the app's console before pushing it to projectData
app.post('/add', addData)

function addData (req, res) {
  console.log(projectData)

  //saving the data in a variable
  projectData = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  }

  //send projectData as response
  res.send(projectData)
}
*/
/****GEONAMES API****/
const geoNamesUsername = process.env.geoNamesApiKey
const baseURL = 'http://api.geonames.org/searchJSON?q='
console.log(`Your Geonames username is ${process.env.geoNamesApiKey}`)

//GET
app.get('/', sendData)

function sendData (req, res) {
  res, send(projectData)
}

//POST
app.post('/clientData', async (req, res) => {
  projectData = req.body
  console.log(projectData)
  const cityName = document.getElementById('city').value
  const geoNamesUrl = await fetch(
    `${baseURL}${cityName}&maxRows=10&username=${geoNamesUsername}`,
    {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  console.log('result ====>', geoNamesUrl)

  try {
    const geoData = await geoNamesUrl.json()
    projectData['long'] = geoData.geonames[0].lng
    projectData['lat'] = geoData.geonames[0].lat
    projectData['name'] = geoData.geonames[0].name
    projectData['countryName'] = geoData.geonames[0].countryName
    console.log('Data:', projectData)
    res.send(projectData)
  } catch (err) {
    console.log('error', err)
  }
})
