const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/User')



module.exports = (passport) => {

  // serializeUser => uma vez autenticado ele salva um cookie no fromt e uma sessão no back.
  passport.serializeUser((user, done) => {
    done(null, user.id_usuario);
  })


  // deserializeUser => Uma vez que as informações estão gravadas, posso recuperá-las 
  passport.deserializeUser((id, done) => {

    User.findUserById(id).then((user) => {
      console.log(user)
      done(null, user);
    }).catch((error) => {
      console.log(error)
      return done(error, null)
    })

  })

  passport.use(new LocalStrategy({
    username: 'username',
    password: 'password'
  }, (username, password, done) => {
    User.findUser(username).then((user) => {
      if (!user) return done(null, false);
      const isValid = bcrypt.compareSync(password, user.senha_usuario);
      if (!isValid) return done(null, false);
      return (done(null, user));
    }).catch((error) => {
      console.log(error)
      return done(error, false)
    })
  }))

};