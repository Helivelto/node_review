module.exports = (application) => {
  const passport = require('passport')

  // GET E POST LOGIN
  application.get('/login', (req, res, next) => {
    if (req.query.fail) {
      res.render('usuarios/form_login', { message: 'Usuario e/ou senha inválidos!' });
    } else {
      res.render('usuarios/form_login', { message: null })
    }
  })
  application.post('/usuario/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?fail=true'
  }));
  // application.get('/login', (req, res) => {
  //     application.app.controllers.loginController.form_login(application, req, res)
  // })
  // application.post('/usuario/login', (req, res) => {
  //     application.app.controllers.loginController.login_usuario(application, req, res)
  // })


  // application.get('/home/usuario', (req, res) => {
  //   application.app.controllers.homeController.home_usuario(application, req, res)
  // })

}