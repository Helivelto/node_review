module.exports.form_login = (application, req, res) => {
    res.render('usuarios/form_login')
}


module.exports.login_usuario = (application, req, res) => {

    const obj_usuario = req.body
    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsuariosDAO(connection)


    usersDao.login(obj_usuario, (error, result) => {
        
        // console.log(obj_usuario)

        if(result.length > 0){
            res.redirect('/home/usuario')
        } else {
            res.send('Email ou senha incorretos')
        }
        
    })

}



module.exports.form_cadastro = (application, req, res) => {
    res.render('usuarios/form_cadastro')
}


module.exports.cadastro_usuario = (application, req, res) => {

    const obj_usuario = req.body
    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsuariosDAO(connection)


    usersDao.cadastro(obj_usuario, (error, result) => {
        
        // console.log(obj_usuario)
        // console.log(result)


        res.redirect('/home/usuario')

        // if(obj_usuario.length > 0){
        //     res.redirect('/home/usuario')
        // } else {
        //     res.send('Email ou senha incorretos')
        // }
        
    })

}

