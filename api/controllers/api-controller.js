const { Paytm, Sports, Concert } = require('../../sequelize')
let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'u835472335_verve'
})
connection.connect();

exports.getDetails = (req, res) => {
	
}

exports.getByPhone = (req, res) => {

}

exports.getConcertDetais = (req, res) => {
	
}