import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchForms } from '../actions/postActions'

class Posts extends Component {
  componentDidMount() {
    this.props.fetchForms()
  }

  render() {
    const postItems = this.props.posts.map((post, i) => {
      return (
        <div key={i}>
          <p>
            First Name: {post.firstName}, Last Name: {post.lastName}, Email: {post.email}, Event Date: {post.date}
          </p>
        </div>
      )
    })
    return (
      <div>
        <h1>Submitted Forms</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchForms: PropTypes.func.isRequired,
  forms: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
})

export default connect(mapStateToProps, { fetchForms })(Posts)
