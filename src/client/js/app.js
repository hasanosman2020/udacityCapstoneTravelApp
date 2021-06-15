import fetch from 'node-fetch'

/*Global Variables*/
const geonamesBaseUrl = 'http://api.geonames.org/searchJSON?q=';
const geonamesApiKey = 'hasan79';

/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked */
document.getElementById('depart_btn').addEventListener('click', performAction)

export async function performAction(e){
  const destination_city = document.getElementById('destination_city').value;
  const date_depart = document.getElementById('date_depart').valueAsDate;
  const date_return = document.getElementById('date_return').valueAsDate;
  
  console.log(`city: ${destination_city}, depart:${date_depart}, return:${date_return}`);

  getGeonamesData(geonamesBaseUrl)
  .then(function(data){
    postData('http://localhost:3000/addGeonamesData', {city: destination_city, depart: date_depart, return: date_return})

  
  .then(function(){
    updateUI();
  })
})
}

const getGeonamesData = async(geonamesBaseUrl) => {
  const res = await fetch(`${geonamesBaseUrl}${destination_city}&maxRows=10&username=hasan79`)
try {
  const data = await res.json();
  console.log(data);
  return data;
} catch(error){
console.log('error', error)
}
}
const postData = async() => {'/addGeonamesData', data={longitude: geonamesData.lon, latitude: geonamesData.lat }};


const postRequest = async() => {
  const req = await fetch(url, {
    method: 'POST',
    credentials: same-origin,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  try {
    const allData = await postRequest.json();
    console.log(allData);
    return allData;
  } catch(error){
    console.log('error', error)
  }

  const updateUI = async() => {
    const req = await fetch('http://localhost:3000/all');
    try {
      const allData = await req.json();
      document.getElementById('destination_city').innerHTML = `Destination: ${allData[0].city}`;
    } catch(error){
      console.log('error', error)
    }
  }
  }
