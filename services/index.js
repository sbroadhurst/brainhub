const functions = require('firebase-functions')

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const port = process.env.PORT || 3001

const app = express()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('Welcome to firebase brainhub')
})

app.use('/forms', require('./lib/api/forms/formRoutes'))

app.listen(port)

console.log(`Server listening on port ${port}`)

module.exports = functions.https.onRequest(app)
