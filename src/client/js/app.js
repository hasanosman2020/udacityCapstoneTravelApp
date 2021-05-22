/* Global Variables */

/** Personal API key for OpenWeatherMap API */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=297d714c461b021c0e0eac76978ccbad&units=metric'

// Create a new date instance dynamically with JS
let d = new Date()
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear()

//Event listener to add function to existing DOM element (button with id "depart-btn") to create an event when the button is clicked
document.getElementById('depart-btn').addEventListener('click', performAction)

function performAction (e) {
  const newCity = document.getElementById('city').value
  /* const feelings = document.getElementById('feelings').value*/
  console.log(newDate)

  getWeather(baseURL, newCity, apiKey).then(function (data) {
    console.log(data)

    postData('http://localhost:3000/add', {
      date: newDate,
      temp: data.main.temp,
      content: feelings
    })
    updateUI()
  })

  const getWeather = async (baseURL, newCity, apiKey) => {
    const res = await fetch(`${baseURL} ${newCity}${apiKey}`)
    try {
      const data = await res.json()
      return data
    } catch (error) {
      console.log('error', error)
    }
  }

  const postData = async (
    url = '/add',
    data = { date: newDate, temp: data.list[0].main.temp, content: feelings }
  ) => {
    console.log(data)
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    try {
      const newData = await response.json()
      console.log(newData)
      return newData
    } catch (error) {
      console.log('error', error)
    }
  }

  const updateUI = async () => {
    const request = await fetch('http://localhost:3000/all')
    try {
      const allData = await request.json()
      document.getElementById('date').innerHTML = `Date: ${allData.date}`
      document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}`
      document.getElementById(
        'content'
      ).innerHTML = `I feel: ${allData.content}`
    } catch (error) {
      console.log('error', error)
    }
  }
}
