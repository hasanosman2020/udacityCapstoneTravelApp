const app = require('../src/server/server.js') // Link to your server file
// import {app} from '../src/server/server'
const supertest = require('supertest')
// const {response} = require('express');
const request = supertest(app)

it('gets the test endpoint', async () => {
  const res = await request.get('/data')
  // return response;
  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
})
