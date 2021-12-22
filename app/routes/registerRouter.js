module.exports = (application) => {
    const multer = require('multer')


    const fileFilter = (req, file, cb) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, true)
        } else {
            cb(null, false)
            console.log("Isso n é uma img")
        }
    }
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "uploads/")
        },
        filename: function(req, file, cb){
            cb(null, Date.now().toString() + "_" + file.originalname)
        }
    })
    
    const upload = multer({
        storage: storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: 1024 * 1024 * 5,
        }
    })

    application.get('/cadastro', (req, res) => {
        application.app.controllers.registerController.form_cadastro(application, req, res)
    })

    application.post('/usuario/cadastro', upload.single("file"), (req, res) => {
        application.app.controllers.registerController.cadastro_usuario(application, req, res)
    })
}