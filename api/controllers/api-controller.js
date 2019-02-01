var paytmSchema = require('../models/paytmModel.js');
var sportSchema = require('../models/sportsModel.js');

exports.getDetails = (req, res) => {
	paytmSchema.findAll( {where: {orderId: req.params.orderId}}).then(order => {
		if(!order) {
			res.json('null');
		} else {
			sportSchema.findAll({
                where: {
                    orderId: req.params.orderId
                },
                attributes: [name, contact_no, event]
            }).then(orderDet => {
				if(!orderDet) {
                        res.json();
                } else {
                    orderDet => res.json(orderDet)
                }
			}).catch(err => {
				res.status(500).send({
					message: err.message || "Some error occurred while retrieving notes."
				});
			})
		}
	})
}