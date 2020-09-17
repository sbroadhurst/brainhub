const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const mongoConnect = require('./mongoConnect').mongoConnect
const port = process.env.PORT || 3001

const app = express()

async function startUp() {
  // make sure we can connect to external services before starting the server
  await mongoConnect()
}

startUp()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('Welcome to mongodb in node brainhub')
})

app.use('/forms', require('./lib/api/forms/formRoutes'))

app.listen(port)

console.log(`Server listening on port ${port}`)

module.exports = app
