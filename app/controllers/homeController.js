module.exports.index = (application, req, res) =>{
    
    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection);
    
    reviewsDao.getUltimas((error, result) => {
        res.render('home/index', {reviews: result})
    })
    
}

module.exports.home_usuario = (application, req, res) => {

    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection);
    
    reviewsDao.getUltimas((error, result) => {
        res.render('usuarios/home_usuario', {reviews: result})
    })

}