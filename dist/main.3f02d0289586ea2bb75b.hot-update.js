webpackHotUpdateClient("main",{

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

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* Global Variables */

/** Personal API key for OpenWeatherMap API */
//const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
//const apiKey = '&appid=297d714c461b021c0e0eac76978ccbad&units=metric'
//Event listener to add function to existing DOM element ("Let's Go!" button with id "depart-btn") to create an event when the button is clicked

document.getElementById('depart-btn').addEventListener('click', performAction); //Function that fires off when the click has been registered

function performAction(_x) {
  return _performAction.apply(this, arguments);
} //POST route for server


function _performAction() {
  _performAction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    var destinationCity, departureDate, returnDate, d, currentDate, departDate, travelData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault(); //Before clicking on the "Let's Go!" button, the user first inputs the city of his destination and dates of his journey - this information is stored in variables.

            destinationCity = document.getElementById('destination-city').value;
            departureDate = document.getElementById('date-departure').value;
            returnDate = document.getElementById('date-return').value;
            /* const feelings = document.getElementById('feelings').value*/
            // Create a new date instance dynamically with JS

            d = new Date();
            currentDate = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear();

            if (!(parseInt(departureDate) >= parseInt(currentDate))) {
              _context2.next = 21;
              break;
            }

            departDate = departureDate;
            _context2.next = 10;
            return postData('/clientData', {
              city: city,
              date: departDate
            });

          case 10:
            _context2.next = 12;
            return callServer('/getWeatherbit');

          case 12:
            _context2.next = 14;
            return callServer('/getPix');

          case 14:
            _context2.next = 16;
            return callServer('/getData');

          case 16:
            travelData = _context2.sent;
            console.log(travelData);
            updateUI();
            _context2.next = 22;
            break;

          case 21:
            alert('Plesase enter a valid date');

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _performAction.apply(this, arguments);
}

function postData(_x2, _x3) {
  return _postData.apply(this, arguments);
} //call to server for data


function _postData() {
  _postData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, tripData) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
              method: 'POST',
              mode: 'cors',
              credentials: 'same-origin',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(tripData)
            });

          case 2:
            response = _context3.sent;

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _postData.apply(this, arguments);
}

var callServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var asyncParams, res, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            asyncParams = {
              method: 'GET',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            };
            _context.next = 3;
            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, asyncParams);

          case 3:
            res = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            console.log("Error: ".concat(res.statusText));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function callServer(_x4) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=main.3f02d0289586ea2bb75b.hot-update.js.map