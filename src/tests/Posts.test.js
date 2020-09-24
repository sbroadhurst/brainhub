import React from 'react'
import { Provider } from 'react-redux'
import Posts from '../components/Posts'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const mockStore = configureStore(middlewares)

describe('Posts component', () => {
  it('test userinfo fields', async () => {
    const data = [{ firstName: 'testFirst', lastName: 'testlast', email: 'email@email.com', date: '2020-11-11' }]
    let store = mockStore({
      posts: {
        items: data,
        item: {},
      },
    })

    const { getByText } = render(
      <Provider store={store}>
        <Posts />
      </Provider>
    )

    const firstName = getByText(/testFirst/i)
    expect(firstName).toBeInTheDocument()

    const lastName = getByText(/testLast/i)
    expect(lastName).toBeInTheDocument()

    const email = getByText(/email@email.com/i)
    expect(email).toBeInTheDocument()

    const date = getByText(/2020/i)
    expect(date).toBeInTheDocument()
  })
})
