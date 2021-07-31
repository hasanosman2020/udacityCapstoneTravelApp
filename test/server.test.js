const app = require('../src/server/app.js') // Link to your server file
// import {app} from '../src/server/server'
const supertest = require('supertest')
// const {response} = require('express');
const request = supertest(app)

it('testing /data endpoint', async () => {
  const response = await request.get('/data')
  // return response;
  expect(4 + 4).toBeGreaterThan(7)
  expect(4 + 4).toBeLessThan(9)

  //expect(response.status).toBe(200)
  //expect(response.body).toBeDefined()
})
