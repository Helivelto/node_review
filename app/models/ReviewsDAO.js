const DbConnection = require('../../config/dbConnection');

function ReviewsDAO(connection){
    this._connection = connection
}

ReviewsDAO.prototype.getReviews = function(callback){
    DbConnection.connection().query('select * from reviews', callback)
} 

ReviewsDAO.prototype.getReview = function(id, callback){
    DbConnection.connection().query(`select * from reviews where id = ${id.id}`, callback)
}

ReviewsDAO.prototype.salvarReview = function (review, usuario, callback){
    // DbConnection.connection().query('insert into reviews set ?', review, callback)
    DbConnection.connection().query(`insert into reviews(autor, review, tema, titulo_review) values ('${usuario.nome_usuario}', '${review.review}', '${review.tema}', '${review.titulo_review}')`, callback)
}

ReviewsDAO.prototype.getUltimas = function(review, callback){
    DbConnection.connection().query('select * from reviews order by id desc', review, callback)
}

module.exports = () => {
    return ReviewsDAO;    
}