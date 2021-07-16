function UsersDAO(connection) {
    this._connection = connection
}

UsersDAO.prototype.cadastro = function (obj_usuario, callback){
    this._connection.query(`select * from usuarios where email_usuario = '${obj_usuario.email_usuario}'`, callback)
}

module.exports = () => {
    return UsersDAO;
}