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

ReviewsDAO.prototype.salvarReview = function (review, callback){
    DbConnection.connection().query(`insert into reviews set ?`, review, callback)
}

ReviewsDAO.prototype.getUltimas = function(review, callback){
    DbConnection.connection().query('select * from reviews order by id desc', review, callback)
}

module.exports = () => {
    return ReviewsDAO;    
}