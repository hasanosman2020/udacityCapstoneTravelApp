**Overview**

This app is created by Hasan Osman for the Capstone Project of Udacity's  [Front End Web Developer Nano Degree (FEND)](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011). 
This Capstone project requires the student to create an asynchronous web app that uses Web API and user data to dynamically update the UI.


The Capstone is a travel app which aims to consolidte the skills learrned in projects 1 - 4 of FEND. The travel app, at a minimum, requires the user to enter a desired trip location and his/her travel dates. In response, the app displays an image of the user's travel destination,  and a current 16-day weather forecast. Both the image and the forecast are obtained through external APIs. If the user's trip starts later than 16 days from the date of them having entered their information, the app will display a message advising the user to return at a later date closer to his travel time to view the updated weather forecast.   

Beyond the requirements of the app displying an image of the user's destination along with the weather forecast, I have added a few extra functionalities. The app displays the duration of the trip and the number of days remaining before the start of the trip. Finally, if the user would like to know more facts about the country he/she is visiting he/she can select the country from a drop-down list and certain information such as language, population, currency etc will be displayed. 


**Technology**
- HTML
- CSS
- JavaScript
- Node.js
- Express
- Webpack
- Babel
- Jest
-API

In brief, the project uses an express server to store the data from the app. GET and POST routes are used to communicate with the app.

**Technical Requirements**

1. Project Structure.

The structure of the project is as follows:

    - Root:  
        - package.json
        - readme.md
        - webpack.dev.js
        - webpack.prod.js
    - src folder:
        - server
            - app.js
            - server.js
    - client folder:
        - js folder:
            - app.js
            - countrieslist.js
            - utils.js
        - styles folder:
            - style.scss
        - views folder:
            -index.html
        -index.js
    - test folder:
        - server.test.js
        - utils.test.js  


2. Webpack config contains the following scripts: test, test-watch, start, build-prod, build-dev, start-both. Dev server is included.

3. Testing.  JEST is used for testing. All tests have been passed.

4. Offline Capabilities: Service workers have been installed. 

5. APIs: The following APIs have been used:
- [Geonames](http://www.geonames.org)  
- [Weatherbit.io](https://www.weatherbit.io/)
- [Pixabay](https://pixabay.com/)
- [REST Countries](https://restcountries.eu/)

6. Usability: The app's features are all usable across modern desktops, tablets, and phone browsers. 

7. Extra Features.
- Displaying the duration of the trip and the number of days remaining till the start of the trip. 
- Using the REST Countries API to provide further information on the user's country of destination. 
- Incorporating the weather icons when displaying the weather forecast.
- Displaying the forecast for several days rather than for just a single day.


**Installing and Running the Travel App**

- Clone the repo:
`https://github.com/hasanosman2020/udacityCapstoneTravelApp`

- Install NPM Packages:
`npm install`

- Create a .env file at the root of the project.

- Register to get free API keys with the following APIs:

[Geonames](http://www.geonames.org)

[Weatherbit.io](https://www.weatherbit.io/)

[Pixabay](https://pixabay.com/)

- Enter your API keys in the .env file by adding the following code:
GEONAMES_USERNAME=XXXXXXXX
WEATHERBIT_API_KEY=XXXXXX
PIXABAY_API_KEY=XXXXXXXX
(Replace the X with your api keys and username).

Note: for Udacity submission, filler API keys have been replaced by the user's info for ease of use, 


**Using the Travel App**

The server is set to port 3000. Start the server with the command as described above, 
Enter your city of destination, your departure date, and your return date. This information is required.
The travel app will function as described above. 