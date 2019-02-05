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
    
    app.get('/api/getDetails/:orderId', (req, res) => {
        Paytm.findAll( {
            where: {
                orderId: req.params.orderId
            },
            attributes: ['orderId', 'Txn_Status']
        }).then(order => {
            if(!order) {
                res.json('null');
            } else {
                Sports.findAll({
                    where: {
                        orderId: req.params.orderId
                    },
                    attributes: ['name', 'contact_no', 'event']
                }).then(orderDet => {
                    if(!orderDet) {
                        console.log('nothing found');
                    } else {
                        console.log('success')
                        res.json(orderDet)
                    }
                })
            }
        })

    });

    app.get('/api/getByPhone/:phoneNum', (req, res) => {
        //select orderId from sports where contact_no = '9699993794' 
        //and orderId in (SELECT orderId from paytm where Txn_status = 'SUCCESS')
        //req.params.phoneNum
        connection.query(
            "select name, contact_no, event from sports where contact_no = "+req.params.phoneNum+ 
            " and orderId in (SELECT orderId from paytm where Txn_status = 'SUCCESS')",
            (err, rows, fields) => {
                if (err) res.json('something missing');

                res.json(rows);
            }
        )
    });

    app.get('/api/getConcertDetails/:ticket', (req, res) => {
        Concert.findAll({
            where: {
                ticket: req.params.ticket
            },
            attributes: ['name', 'phone']
        }).then(result => res.json(result));
    });
}