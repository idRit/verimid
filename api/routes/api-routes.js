const { Paytm, Sports } = require('../../sequelize')

module.exports = (app) => {
    const order = require('../controllers/api-controller');
    
    app.get('/api/getDetails/:orderId', (req, res) => {
        console.log('im in')

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
        console.log('im in1')

        Sports.findAll({
            where: {
                contact_no: req.params.contactNum
            },
            attributes: [orderId]
        }).then(order => {
            if(!order) {
                res.json('nothing found');
            } else {
                Paytm.findAll({
                    where: {
                        orderId: order,
                        Txn_Status: '%S%'
                    },
                    attributes: [Txn_Status]
                }).then(obj => {
                    if(!obj) {
                        res.json('nothing found')
                    } else {
                        res.json(order);
                    }
                })
            }
        })
    });
}