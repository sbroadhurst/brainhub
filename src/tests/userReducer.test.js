import reducer from '../reducers/index'
import * as types from '../actions/types'

describe('tests reducer', () => {
  const payload = { firstName: 'test', lastName: 'reducer', email: 'test@reducer.com', date: '2020-10-10' }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ userinfo: { user: {}, users: [] } })
  })

  it('should handle FETCH_USERS', () => {
    expect(
      reducer(undefined, [], {
        type: types.FETCH_USERS,
      })
    ).toEqual({
      userinfo: {
        user: {},
        users: [],
      },
    })
  })

  it('should handle NEW_USER', () => {
    expect(
      reducer(undefined, {
        type: types.NEW_USER,
        payload: payload,
      })
    ).toEqual({ userinfo: { user: payload, users: [payload] } })
  })
})
