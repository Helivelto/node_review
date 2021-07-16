module.exports.cadastro = (application, req, res) => {

    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection)

    usersDao.cadastro((error, result) => {
        console.log(funcionou)
        res.render('usuarios/cadastro')
    })

}

module.exports.cadastro_salvar = (application, req, res) => {

    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection)

    usersDao.cadastro((error, result) => {
        console.log('funcionou')
        res.render('home/home')
    })

}