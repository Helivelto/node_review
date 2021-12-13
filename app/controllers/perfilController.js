module.exports.perfil = (application, req, res) => {
    const usuario = req.user
    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection)

    reviewsDao.getReviewUser(usuario, (error, result) => {
        res.render('usuarios/perfil', { reviews: result, usuario: usuario })
        console.log(result)
    })
}