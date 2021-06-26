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

/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked */
document.getElementById('depart_btn').addEventListener('click', performAction)

export async function performAction (e) {
  e.preventDefault()
  const destination_city = document.getElementById('destination_city').value
  const date_depart = document.getElementById('date_depart').value
  const date_return = document.getElementById('date_return').value
  /*
    const geonamesData = await getGeonamesData(destination_city)
  
    const weatherbitData = await getWeatherbitData(
      weatherbitBaseUrl,
      geonamesData.geonames[0].lat,
      geonamesData.geonames[0].lon
    )
  
    const pixabayData = await getPixabayData(
      pixabayBaseUrl,
      pixabayApiKey,
      destination_city
    )
  
    await postData('http://localhost:3000/addWeatherbitData', {
      weatherbitData: weatherbitData,
      destination_city: destination_city,
      date_depart: date_depart,
      date_return: date_return,
      picture: pixabayData
    })
  
    updateUI(pixabayData.hits[0].webformatURL)
  }
  */
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
        return: date_return
      })
    })
    .then(function (data) {
      return getPixabayData(pixabayBaseUrl, pixabayApiKey, destination_city)
    })
    .then(function (data) {
      updateUI(data.hits[0].webformatURL)
    })
}
/*
getGeonamesData(destination_city).then(function (data) {
  return getWeatherbitData(
    weatherbitBaseUrl,
    data.geonames[0].lat,
    data.geonames[0].lng,
    weatherbitApiKey
  )
})

postData('http://localhost:3000/addGeonamesData', {
  city: destination_city,
  depart: date_depart,
  return: date_return,
  latitude: data.geonames[0].lat,
  longitude: data.geonames[0].lng
}).then(function () {
  updateUI()
})
*/

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

//Function to POST data
export const postData = async (url = ' ', data = {}) => {
  console.log(`Data is ${data}`)
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
    document.getElementById('destination_image').src = imageURL
    document.getElementById('destination_image').alt = allData.destination_city
    document.getElementById('destination_city').innerHTML =
      'Your trip is to ' + allData.destination_city
  } catch (error) {
    console.log('error', error)
  }
}
