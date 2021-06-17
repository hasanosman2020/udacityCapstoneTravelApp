"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performAction = performAction;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*Global Variables*/
//Geonames API
var geonamesBaseUrl = 'http://api.geonames.org/searchJSON?q=';
var geonamesApiKey = 'hasan79'; //Weatherbit API

var weatherbitBaseUrl = 'http://api.weatherbit.io/v2.0/current';
var weatherbitApiKey = '334b39cd7f05408190e076877f6411f9';
/*Event Listener to add function to existing DOM element ('Let's Go!' button with id 'depart_btn') to create an eventwhen the button is clicked */

document.getElementById('depart_btn').addEventListener('click', performAction);

function performAction(e) {
  var destination_city, date_depart, date_return;
  return regeneratorRuntime.async(function performAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          destination_city = document.getElementById('destination_city').value;
          date_depart = document.getElementById('date_depart').valueAsDate;
          date_return = document.getElementById('date_return').valueAsDate;
          console.log("city: ".concat(destination_city, ", depart:").concat(date_depart, ", return:").concat(date_return));
          getGeonamesData(destination_city).then(function (data) {
            return getWeatherbitData(weatherbitBaseUrl, data.geonames[0].lat, data.geonames[0].lng, weatherbitApiKey);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
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


var getGeonamesData = function getGeonamesData(destination_city) {
  var res, _data;

  return regeneratorRuntime.async(function getGeonamesData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://api.geonames.org/searchJSON?q=".concat(destination_city, "&maxRows=10&username=hasan79")));

        case 2:
          res = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          _data = _context2.sent;
          console.log(_data);
          return _context2.abrupt("return", _data);

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


var getWeatherbitData = function getWeatherbitData(weatherbitBaseUrl, lat, lon, weatherbitApiKey) {
  var res;
  return regeneratorRuntime.async(function getWeatherbitData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])());

        case 2:
          res = _context3.sent;

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var postData = function postData() {
  return regeneratorRuntime.async(function postData$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          '/addGeonamesData', data = {
            longitude: data.geonames[0].lon,
            latitude: data.geonames[0].lat
          };

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var postRequest = function postRequest() {
  var req, allData, updateUI;
  return regeneratorRuntime.async(function postRequest$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])(url, {
            method: 'POST',
            credentials: same - origin,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }));

        case 2:
          req = _context6.sent;
          _context6.prev = 3;
          _context6.next = 6;
          return regeneratorRuntime.awrap(postRequest.json());

        case 6:
          allData = _context6.sent;
          console.log(allData);
          return _context6.abrupt("return", allData);

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](3);
          console.log('error', _context6.t0);

        case 14:
          updateUI = function updateUI() {
            var req, _allData;

            return regeneratorRuntime.async(function updateUI$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return regeneratorRuntime.awrap((0, _nodeFetch["default"])('http://localhost:3000/all'));

                  case 2:
                    req = _context5.sent;
                    _context5.prev = 3;
                    _context5.next = 6;
                    return regeneratorRuntime.awrap(req.json());

                  case 6:
                    _allData = _context5.sent;
                    document.getElementById('destination_city').innerHTML = "Destination: ".concat(_allData[0].city);
                    _context5.next = 13;
                    break;

                  case 10:
                    _context5.prev = 10;
                    _context5.t0 = _context5["catch"](3);
                    console.log('error', _context5.t0);

                  case 13:
                  case "end":
                    return _context5.stop();
                }
              }
            }, null, null, [[3, 10]]);
          };

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[3, 11]]);
};