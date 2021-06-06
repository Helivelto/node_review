module.exports = (application) => {
    application.get('/review', (req, res) => {
        // res.render('reviews/review')

    const connection = application.config.dbConnection;
    const reviewDao = new application.app.models.ReviewsDAO(connection);
        // reviewDao.getReviews((error, result) => {
        //     res.render('reviews/review', {review: result})
        // })
        reviewDao.getReviews((error, result) => {
            res.render("reviews/review", {review: result})
        })
    

        connection.query('select * from noticias where id = 2', function(error, result){
            res.render('reviews/review', {review: result})
        })
    })
}