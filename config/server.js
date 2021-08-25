const express = require('express')
const consign = require('consign')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const session = require('express-session')
// const expressValidator = require('express-validator')

// Express
let app = express()

// Sessiom
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'my_secret_keyApp',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}))


// EJS
app.set('view engine', 'ejs')
app.set('views', './app/views')

// Public
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())
app.use(express.static('./app/public'))

// Consign
consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app)


module.exports = app