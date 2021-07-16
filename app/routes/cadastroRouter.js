module.exports = (application) => {
    application.post('/cadastro', (req, res) => {
        application.app.controllers.cadastroController.cadastro(application, req, res)
    })

    application.get('/salvar/cadastro', (req, res) => {
        application.app.controllers.cadastroController.cadastro_salvar(application, req, res)
    })
}