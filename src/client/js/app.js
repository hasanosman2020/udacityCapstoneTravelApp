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
const pixabayApiKey = '22008827 - e069452971dbec7aa6f1cef1a'

/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked */
document.getElementById('depart_btn').addEventListener('click', performAction)

export async function performAction (e) {
  const destination_city = document.getElementById('destination_city').value
  const date_depart = document.getElementById('date_depart').valueAsDate
  const date_return = document.getElementById('date_return').valueAsDate

  console.log(
    `city: ${destination_city}, depart:${date_depart}, return:${date_return}`
  )

  getGeonamesData(destination_city).then(function (data) {
    return getWeatherbitData(
      weatherbitBaseUrl,
      data.geonames[0].lat,
      data.geonames[0].lng,
      weatherbitApiKey
    )
  })
}

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
const getWeatherbitData = async (
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
const getPixabay = async (pixabayBaseUrl, pixabayApiKey, destination_city) => {
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

const postData = async () => {
  '/addGeonamesData',
    (data = { longitude: data.geonames[0].lon, latitude: data.geonames[0].lat })
}

const postRequest = async () => {
  const req = await fetch(url, {
    method: 'POST',
    credentials: same - origin,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  try {
    const allData = await postRequest.json()
    console.log(allData)
    return allData
  } catch (error) {
    console.log('error', error)
  }

  const updateUI = async () => {
    const req = await fetch('http://localhost:3000/all')
    try {
      const allData = await req.json()
      document.getElementById(
        'destination_city'
      ).innerHTML = `Destination: ${allData[0].city}`
    } catch (error) {
      console.log('error', error)
    }
  }
}
