const { Paytm, Sports, Concert } = require('../../sequelize')
const connection = require('../../mysql')


exports.getDetails = (req, res) => {
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
	});
}

exports.getByPhone = (req, res) => {
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
        );
}

exports.getConcertDetails = (req, res) => {
	Concert.findAll({
		where: {
			ticket: req.params.ticket
		},
		attributes: ['name', 'phone']
	}).then(result => res.json(result));
}