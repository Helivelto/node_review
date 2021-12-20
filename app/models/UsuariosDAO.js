const DbConnection = require('../../config/dbConnection');

function UsersDAO(connection) {
    this._connection = connection
}

UsersDAO.prototype.login = function(obj_usuario, callback){
    DbConnection.connection().query(`select * from usuarios where 
    email_usuario = '${obj_usuario.email_usuario}' and senha_usuario = '${obj_usuario.senha_usuario}'`, callback)
}

UsersDAO.prototype.getUser = function(autor, callback){
    // DbConnection.connection().query(`select * from usuarios where 
    // nome_usuario = '${nome_usuario.nome_usuario}'`, callback)
    // DbConnection.connection().query(`select * from reviews where 
    // autor = '${autor}'`, callback)

    DbConnection.connection().query(`select reviews.*, usuarios.* from reviews inner join usuarios on 
    (usuarios.nome_usuario = reviews.autor) where reviews.autor = '${autor.autor}' `, callback)
}

// UsersDAO.prototype.cadastro = function(obj_usuario, callback){
//     DbConnection.connection().query(`insert into usuarios(nome_usuario, email_usuario, senha_usuarios, cod_status_usuario)
//     values ('${obj_usuario.nome_usuario}', '${obj_usuario.email_usuario}', '${obj_usuario.senha_usuario}', 'a')`, callback)
// }


UsersDAO.prototype.cadastro = function(obj_usuario, callback){
    DbConnection.connection().query('insert into usuarios set ? ', obj_usuario, callback)
}

module.exports = () => {
    return UsersDAO;
}