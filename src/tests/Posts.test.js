import React from 'react'
import { Provider } from 'react-redux'
import Posts from '../components/Posts'
import { render } from '@testing-library/react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import { fetchForms } from '../actions/postActions'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const mockStore = configureStore(middlewares)

Enzyme.configure({ adapter: new Adapter() })

describe('Posts component', () => {
  const data = [{ firstName: 'test', lastName: 'testlast', email: 'email@email.com', date: '2020-11-11' }]
  let store = mockStore({
    posts: {
      items: [],
      item: {},
    },
  })

  // function fetchForms() {
  //   console.log('fetch forms inside here')
  // }

  let component = render(
    <Provider store={store}>
      <Posts fetchForms={fetchForms} />
    </Provider>
  )

  beforeEach(() => {
    store = mockStore({
      posts: {
        items: [],
        item: {},
      },
    })
  })

  it('should check `componentDidMount()`', () => {
    const spy = jest.spyOn(Posts.WrappedComponent.prototype, 'componentDidMount')

    const methodNameFake = jest
      .spyOn(component.prototype, 'fetchForms')
      .mockImplementation(() => console.log('this is the mock'))
  })
})
