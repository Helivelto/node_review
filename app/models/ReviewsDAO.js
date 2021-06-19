function ReviewsDAO(connection){
    this._connection = connection
}

ReviewsDAO.prototype.getReviews = function(callback){
    this._connection.query('select * from reviews', callback)
} 

ReviewsDAO.prototype.getReview = function(id, callback){
    this._connection.query(`select * from reviews where id = ${id.id}`, callback)
}

ReviewsDAO.prototype.salvarReview = function (review, callback){
    this._connection.query('insert into reviews set ?', review, callback)
}

ReviewsDAO.prototype.getUltimas = function(review, callback){
    this._connection.query('select * from reviews order by id desc limit 3', review, callback)
}

module.exports = () => {
    return ReviewsDAO;    
}