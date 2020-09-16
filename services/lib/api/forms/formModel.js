const mongoose = require('mongoose')
const Schema = mongoose.Schema

const form = {
  firstName: String,
  lastName: String,
  email: String,
  date: String,
}

const formSchema = new Schema(form, { timestamps: true })

const Form = mongoose.model('form', formSchema)

module.exports = Form
