module.exports = (sequelize, type) => {
    return sequelize.define('paytm', {
        orderId: type.STRING,
        Txn_Status: type.STRING
    })
}