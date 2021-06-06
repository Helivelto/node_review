module.exports = (application) => {
    application.get('/', function(req, res){

        const connection = application.config.dbConnection;
        const reviewsDao = new application.app.models.ReviewsDAO(connection);
        
        reviewsDao.getReviews((error, result) => {
            res.render('home/home', {reviews: result})
        })

    })
}