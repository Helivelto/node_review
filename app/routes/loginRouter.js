module.exports = (application) => {
    
    application.get('/login', (req, res) => {
        application.app.controllers.loginController.form_login(application, req, res)
    })
    application.post('/usuario/login', (req, res) => {
        application.app.controllers.loginController.login_usuario(application, req, res)
    })


    application.get('/cadastro', (req, res) => {
        application.app.controllers.loginController.form_cadastro(application, req, res)
    })
    application.post('/usuario/cadastro', (req, res) => {
        application.app.controllers.loginController.cadastro_usuario(application, req, res)
    })


    application.get('/home/usuario', (req, res) => {
        application.app.controllers.homeController.home_usuario(application, req, res)
    })
}