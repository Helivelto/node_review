module.exports = (application) => {
    application.get('/cadastro', (req, res) => {
        application.app.controllers.registerController.form_cadastro(application, req, res)
    })

    application.post('/usuario/cadastro', (req, res) => {
        application.app.controllers.registerController.cadastro_usuario(application, req, res)
    })
}