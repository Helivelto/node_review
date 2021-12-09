const express = require('express')
const consign = require('consign')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')

// Express
let app = express();


const passport = require('passport');
const session = require('express-session');
require('../app/auth')(passport);

module.exports.authenticationMiddleware = (req, res, next) => {
  
  if(req.isAuthenticated()) return next();
  res.redirect('/login');

};



// Session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 2 * 600000 * 1000} // 2min
}));

app.use(passport.initialize())
app.use(passport.session())


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

// Router
// const indexRouter = require('../app/routes/homeRouter')
// app.use('/', indexRouter)

// Erro 404
app.use(function(req, res, next) {
  res.render('error', { url: req.url })
});

module.exports = app