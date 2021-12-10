module.exports.reviews = (application, req, res) => {

    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection)

    reviewsDao.getReviews((error, result) => {
        res.render('reviews/reviews', { reviews: result})
    })

}


module.exports.review = (application, req, res) => {

    const connection = application.config.dbConnection;
    const reviewDao = new application.app.models.ReviewsDAO(connection);
    const id = req.query

    reviewDao.getReview(id, (error, result) => {
        res.render("reviews/review", {review: result})
    })   
}


module.exports.add_new_review = (application, req, res) => {
    res.render('reviews/add_new_review', {validacao: {}, review: {}, usuario: req.user}) //nome_usuario: req.user.nome_usuario
    console.log(req.user.nome_usuario)
}


module.exports.new_review = (application, req, res) => {
    var review = req.body;
    // console.log(review)
    const usuario = req.user
    // console.log(usuario.nome_usuario)

    // Validando dados
    req.assert('titulo_review', 'O titulo do review precisa ter entre 5 e 30 caracteres').len(5, 30)
    req.assert('review', 'O conteúdo do seu review precisa ter entre 10 e 500 caracteres').len(10, 500)
    req.assert('tema', 'O seu tema precisa ter entre 10 e 50 caracteres!').len(10, 50)


    const erros = req.validationErrors()

    if(erros){
        res.render('reviews/add_new_review', { validacao: erros, review: review, usuario: usuario })
        console.log(erros)
        return;
    }

    const connection = application.config.dbConnection;
    const reviewsDao = new application.app.models.ReviewsDAO(connection)
    reviewsDao.salvarReview(review, usuario, (error, result) => {
        res.redirect('/')
    })
}