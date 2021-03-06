var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: performAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performAction", function() { return _js_app__WEBPACK_IMPORTED_MODULE_0__["performAction"]; });

/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/client/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/footer.scss */ "./src/client/styles/footer.scss");









/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: performAction, getWeatherbitData, getPixabayData, getRestCountriesData, postData, updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performAction", function() { return performAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherbitData", function() { return getWeatherbitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixabayData", function() { return getPixabayData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRestCountriesData", function() { return getRestCountriesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return updateUI; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

/*Global Variables*/
let countryCode
//Geonames API
const geonamesBaseUrl = 'http://api.geonames.org/searchJSON?q='

const geonamesApiKey = 'hasan79'

//Weatherbit API
var weatherbitBaseUrl = ' '
const weatherbitCurrent = 'http://api.weatherbit.io/v2.0/current?'
const weatherbitForecast = 'http://api.weatherbit.io/v2.0/forecast/daily?'
const weatherbitApiKey = '334b39cd7f05408190e076877f6411f9'

//Pixabay API
const pixabayBaseUrl = 'https://pixabay.com/api/?key='
const pixabayApiKey = '22008827-e069452971dbec7aa6f1cef1a'

//REST Countries API
const restCountriesBaseUrl = 'https://restcountries.eu/rest/v2/alpha/'

/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked */
document.getElementById('depart_btn').addEventListener('click', function () {
  document.querySelector('.countryinfo').classList.add('animate')
})

document.getElementById('depart_btn').addEventListener('click', performAction)

async function performAction (e) {
  e.preventDefault()
  /* const destinationCountry = document.getElementById('destinationCountry').value*/
  const destination_city = document.getElementById('destination_city').value
  const dateDepart = document.getElementById('dateDepart').value
  const dateReturn = document.getElementById('dateReturn').value
  const daysTillDepart = getDaysTillDepart(dateDepart)
  const tripDuration = getTripDuration(dateDepart, dateReturn)

  if (daysTillDepart <= 1) {
    weatherbitBaseUrl = weatherbitCurrent
  } else {
    weatherbitBaseUrl = weatherbitForecast
  }

  getGeonamesData(destination_city)
    .then(function (data) {
      console.log(data)
      return getWeatherbitData(
        weatherbitBaseUrl,
        data.geonames[0].lat,
        data.geonames[0].lng,
        data.geonames[0].countryCode,
        weatherbitApiKey
      )
    })
    .then(function (data) {
      return postData('/', {
        data: data.data,
        destination: destination_city,
        dateDepart: dateDepart,
        dateReturn: dateReturn,
        tripDuration: tripDuration,
        daysTillDepart: daysTillDepart
      })
    })
    .then(function (data) {
      return getPixabayData(pixabayBaseUrl, pixabayApiKey, destination_city)
    })
    .then(function (data) {
      updateUI(data.hits[0].imageURL)
    })
    .then(function (data) {
      return getRestCountriesData(restCountriesBaseUrl, countryCode)
    })
  /*.then(function (data) {
      return getRestCountriesInfo(countriesData)
    })*/
}

//Function that generates the countdown to date of departure
function getDaysTillDepart (dateDepart) {
  const now = new Date()
  const nowSeconds = Date.parse(now)
  const dateDepartSeconds = Date.parse(dateDepart)
  const difference = Math.abs(dateDepartSeconds - nowSeconds)
  const daysTillDepart = Math.ceil(difference / (1000 * 60 * 60 * 24))
  console.log(daysTillDepart)
  return daysTillDepart
}

//Function that generates the trip duration
function getTripDuration (dateDepart, dateReturn) {
  const tripLengthDepart = Date.parse(dateDepart)
  const tripLengthReturn = Date.parse(dateReturn)
  const diff = Math.abs(tripLengthDepart - tripLengthReturn)
  const tripDuration = Math.ceil(diff / (1000 * 60 * 60 * 24))
  console.log(tripDuration)
  return tripDuration
}

//Async function makes GET request to the Geonames API to obtain Geonames data (i.e. co-ordinates) using fetch() method
const getGeonamesData = async destination_city => {
  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(
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
const getWeatherbitData = async (weatherbitBaseUrl, lat, lng) => {
  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(
    `${weatherbitBaseUrl}&lat=${lat}&lon=${lng}&key=334b39cd7f05408190e076877f6411f9`
  )
  //call API
  try {
    const data = await res.json()
    console.log(data)
    countryCode = data.country_code
    console.log(countryCode)
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
  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(
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

const getRestCountriesData = async (
  restCountriesBaseUrl,
  countryCode
) => {
  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${restCountriesBaseUrl}${countryCode}`)
  try {
    const countryData = await res.json()
    console.log(countryData)

    document.getElementById(
      'travelconfirmation'
    ).innerHTML = `<p>You are travelling to ${countryData.name}!</p>`
    document.getElementById('country').innerHTML = `${countryData.name}`
    document.querySelector(
      '#flagcontainer'
    ).innerHTML = `<img src="${countryData.flag}" alt="Flag of ${countryData.name}">`
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
    document.getElementById('currencies').innerHTML =
      'Currency(ies): ' +
      countryData.currencies
        .map(c => `${c.name} (${c.code})(${c.symbol})`)
        .join(', ')

    document.getElementById('population').innerHTML =
      'Population: ' + countryData.population.toLocaleString('en-US')
    document.getElementById(
      'region'
    ).innerHTML = `Region: ${countryData.region}`
    document.getElementById(
      'subregion'
    ).innerHTML = `Sub-region: ${countryData.subregion}`

    //return countryData
  } catch (error) {
    console.log('error', error)
  }
}

//Function to POST data
const postData = async (url = ' ', data = {}) => {
  //console.log(`Data is ${data}`)
  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:3000', {
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
  const req = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:3000/data')
  try {
    const travelData = await req.json()
    document.getElementById('picture').src = imageURL
    document.getElementById(
      'location'
    ).innerHTML = `Destination: ${travelData.destination}`
    document.getElementById(
      'outbound'
    ).innerHTML = `Trip Start: ${travelData.dateDepart} `
    document.getElementById(
      'inbound'
    ).innerHTML = `Trip End: ${travelData.dateReturn}`
    document.getElementById(
      'tripDuration'
    ).innerHTML = `Trip Duration: ${travelData.tripDuration} days`
    if (travelData.daysTillDepart === 1) {
      document.getElementById('daysTillDepart').innerHTML =
        'Your trip starts tomorrow!'
    } else {
      document.getElementById(
        'daysTillDepart'
      ).innerHTML = `You have ${travelData.daysTillDepart} days to go before your trip starts!`
    }

    //if trip is less than 4 days away, display the current weather
    if (travelData.daysTillDepart <= 1) {
      document.getElementById(
        'weatherCurrent'
      ).innerHTML = `Today\'s weather: ${travelData.data[0].temp} ??C `
      const weatherIcon = document.createElement('img')
      weatherIcon.id = 'icon'
      weatherIcon.src =
        'https://www.weatherbit.io/static/img/icons' +
        travelData.data[0].weather.icon +
        '.png'
      document.getElementById('weatherCurrent').appendChild(weatherIcon)
    } else {
      document.getElementById('weatherHeading').innerHTML =
        '15 - Day Weather Forecast'

      for (let i = 0; i < 16; i++) {
        const weatherForecast = document.getElementById('weatherForecast')

        const date = document.createElement('div')
        date.textContent = travelData.data[i].datetime
        const highTemp = document.createElement('div')
        highTemp.textContent = `Max temp: ${travelData.data[i].high_temp}`
        const lowTemp = document.createElement('div')
        lowTemp.textContent = `Min temp: ${travelData.data[i].low_temp}`
        const icon = document.createElement('img')
        icon.src =
          'https://www.weatherbit.io/static/img/icons/' +
          travelData.data[i].weather.icon +
          '.png'
        icon.alt = 'weather icon'

        weatherForecast.appendChild(date)
        weatherForecast.appendChild(highTemp)
        weatherForecast.appendChild(icon)
        weatherForecast.appendChild(lowTemp)
        weatherForecast.appendChild(icon)
      }
    }
  } catch (error) {
    console.log('error', error)
  }
}


/***/ }),

/***/ "./src/client/styles/footer.scss":
/*!***************************************!*\
  !*** ./src/client/styles/footer.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Invalid CSS after \"}\": expected 1 selector or at-rule, was \"/*\"\n        on line 175 of /Users/hasanal-ahmar/github/udacityCapstoneTravelApp/src/client/styles/style.scss\n>> }\n\n   -^\n\n    at /Users/hasanal-ahmar/github/udacityCapstoneTravelApp/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/hasanal-ahmar/github/udacityCapstoneTravelApp/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/hasanal-ahmar/github/udacityCapstoneTravelApp/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/hasanal-ahmar/github/udacityCapstoneTravelApp/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/hasanal-ahmar/github/udacityCapstoneTravelApp/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/hasanal-ahmar/github/udacityCapstoneTravelApp/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/hasanal-ahmar/github/udacityCapstoneTravelApp/node_modules/node-sass/lib/index.js:294:32)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map