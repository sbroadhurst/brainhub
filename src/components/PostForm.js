import React, { Component } from 'react'
import PropTytpes from 'prop-types'
import { connect } from 'react-redux'
import { createForm } from '../actions/postActions'
import './forms.css'

class PostForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    date: '',
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const post = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      date: this.state.date,
    }
    this.props.createForm(post)
  }

  render() {
    return (
      <div>
        <h1>Submit A Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div>
              <label>First Name</label> <br></br>
              <input
                type="text"
                name="firstName"
                className="infobox"
                value={this.state.firstName}
                onChange={this.onChange}></input>
            </div>
            <div>
              <label>Last Name</label> <br></br>
              <input
                type="text"
                name="lastName"
                className="infobox"
                value={this.state.lastName}
                onChange={this.onChange}></input>
            </div>
          </div>
          <div className="row">
            <div>
              <label>Email</label> <br></br>
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="infobox"
                onChange={this.onChange}></input>
            </div>
            <div>
              <label>Event date</label> <br></br>
              <input
                type="date"
                name="date"
                value={this.state.date}
                className="infobox"
                onChange={this.onChange}></input>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createForm: PropTytpes.func.isRequired,
}

export default connect(null, { createForm })(PostForm)
