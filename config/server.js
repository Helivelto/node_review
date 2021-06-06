const express = require('express')
const consign = require('consign')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
// const expressValidator = require('express-validator')

let app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app)

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))

module.exports = app