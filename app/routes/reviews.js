module.exports = (application) => {
    application.get('/reviews', (req, res) => {
        application.app.controllers.reviews.reviews(application, req, res);
    })

    application.get('/review', (req, res) => {
        application.app.controllers.reviews.review(application, req, res);
    })
}