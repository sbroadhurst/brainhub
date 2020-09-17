const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    date: String,
  },
  { timestamps: true }
)

const Form = mongoose.model('form', formSchema)

module.exports = Form
