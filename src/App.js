import React from 'react'
import logo from './brainhubLogo.jpg'
import './App.css'
import { Provider } from 'react-redux'

import Users from './components/Users'
import UserInfo from './components/UserInfo'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img width="100%" src={logo} className="App-logo" alt="logo" />
        </header>
        <UserInfo />
        <br />

        <Users />
      </div>
    </Provider>
  )
}

export default App
