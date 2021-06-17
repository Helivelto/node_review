module.exports.home = (application, req, res) =>{
    
    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection);
    
    reviewsDao.getUltimas((error, result) => {
        res.render('home/home', {reviews: result})
    })
    
}