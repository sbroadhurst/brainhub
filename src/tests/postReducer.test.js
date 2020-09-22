import reducer from '../reducers/index'
import * as types from '../actions/types'

describe('tests reducer', () => {
  const payload = { firstName: 'test', lastName: 'reducer', email: 'test@reducer.com', date: '2020-10-10' }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ posts: { item: {}, items: [] } })
  })

  it('should handle FETCH_FORMS', () => {
    expect(
      reducer(undefined, [], {
        type: types.FETCH_FORMS,
      })
    ).toEqual({
      posts: {
        item: {},
        items: [],
      },
    })
  })

  it('should handle NEW_FORM', () => {
    expect(
      reducer(undefined, {
        type: types.NEW_FORM,
        payload: payload,
      })
    ).toEqual({ posts: { item: payload, items: [payload] } })
  })
})
