const mongoose = require('mongoose')

exports.mongoConnect = async function (cb) {
  const mongo = `mongodb+srv://stephen:Pbdb3370%21@cluster0.ago5c.mongodb.net/brainhub?retryWrites=true&w=majority`
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
