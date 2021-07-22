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


module.exports.add_new_review = (application, req, res) => {
    res.render('reviews/add_new_review')
}


module.exports.new_review = (application, req, res) => {
    const review = req.body;

    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection)
    reviewsDao.salvarReview(review, (error, result) => {
        res.redirect('/reviews')
    })
}