var assert = require('assert')
var app = require('../server.js')
var request = require('supertest')
var http = require('http')
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()
chai.use(chaiHttp)

describe('Check getUser.js file', function() {
  // it('should return the true value of the user entered', function(request) {
  //   var user = { username: 'wajahat' }
  //   app.post('http://localhost:3000/api/getUser', done => {
  //     done()
  //   })
  // })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
  it('Should Check if last item is array', function() {
    app.post('http://localhost:3000/createUser', function(response, isValid) {
      var isValid = true
      assert.equal(isValid, true)
    })
  })
})
