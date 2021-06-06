// Importando app
const app = require('./config/server')

// Rotas sem Consign
// const rotaHome = require('./app/routes/home.js')(app)
// const rotaProdutos = require('./app/routes/produtos.js')(app)


// Porta
app.listen(3005, function(){
    console.log('Rodando...')
})