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
        let something = [];
        Sports.findAll({
            where: {
                contact_no: req.params.phoneNum
            },
            attributes: ['orderId']
        }).then(order => {
            if(!order) {
                res.write('nothing found');
            } else {
                let orders = order;
                orders.forEach(event => {
                    let x;
                    (async function() {
                        x = await getOrderId(event, res)
                    })()
                    console.log(x)
                });

                res.json(something);
            }
        })
    });

    function getOrderId(event, res) {
        //console.log(event.orderId)
        Paytm.findAll({
            where: {
                orderId: event.orderId,
                Txn_Status: 'SUCCESS'
            },
            attributes: ['Txn_Status']
        }).then(obj => {
            if(obj.length == 0) {
                return '';
            }
            else {
                //console.log(event.orderId);
                return(event.orderId)                        
            }
        })
    }
}