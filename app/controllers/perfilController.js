module.exports.perfil = (application, req, res) => {
    const usuario = req.user
    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection)

    reviewsDao.getReviewUser(usuario, (error, result) => {
        res.render('usuarios/perfil', { reviews: result, usuario: usuario })
        console.log(result)
    })
}

module.exports.anyperfil = (application, req, res) => {
    // const User = require('../models/User')

    // const usuario = User.findUsers()
    const myUser = req.user
    console.log(`My user is ${myUser.nome_usuario}`)
    const autor = req.query
    console.log(autor)
    const connection = application.config.dbConnection;
    const usuariosDao = new application.app.models.UsuariosDAO(connection)

    usuariosDao.getUser(autor, (error, result) => {

        if (autor.autor == myUser.nome_usuario) {
            res.redirect('/perfil')
        } else {
            res.render('usuarios/anyProfile', { userProfile: result })
        }

        console.log(result)
    })


    // reviewsDao.getReviewUser(usuario, (error, result) => {
    //     res.render('usuarios/anyProfile', { reviews: result, anyUser: usuario })
    //     console.log(result)
    // })
}