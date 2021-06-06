module.exports = (application) => {
    application.get('/reviews', (req, res) => {
        const connection = application.config.dbConnection;
        const reviewsDao = new application.app.models.ReviewsDAO(connection)

        reviewsDao.getReviews((error, result) => {
            res.render('reviews/reviews', { reviews: result})
        })
    })
}