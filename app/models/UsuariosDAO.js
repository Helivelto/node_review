function UsersDAO(connection) {
    this._connection = connection
}

UsersDAO.prototype.login = function(obj_usuario, callback){
    this._connection.query(`select * from usuarios where 
    email_usuario = '${obj_usuario.email_usuario}' and senha_usuario = '${obj_usuario.senha_usuario}'`, callback)
}

// UsersDAO.prototype.cadastro = function(obj_usuario, callback){
//     this._connection.query(`insert into usuarios(nome_usuario, email_usuario, senha_usuarios, cod_status_usuario)
//     values ('${obj_usuario.nome_usuario}', '${obj_usuario.email_usuario}', '${obj_usuario.senha_usuario}', 'a')`, callback)
// }


UsersDAO.prototype.cadastro = function(obj_usuario, callback){
    this._connection.query('insert into usuarios set ? ', obj_usuario, callback)
}

module.exports = () => {
    return UsersDAO;
}