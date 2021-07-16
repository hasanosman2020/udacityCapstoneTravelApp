"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performAction = performAction;
exports.getRestCountriesInfo = getRestCountriesInfo;
exports.postData = exports.getPixabayData = exports.getWeatherbitData = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*TODO
- adjust the size of country image
*/

/*Global Variables*/
//Geonames API
var geonamesBaseUrl = 'http://api.geonames.org/searchJSON?q=';
var geonamesApiKey = 'hasan79'; //Weatherbit API

var weatherbitBaseUrl = ' ';
var weatherbitCurrent = 'http://api.weatherbit.io/v2.0/current?';
var weatherbitForecast = 'http://api.weatherbit.io/v2.0/forecast/daily?';
var weatherbitApiKey = '334b39cd7f05408190e076877f6411f9'; //Pixabay API

var pixabayBaseUrl = 'https://pixabay.com/api/?key=';
var pixabayApiKey = '22008827-e069452971dbec7aa6f1cef1a';
var restCountriesBaseUrl = 'https://restcountries.eu/rest/v2/name/';
/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked */

document.getElementById('depart_btn').addEventListener('click', performAction);

function performAction(e) {
  var destination_city, dateDepart, dateReturn, daysTillDepart, tripDuration, countries;
  return regeneratorRuntime.async(function performAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          destination_city = document.getElementById('destination_city').value;
          dateDepart = document.getElementById('dateDepart').value;
          dateReturn = document.getElementById('dateReturn').value;
          daysTillDepart = getDaysTillDepart(dateDepart);
          tripDuration = getTripDuration(dateDepart, dateReturn);
          countries = getRestCountriesInfo(countriesData);

          if (daysTillDepart <= 1) {
            weatherbitBaseUrl = weatherbitCurrent;
          } else {
            weatherbitBaseUrl = weatherbitForecast;
          }

          getGeonamesData(destination_city).then(function (data) {
            return getWeatherbitData(weatherbitBaseUrl, data.geonames[0].lat, data.geonames[0].lng, weatherbitApiKey);
          }).then(function (data) {
            return postData('/', {
              data: data.data,
              destination: destination_city,
              dateDepart: dateDepart,
              dateReturn: dateReturn,
              tripDuration: tripDuration,
              daysTillDepart: daysTillDepart
            });
          }).then(function (data) {
            return getPixabayData(pixabayBaseUrl, pixabayApiKey, destination_city);
          }).then(function (data) {
            updateUI(data.hits[0].imageURL);
          }).then(function (data) {
            return getRestCountriesInfo(restCountriesBaseUrl, name);
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
} //Function that generates the countdown to date of departure


function getDaysTillDepart(dateDepart) {
  var now = new Date();
  var nowSeconds = Date.parse(now);
  var dateDepartSeconds = Date.parse(dateDepart);
  var difference = Math.abs(dateDepartSeconds - nowSeconds);
  var daysTillDepart = Math.ceil(difference / (1000 * 60 * 60 * 24));
  console.log(daysTillDepart);
  return daysTillDepart;
} //Function that generates the trip duration


function getTripDuration(dateDepart, dateReturn) {
  var tripLengthDepart = Date.parse(dateDepart);
  var tripLengthReturn = Date.parse(dateReturn);
  var diff = Math.abs(tripLengthDepart - tripLengthReturn);
  var tripDuration = Math.ceil(diff / (1000 * 60 * 60 * 24));
  console.log(tripDuration);
  return tripDuration;
} //Async function makes GET request to the Geonames API to obtain Geonames data (i.e. co-ordinates) using fetch() method


var getGeonamesData = function getGeonamesData(destination_city) {
  var res, data;
  return regeneratorRuntime.async(function getGeonamesData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("".concat(geonamesBaseUrl).concat(destination_city, "&maxRows=10&username=hasan79")));

        case 2:
          res = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context2.sent;
          console.log(data);
          return _context2.abrupt("return", data);

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](3);
          console.log('error', _context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 11]]);
}; //Async function makes GET request to the Weatherbit API to obtain Weatherbit API data using fetch() method


var getWeatherbitData = function getWeatherbitData(weatherbitBaseUrl, lat, lng) {
  var res, data;
  return regeneratorRuntime.async(function getWeatherbitData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("".concat(weatherbitBaseUrl, "&lat=").concat(lat, "&lon=").concat(lng, "&key=334b39cd7f05408190e076877f6411f9")));

        case 2:
          res = _context3.sent;
          _context3.prev = 3;
          _context3.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context3.sent;
          return _context3.abrupt("return", data);

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](3);
          console.log('error', _context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 10]]);
}; //Async function makes GET request to the Pixabay  API to obtain images using fetch() method


exports.getWeatherbitData = getWeatherbitData;

var getPixabayData = function getPixabayData(pixabayBaseUrl, pixabayApiKey, destination_city) {
  var res, data;
  return regeneratorRuntime.async(function getPixabayData$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("".concat(pixabayBaseUrl).concat(pixabayApiKey, "&q=").concat(destination_city, "&image_type=photo")));

        case 2:
          res = _context4.sent;
          _context4.prev = 3;
          _context4.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context4.sent;
          console.log(data);
          return _context4.abrupt("return", data);

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](3);
          console.log('error', _context4.t0);
          alert('Cannot find your destination');

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[3, 11]]);
};

