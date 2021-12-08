module.exports.form_cadastro = (application, req, res) => {
    res.render('usuarios/form_cadastro')
}

module.exports.cadastro_usuario = async (application, req, res) => {

    const DbConnection = require('../../config/dbConnection');
    const bcrypt = require('bcryptjs');

    try {

        const hashedPassword = await bcrypt.hash(req.body.senha_usuario, 10)
        const usuarios = ({
            nome_usuario: req.body.nome_usuario,
            email_usuario: req.body.email_usuario,
            senha_usuario: hashedPassword
        })
        DbConnection.connection().query(`insert into usuarios(nome_usuario, email_usuario, senha_usuario, cod_status_usuario) 
        values ('${req.body.nome_usuario}', 
          '${req.body.email_usuario}', '${hashedPassword}', 'a' )`)
        res.redirect('/login')

    } catch(e) {

        console.log(e);
        res.status(500).send('Something broke!')

    }
}