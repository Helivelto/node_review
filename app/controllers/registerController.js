module.exports.form_cadastro = (application, req, res) => {
    res.render('usuarios/form_cadastro')
}

module.exports.cadastro_usuario = async (application, req, res) => {

    const DbConnection = require('../../config/dbConnection');
    const bcrypt = require('bcryptjs');

    try {

        const hashedPassword = await bcrypt.hash(req.body.senha_usuario, 10)
        let foto_usuario
        if (req.file == undefined) {
            foto_usuario = null
        } else {
            foto_usuario = req.file.filename
        }

        // const usuarios = ({
        //     nome_usuario: req.body.nome_usuario,
        //     email_usuario: req.body.email_usuario,
        //     senha_usuario: hashedPassword,
        //     foto_usuario: req.file.filename
        // })
        // console.log(req.file.path)
        DbConnection.connection().query(`insert into usuarios(nome_usuario, email_usuario, senha_usuario, cod_status_usuario, foto_usuario) 
        values ('${req.body.nome_usuario}', 
          '${req.body.email_usuario}', '${hashedPassword}', 'a', '${foto_usuario}' )`)
        res.redirect('/login')

    } catch(e) {

        console.log(e);
        res.status(500).send('Something broke!')

    }
}