exports.getPixabayData = getPixabayData;

function getRestCountriesInfo(countriesData) {
  countries = countriesData;
  var options = ' ';

  for (var i = 0; i < countries.length; i++) {
    options += "<option value=\"".concat(countries[i].name, "\">").concat(countries[i].name, "</option>");
  }

  document.getElementById('countries').innerHTML = options;
}

exports.getRestCountriesInfo = getRestCountriesInfo = function getRestCountriesInfo(restCountriesBaseUrl, name) {
  var res, data;
  return regeneratorRuntime.async(function getRestCountriesInfo$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("'https://restcountries.eu/rest/v2/name/".concat(countries.name, "'")));

        case 2:
          res = _context5.sent;
          _context5.prev = 3;
          _context5.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context5.sent;
          console.log(data);
          return _context5.abrupt("return", data);

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](3);
          console.log('error', _context5.t0);
          alert('The requested country information is not available.');

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[3, 11]]);
}; //Function to POST data


var postData = function postData() {
  var url,
      data,
      res,
      newData,
      _args6 = arguments;
  return regeneratorRuntime.async(function postData$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          url = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : ' ';
          data = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
          console.log("Data is ".concat(data));
          _context6.next = 5;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])('http://localhost:3000', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }));

        case 5:
          res = _context6.sent;
          _context6.prev = 6;
          _context6.next = 9;
          return regeneratorRuntime.awrap(res.json());

        case 9:
          newData = _context6.sent;
          console.log(newData);
          return _context6.abrupt("return", newData);

        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](6);
          console.log('error', _context6.t0);

        case 17:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[6, 14]]);
};

exports.postData = postData;

var updateUI = function updateUI(imageURL) {
  var req, travelData, weatherIcon, i, weatherForecast, date, highTemp, lowTemp, icon;
  return regeneratorRuntime.async(function updateUI$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])('http://localhost:3000/data'));

        case 2:
          req = _context7.sent;
          _context7.prev = 3;
          _context7.next = 6;
          return regeneratorRuntime.awrap(req.json());

        case 6:
          travelData = _context7.sent;
          document.getElementById('picture').src = imageURL;
          /*document.getElementById('picture').alt = travelData.destination*/

          document.getElementById('location').innerHTML = "Destination: ".concat(travelData.destination);
          document.getElementById('outbound').innerHTML = "Trip Start: ".concat(travelData.dateDepart, " ");
          document.getElementById('inbound').innerHTML = "Trip End: ".concat(travelData.dateReturn);
          document.getElementById('tripDuration').innerHTML = "Trip Duration: ".concat(travelData.tripDuration, " days");

          if (travelData.daysTillDepart === 1) {
            document.getElementById('daysTillDepart').innerHTML = 'Your trip starts tomorrow!';
          } else {
            document.getElementById('daysTillDepart').innerHTML = "You have ".concat(travelData.daysTillDepart, " days to go before your trip starts!");
          }

          document.getElementById('capital').innerHTML = 'Capital: '; //if trip is less than 4 days away, display the current weather

          if (travelData.daysTillDepart <= 1) {
            document.getElementById('weatherCurrent').innerHTML = "Today's weather: ".concat(travelData.data[0].temp, " \xB0C ");
            weatherIcon = document.createElement('img');
            weatherIcon.id = 'icon';
            weatherIcon.src = 'https://www.weatherbit.io/static/img/icons' + travelData.data[0].weather.icon + '.png';
            document.getElementById('weatherCurrent').appendChild(weatherIcon);
          } else {
            document.getElementById('weatherForecast').innerHTML = "<span style='font - size:2.5em;text-decoration:underline;text-align:center;color:purple;'>16- Day Weather Forecast</span>";

            for (i = 0; i < 16; i++) {
              weatherForecast = document.getElementById('weatherForecast');
              date = document.createElement('div');
              date.textContent = travelData.data[i].datetime;
              highTemp = document.createElement('div');
              highTemp.textContent = "Max temp: ".concat(travelData.data[i].high_temp);
              lowTemp = document.createElement('div');
              lowTemp.textContent = "Min temp: ".concat(travelData.data[i].low_temp);
              icon = document.createElement('img');
              icon.src = 'https://www.weatherbit.io/static/img/icons/' + travelData.data[i].weather.icon + '.png';
              icon.alt = 'weather icon';
              weatherForecast.appendChild(date);
              weatherForecast.appendChild(highTemp);
              weatherForecast.appendChild(lowTemp);
              weatherForecast.appendChild(icon);
            }
          }

          document.getElementById('capital').innerHTML = 'Capital: ';
          _context7.next = 21;
          break;

        case 18:
          _context7.prev = 18;
          _context7.t0 = _context7["catch"](3);
          console.log('error', _context7.t0);

        case 21:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[3, 18]]);
};