const { Paytm, Sports, Concert } = require('../../sequelize')
let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'u835472335_verve'
})
connection.connect();


module.exports = (app) => {
    const order = require('../controllers/api-controller');
    
    app.get('/api/getDetails/:orderId', order.getDetails);

    app.get('/api/getByPhone/:phoneNum', order.getByPhone);

    app.get('/api/getConcertDetails/:ticket', order.getConcertDetails);
}