module.exports = (application) => {
    const multer = require('multer')

    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "uploads/")
        },
        filename: function(req, file, cb){
            cb(null, file.originalname)
        }
    })
    
    const upload = multer({storage})

    application.get('/cadastro', (req, res) => {
        application.app.controllers.registerController.form_cadastro(application, req, res)
    })

    application.post('/usuario/cadastro', upload.single("file"), (req, res) => {
        application.app.controllers.registerController.cadastro_usuario(application, req, res)
    })
}