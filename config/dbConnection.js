const mysql = require('mysql2')

class DbConnection {

    connection(){
        if(!this.conn){
            this.conn = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '', //Senha da escola 12345678
                database: 'dbreview' // Banco de dados criado na escola
            });

            this.conn.connect((error) => {

                if(error) {
                    console.log(`Error: ${error}`)
                    throw error;
                };
                console.log('Conectado com sucesso!')


            })
        }
        return this.conn;
    }
}

module.exports = new DbConnection()


// VERSÃO ANTIGA
// const mysql = require('mysql')
// module.exports = () => {
//     return connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'dbreview'
//     })
// }