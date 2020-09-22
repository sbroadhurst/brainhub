import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import Posts from '../components/Posts'
import { render } from '@testing-library/react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import { fetchForms } from '../actions/postActions'

console.log('test')

// const mockStore = configureStore([])

// Enzyme.configure({ adapter: new Adapter() })

// describe('Posts component', () => {
//   const data = [{ firstName: 'test', lastName: 'testlast', email: 'email@email.com', date: '2020-11-11' }]
//   let store = mockStore({
//     items: [],
//     item: {},
//   })

//   let component = render(
//     <Provider store={store}>
//       <Posts props={fetchForms} />
//     </Provider>
//   )

//   beforeEach(() => {
//     store = mockStore({
//       items: [],
//       item: {},
//     })
//   })

//   it('should check `componentDidMount()`', () => {
//     const instance = component.instance() // you assign your instance of the wrapper

//     expect(instance.componentDidMount).toHaveBeenCalledTimes(1) // You check if the condition you want to match is correct.
//   })
// })
