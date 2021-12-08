module.exports = (application) => {
    application.get('/', function authenticationMiddleware(req, res, next){
  
        if(req.isAuthenticated()) return next();
        res.redirect('/login');
      
      }, function(req, res){
        application.app.controllers.homeController.index(application, req, res);
    })
}