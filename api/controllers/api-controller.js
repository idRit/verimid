var paytmSchema = require('../models/paytmModel.js');
var sportSchema = require('../models/sportsModel.js');

exports.getDetails = (req, res) => {
    paytmSchema
        .findAll({
            where: {
                orderId: req.params.orderId
            }
        })
        .then(order => {
            if(!order) {
                res.json();
            } else {
                sportSchema
                .findAll({
                    where: {
                        orderId: req.params.orderId
                    },
                    attributes: [name, contact_no, event]
                })
                .then(orderDet => {
                    if(!orderDet) {
                        res.json();
                    } else {
                        orderDet => res.json(orderDet)
                    }
            }
        )
}

exports.getByPhone = (req, res) => {
    sportSchema
        .findAll({
            where: {
                contact_no: req.params.contactNum
            },
            attributes: [orderId]
        })
        .then(order => {
            if(!order) {
                res.json();
            }
            else {
                paytmSchema
                    .findAll({
                        where: {
                            orderId: order,
                            Txn_Status: '%S%'
                        },
                        attributes: [Txn_Status]
                    })
                    .then(obj => {
                        if(!obj) res.json();
                        else {
                            res.json(order)
                        }
                    })
            }
        })
}