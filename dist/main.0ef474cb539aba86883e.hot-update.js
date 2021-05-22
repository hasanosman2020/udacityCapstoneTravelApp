webpackHotUpdateClient("main",{

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* Global Variables */

/** Personal API key for OpenWeatherMap API */
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=297d714c461b021c0e0eac76978ccbad&units=metric'; // Create a new date instance dynamically with JS

var d = new Date();
var newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear(); //Event listener to add function to existing DOM element (button with id "depart-btn") to create an event when the button is clicked

document.getElementById('depart-btn').addEventListener('click', performAction);

function performAction(e) {
  var newCity = document.getElementById('city').value;
  /* const feelings = document.getElementById('feelings').value*/

  console.log(newDate);
  getWeather(baseURL, newCity, apiKey).then(function (data) {
    console.log(data);
    postData('http://localhost:3000/add', {
      date: newDate,
      temp: data.main.temp,
      content: feelings
    });
    updateUI();
  });
}

var getWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(baseURL, newCity, apiKey) {
    var res, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(baseURL, " ").concat(newCity).concat(apiKey));

          case 2:
            res = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log('error', _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));

  return function getWeather(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var postData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var url,
        data,
        response,
        newData,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '/add';
            data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {
              date: newDate,
              temp: data.list[0].main.temp,
              content: feelings
            };
            console.log(data);
            _context2.next = 5;
            return fetch(url, {
              method: 'POST',
              credentials: 'same-origin',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });

          case 5:
            response = _context2.sent;
            _context2.prev = 6;
            _context2.next = 9;
            return response.json();

          case 9:
            newData = _context2.sent;
            console.log(newData);
            return _context2.abrupt("return", newData);

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](6);
            console.log('error', _context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 14]]);
  }));

  return function postData() {
    return _ref2.apply(this, arguments);
  };
}();

var updateUI = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var request, allData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch('http://localhost:3000/all');

          case 2:
            request = _context3.sent;
            _context3.prev = 3;
            _context3.next = 6;
            return request.json();

          case 6:
            allData = _context3.sent;
            document.getElementById('date').innerHTML = "Date: ".concat(allData.date);
            document.getElementById('temp').innerHTML = "Temperature: ".concat(allData.temp);
            document.getElementById('content').innerHTML = "I feel: ".concat(allData.content);
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](3);
            console.log('error', _context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 12]]);
  }));

  return function updateUI() {
    return _ref3.apply(this, arguments);
  };
}();
/*
  }
  event.preventDefault()

  console.log(':::Form Submitted:')

  //the handleSubmit function also handles the name of the city as entered by the user
  const newCity = document.getElementById('city').value

  //Function called by event listener - here the performAction function handles the name of the city entered by the user and the user's feelings as entered by the user and executes the getWeather function.
  //function performAction (e) {

  //const feelings = document.getElementById('feelings').value
  console.log(newDate)

  getWeather(baseURL, newCity, apiKey).then(function (data) {
    console.log(data)

    //then forward the data received from the API (done by invoking the getWeather function) to the server via a post request along with the date (done automatically by JavaScript) and the user's feelings (entered by the user)
    //the server will store the date, the temperature and the content
    postData('http://localhost:3000/add', {
      date: newDate,
      temp: data.main.temp
    })

    //after the data is sent to the server we update the user interface
    updateUI()
  })
}

//Funnction to GET Web API data (by using fetch) - the getWeather function uses 'fetch' to obtain the weather information from the OpenWeatherMap API
const getWeather = async (baseURL, newCity, apiKey) => {
  const res = await fetch(`${baseURL}${newCity}${apiKey}`)
  try {
    const data = await res.json()
    return data
  } catch (error) {
    console.log('error', error)
  }
}

//Function to POST data - in order for the app to post the data to the server,i.e. to make a POST request, it invokes an async function 'postData' and uses the POST route that is set up in the server.js file
//the server will receive and store the date, the temperature and the user's feelings in the data object

const postData = async (
  url = '/add',
  data = { date: newDate, temp: data.list[0].main.temp }
) => {
  console.log(data)

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    //Body data type must match 'Content-Type' header
    body: JSON.stringify(data) //Create JSON string from a JavaScript object
  })
  try {
    const newData = await response.json()
    console.log(newData)
    return newData
  } catch (error) {
    console.log('error', error)
  }
}

//Function to GET projectData - the app sends a GET request to the server to receive the data by invoking an async function 'updateUI' and using the GET route 'all' set up in the server.js file
//the function amends the values of the data's objects so they can reflect the value that is being stored for them in the server by using inner.HTML

const updateUI = async () => {
  const request = await fetch('http://localhost:3000/all')
  try {
    const allData = await request.json()
    document.getElementById('date').innerHTML = `Date: ${allData.date}`
    document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}`
  } catch (error) {
    console.log('error', error)
  }
}
*/

/***/ })

})
//# sourceMappingURL=main.0ef474cb539aba86883e.hot-update.js.map