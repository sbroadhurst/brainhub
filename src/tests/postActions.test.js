import * as types from '../actions/types'
import { fetchForms, createForm } from '../actions/postActions'
import { expect } from 'chai'

describe('tests reducer', () => {
  const goodPayload = { firstName: 'test', lastName: 'reducer', email: 'test@reducer.com', date: '2020-10-10' }
  const badPayload = { firstName: '', lastName: '', email: 'testreducer.com', date: '' }

  it('should call the fetch forms action', () => {
    fetchForms()
  })
  it('should call the post forms action with a bad payload', async (done) => {
    const res = await createForm(badPayload)
    console.log(res)
    done()
    // .catch((err) => {
    //   err.response.should.have.status(400)
    //   err.response.body.should.have.property('error')
    //   done()
    // })
  })
  // it('should call the post forms action with a good payload', () => {
  //   const res = createForm({ goodPayload })
  //   expect(res.status === 200)
  // })
})
