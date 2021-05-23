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

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/client/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return _js_app__WEBPACK_IMPORTED_MODULE_1__["updateUI"]; });

/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);





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
}

function _performAction() {
  _performAction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    var destinationCity, departureDate, returnDate, d, currentDate, departDate, travelData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
              _context.next = 19;
              break;
            }

            departDate = departureDate;
            _context.next = 10;
            return postData('/clientData', {
              city: city,
              date: departDate
            });

          case 10:
            _context.next = 12;
            return callServer('/getWeatherbit');

          case 12:
            _context.next = 14;
            return callServer('/getPix');

          case 14:
            _context.next = 16;
            return callServer('/getData');

          case 16:
            travelData = _context.sent;
            console.log(travelData);
            updateUI();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _performAction.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=main.841f78903d3325450316.hot-update.js.map