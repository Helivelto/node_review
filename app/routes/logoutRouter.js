module.exports = (application) => {
    application.get('/logout', (req, res, next) => {
        req.logout();
        res.redirect('/')
    })
}