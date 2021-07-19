module.exports = (application) => {
    application.get('/login', (req, res) => {
        application.app.controllers.loginController.form_login(application, req, res)
    })

    application.post('/usuario/login', (req, res) => {
        application.app.controllers.loginController.login_usuario(application, req, res)
    })
}