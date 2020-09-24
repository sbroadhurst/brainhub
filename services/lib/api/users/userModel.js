const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    date: String,
  },
  { timestamps: true }
)

const User = mongoose.model('user', userSchema)

module.exports = User
