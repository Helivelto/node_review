module.exports = (application) => {
    const authMiddleware = require('../../config/server')

    application.get('/perfil', authMiddleware.authenticationMiddleware, (req, res) => {
        application.app.controllers.perfilController.perfil(application, req, res)
    })
}