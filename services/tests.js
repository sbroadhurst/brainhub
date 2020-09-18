process.env.PORT = 3001

const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert

const server = require('./index')

chai.use(chaiHttp)

require('dotenv').config()

let userinfoId

const userinfoMock = {
  firstName: 'mockFirst',
  lastName: 'mockLast',
  email: 'mock@email.com',
  date: '09/09/2099',
}

describe('Testing server', function () {
  it(`Creating a new userinfo`, (done) => {
    chai
      .request(server)
      .post(`/forms`)
      .send(userinfoMock)
      .end((err, res) => {
        assert.isNull(err)
        assert.equal(res.status, '200')
        assert.isObject(res.body)
        userinfoId = res.body._id

        done()
      })
  })
  it(`Getting all userinfo`, (done) => {
    chai
      .request(server)
      .get(`/forms`)
      .end((_err, res) => {
        assert.equal(res.status, '200')
        done()
      })
  })
  it(`Updating userinfo`, (done) => {
    chai
      .request(server)
      .put(`forms/${userinfoId}`)
      .send({ firstName: 'updatedFirst', lastName: 'updatedLast', email: 'updated@email.com', date: '10-10-2010' })
      .end((err, res) => {
        console.log(res)
        assert.equal(res.status, '200')
        assert.isObject(res.body)
        done()
      })
  })
  it(`Get a single userinfo`, (done) => {
    chai
      .request(server)
      .get(`/forms/${userinfoId}`)
      .end((_err, res) => {
        assert.equal(res.status, '200')
        done()
        console.log(res.body)
      })
  })
  it(`Deleting a single userinfo`, (done) => {
    chai
      .request(server)
      .delete(`/forms/${userinfoId}`)
      .end((_err, res) => {
        assert.equal(res.status, '200')
        done()
      })
  })
})
