function ReviewsDAO(connection){
    this._connection = connection
}

ReviewsDAO.prototype.getReviews = function(callback){
    this._connection.query('select * from reviews', callback)
} 
ReviewsDAO.prototype.getReview = function(callback,){
    this._connection.query('select * from reviews where id = 2', callback)
}
ReviewsDAO.prototype.salvarReview = function (review, callback){
    this._connection.query('insert into reviews set ?', review, callback)
}

module.exports = () => {
    return ReviewsDAO;    
}