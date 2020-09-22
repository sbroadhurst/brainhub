const mongoose = require('mongoose')

exports.mongoConnect = async function (cb) {
  const mongo = `mongodb+srv://${process.env.REACT_APP_MONGO_USER_PASSWORD}${process.env.REACT_APP_MONGO_URL}`

  try {
    console.log(`checking ${mongo}`)

    await mongoose.connect(`${mongo}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`connected to ${mongo}`)
  } catch (e) {
    console.log(`error connecting to ${mongo}`)
  }
}
