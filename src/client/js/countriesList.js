/*import fetch from 'node-fetch'

//const countriesList = document.getElementById('countriesData')
let countries

//countriesList.addEventListener('change', function () {
// console.log(event.target.value)
//})

fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log('error', error))

//export function getRestCountries (countriesData) {
//countries = countriesData
//t options = ' '
//for (let i = 0; i < countries.length; i++) {
//options += `<option value="${countries[i].name}">${countries[i].name}</option>`
//countries.forEach(
//country =>
//(options += `<option value="${country.alpha3Code}">${country.name}</option>`)
//)

//countriesList.innerHTML = options
//console.log(countriesList.value)
//console.log(countriesList.length)
//countriesList.selectedIndex = Math.floor(Math.random() * countriesList.length)
// console.log(countriesList[10].value)

//displayCountryInfo(countriesList[countriesList.selectedIndex].value)
//}


/*
function displayCountryInfo (countryByAlpha3Code) {
  const countryData = countries.find(
    country => country.alpha3Code === countryByAlpha3Code
  )
  console.log(countryData)

  document.getElementById('countryname').innerHTML = countryData.name
  document.querySelector('#flag').src = countryData.flag
  document.getElementById('flagname').innerHTML = `Flag of ${countryData.name}`

  document.getElementById(
    'capital'
  ).innerHTML = `Capital: ${countryData.capital}`
  document.getElementById('language').innerHTML =
    'Language(s): ' +
    countryData.languages
      .filter(n => n.name)
      .map(n => `${n.name}`)
      .join(', ')
  document.getElementById('diallingcode').innerHTML =
    'Dialling Code: +' + countryData.callingCodes[0]
  document.getElementById(
    'population'
  ).innerHTML = `Population: ${countryData.population}`
  document.getElementById('currencies').innerHTML =
    'Currency: ' +
    countryData.currencies
      .filter(c => c.name)
      .map(c => `${c.name} (${c.code})`)
      .join(', ')
  //document.getElementById('timezones').innerHTML =
  //'Timezone: ' + `${countryData.timezones[0]}`
  //.filter(c => c.name)
  //.map(t => `${c.name}(${c.code})`)
  //.join(', ')
  document.getElementById('region').innerHTML = `Region: ${countryData.region}`
  document.getElementById('subregion').innerHTML =
    'Sub-Region: ' + countryData.subregion
}*/

/*
const countriesList = document.getElementById('countries')
let countries //this will contain the fetched data

//Event Listeners
countriesList.addEventListener('change', countrySelection)

function countrySelection (event) {
  displayCountryInfo(event.target.value)
}

/*
fetch('https://restcountries.eu/rest/v2/all')
  .then(function (res) {
    console.log(res)
    return res.json()
  })
  .then(function (data) {
    console.log(data)
    initialise(data)
  })
  .catch(function (err) {
    console.log('error', err)
  })
*/

/*
fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => initialise(data))
  .catch(err => console.log('error', err))

function initialise (countriesData) {
  countries = countriesData
  let options = ' '
  //for (let i = 0; i < countries.length; i++) {
  //options += `<option value="${countries[i].alpha2Code}">${countries[i].name}<option>`
  countries.forEach(
    country =>
      (options += `<option value="${country.alpha2Code}">${country.name}<option>`)
  )

  //document.getElementById('countries').innerHTML = options
  countriesList.innerHTML = options
  console.log(countriesList)
  displayCountryInfo(countriesList[countriesList.selectedIndex].value)
}

function displayCountryInfo (countryByAlpha2Code) {
  const countryData = countries.find(
    country => country.alpha2Code === countryByAlpha2Code
  )
  console.log(countryData)
  document.getElementById(
    'capital'
  ).innerHTML = `Capital: ${countryData.capital}`
  document.getElementById(
    'language'
  ).innerHTML = `Language(s): ${countryData.languages}`
  //filter(n => n.name)
  //.map(n => `${n.name}`)
  //.join(', ')
  document.getElementById('diallingcode').innerHTML =
    'Dialling Code: +' + countryData.callingCodes[0]
  document.getElementById(
    'population'
  ).innerHTML = countryData.population.toLocaleString('en-US')
  document.getElementById('currencies').innerHTML = countryData.currencies
    //.filter(c => c.name)
    .map(c => `${c.name} (${c.code})`)
    .join(', ')
  document.getElementById('region').innerHTML = countryData.region
  document.getElementById('subregion').innerHTML = countryData.subregion
  document.querySelector('#flag_container').innerHTML = `<img src="${
    countryData.flag
  }" alt="Flag of ${(countryData, name)}">`
}

/*countries = countriesData
  //populate the countries list
  let options = ' '
  for (let i = 0; i < countries.length; i++) {
    options += `<option value="${countries[i].alpha2Code}">${countries[i].name}</option>`

    //sdocument.getElementById('countries').innerHTML=options;
    countriesList.innerHTML = options
  }
}
*/
