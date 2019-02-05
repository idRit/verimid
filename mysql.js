const mysql = require('mysql')

const {Database, UserName, Password} = require('./databaseCredentials');

const connection = mysql.createConnection({
    host: 'localhost',
    user: UserName,
    password: Password,
    database: Database
})

connection.connect();

module.exports = connection;