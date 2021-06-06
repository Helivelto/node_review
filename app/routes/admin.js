module.exports = (application) => {
    application.get('/add-new-review', (req, res) => {
        res.render('admin/add_novos_reviews')
    })

    application.post('/new/reviews', (req, res) => {
        const review = req.body;

        const connection = application.config.dbConnection;
        const reviewsDao = new application.app.models.ReviewsDAO(connection)
        reviewsDao.salvarReview(review, (error, result) => {
            res.redirect('/reviews')
        })
    })
}

