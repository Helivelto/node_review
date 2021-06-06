module.exports = (application) => {
    application.get('/add-new-review', (req, res) => {
        application.app.controllers.admin.add_new_review(application, req, res)
    })

    application.post('/new/reviews', (req, res) => {
        application.app.controllers.admin.new_review(application, req, res);
    })
}

