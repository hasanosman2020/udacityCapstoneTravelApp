import fetch from 'node-fetch'

let countries

fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => getRestCountries(data))
  .catch(error => console.log('error', error))

export function getRestCountries (countriesData) {
  countries = countriesData
  let options = ' '
  for (let i = 0; i < countries.length; i++) {
    options += `<option value="${countries[i].name}">${countries[i].name}</option>`
    //countries.forEach(
    //country =>
    //(options += `<option value="${country.name}">${country.name}</option>`)
  }
  const countriesList = document.getElementById('countriesData')
  countriesList.innerHTML = options
  displayCountryInfo('France')
}

function displayCountryInfo (countryByName) {
  const countryData = countries.find(country => country.name === countryByName)
  console.log(countryData)
  document.getElementById('capital').innerHTML = countryData.capital
  document.getElementById(
    'diallingcolde'
  ).innerHTML = +`${countryData.callingCodes[0]}`
  document.getElementById(
    'population'
  ).innerHTML = countryData.population.toLocaleString('en-US')
  document.getElementById('currencies').innerHTML = countryData.currencies
    .filter(currency => currency.name)
    .map(currency => `${currency.name} (${currency.code})`)
    .join(', ')
  document.getElementById('region').innerHTML = countryData.region
  document.getElementById('subregion').innerHTML = countryData.subregion
  document.getElementById('flagcontainer').src = countryData.flag
  document.getElementById('flagcontainer').alt = `Flag of ${countryData.name}`
}
