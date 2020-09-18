import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { createForm } from '../actions/postActions'
import { connect } from 'react-redux'
import './forms.css'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email().required('Required'),
  date: Yup.string().required('Required'),
})

function PostForm(props) {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', date: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const post = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          date: values.date,
        }
        props.createForm(post)
      }}>
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div>
              <label>First Name</label> <br />
              <input
                type="text"
                name="firstName"
                className="infobox"
                value={values.firstName}
                onChange={handleChange}></input>
              <br />
              {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            <div>
              <label>Last Name</label> <br />
              <input
                type="text"
                name="lastName"
                className="infobox"
                value={values.lastName}
                onChange={handleChange}></input>
              <br />
              {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
            </div>
          </div>
          <div className="row">
            <div>
              <label>Email</label> <br />
              <input type="email" name="email" value={values.email} className="infobox" onChange={handleChange}></input>
              <br />
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
              <label>Event date</label> <br />
              <input type="date" name="date" value={values.date} className="infobox" onChange={handleChange}></input>
              <br />
              {errors.date && touched.date && <div className="error">{errors.date}</div>}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  )
}

export default connect(null, { createForm })(PostForm)
