module.exports = (application) => {
    const authMiddleware = require('../../config/server')

    application.get('/reviews', authMiddleware.authenticationMiddleware, (req, res) => {
        application.app.controllers.reviewsController.reviews(application, req, res);
    })

    application.get('/review', (req, res) => {
        application.app.controllers.reviewsController.review(application, req, res);
    })

    application.get('/add-new-review', authMiddleware.authenticationMiddleware,(req, res) => {
        application.app.controllers.reviewsController.add_new_review(application, req, res)
    })

    application.post('/new/reviews', (req, res) => {
        application.app.controllers.reviewsController.new_review(application, req, res);
    })

    // application.post('/review/comentario', (req, res) => {
    //     application.app.controllers.
    // })
}