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
  document.getElementById(
    'capital'
  ).innerHTML = `Capital: ${countryData.capital}`
  document.getElementById('diallingcode').innerHTML =
    'Dialling Code: +' + countryData.callingCodes[0]
  document.getElementById(
    'population'
  ).innerHTML = `Population: ${countryData.population}`
  document.getElementById('currencies').innerHTML =
    'Currency: ' +
    countryData.currencies
      .filter(currency => currencies.name)
      .map(currencies => `${currencies.name} (${currencies.code})`)
      .join(', ')
  document.getElementById('region').innerHTML = `Region: ${countryData.region}`
  document.getElementById(
    'subregion'
  ).innerHTML = `Sub-Region: ${countryData.subregion}`
  document.getElementById('flagcontainer').src = countryData.flag
  document.getElementById('flagcontainer').alt = `Flag of ${countryData.name}`
}
