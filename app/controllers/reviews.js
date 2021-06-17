module.exports.reviews = (application, req, res) => {

    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection)

    reviewsDao.getReviews((error, result) => {
        res.render('reviews/reviews', { reviews: result})
    })

}


module.exports.review = (application, req, res) => {

    const connection = application.config.dbConnection;
    const reviewDao = new application.app.models.ReviewsDAO(connection);
    const id = req.query

    reviewDao.getReview(id, (error, result) => {
        res.render("reviews/review", {review: result})
    })   
}