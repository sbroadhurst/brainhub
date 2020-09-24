import React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent, wait } from '@testing-library/react'
import UserInfo from '../components/UserInfo'
import configureStore from 'redux-mock-store'
import { expect, assert } from 'chai'

const mockStore = configureStore([])

describe('Form testing', () => {
  let store = mockStore({
    users: [],
    user: {},
  })
  let component = render(
    <Provider store={store}>
      <UserInfo />
    </Provider>
  )

  beforeEach(() => {
    store = mockStore({
      users: [],
      user: {},
    })
  })

  it('render the form and change the fname, lname, email, and date', async () => {
    const firstName = component.getByTestId('firstName')
    const lastName = component.getByTestId('lastName')
    const email = component.getByTestId('email')
    const date = component.getByTestId('date')
    const submit = component.getByTestId('submit')

    await wait(() => {
      fireEvent.click(submit)
    })

    //error checking for bad values in all fields
    const firstNameError = component.getByTestId('error-firstName')
    const lastNameError = component.getByTestId('error-lastName')
    const emailError = component.getByTestId('error-email')
    const dateError = component.getByTestId('error-date')

    // check to see if the error messages not exist
    expect(firstNameError).to.exist
    expect(lastNameError).to.exist
    expect(emailError).to.exist
    expect(dateError).to.exist

    // change first name to a valid input
    await wait(() => {
      fireEvent.select(firstName)
      fireEvent.change(firstName, {
        target: {
          value: 'mockFirstName',
          touched: true,
        },
      })
    })
    assert(firstName.value !== '')

    // change last name to a valid input
    await wait(() => {
      fireEvent.select(lastName)
      fireEvent.change(lastName, {
        target: {
          value: 'mockLastName',
        },
      })
    })
    assert(lastName.value !== '')

    // change email to a invalid input (missing @)
    await wait(() => {
      fireEvent.select(email)
      fireEvent.change(email, {
        target: {
          value: 'mockemail.com',
        },
      })
    })
    // expect the error message to change to invalid email
    expect(component.getByText('email must be a valid email'))

    // change email to valid email value
    await wait(() => {
      fireEvent.select(email)
      fireEvent.change(email, {
        target: {
          value: 'mock@email.com',
        },
      })
    })
    assert(email.value === 'mock@email.com')

    // change the date to a valid value
    await wait(() => {
      fireEvent.select(date)
      fireEvent.click(date, {
        target: {
          value: '2021-08-31',
        },
      })
    })
    expect(date.value).equals('2021-08-31')

    await wait(() => {
      fireEvent.click(submit)
    })
  })
})
