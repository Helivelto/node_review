module.exports.add_new_review = (application, req, res) => {
    res.render('admin/add_novos_reviews')
}

module.exports.new_review = (application, req, res) => {
    const review = req.body;

    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection)
    reviewsDao.salvarReview(review, (error, result) => {
        res.redirect('/reviews')
    })
}

