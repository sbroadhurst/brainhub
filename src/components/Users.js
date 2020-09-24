import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsersInfo } from '../actions/userActions'

class UsersInfo extends Component {
  componentDidMount() {
    this.props.fetchUsersInfo()
  }

  render() {
    const usersInfo = this.props.users.map((user, i) => {
      return (
        <div key={i}>
          <p>
            First Name: {user.firstName}, Last Name: {user.lastName}, Email: {user.email}, Event Date: {user.date}
          </p>
        </div>
      )
    })
    return (
      <div>
        <h1>Submitted Forms</h1>
        {usersInfo}
      </div>
    )
  }
}

UsersInfo.propTypes = {
  fetchUsersInfo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  users: state.userinfo.users,
})

export default connect(mapStateToProps, { fetchUsersInfo })(UsersInfo)
