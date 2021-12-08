module.exports = (application) => {
    const authMiddleware = require('../../config/server')
    application.get('/', authMiddleware.authenticationMiddleware, function(req, res){
      application.app.controllers.homeController.index(application, req, res);
  })
}