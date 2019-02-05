module.exports = (sequelize, type) => {
    return sequelize.define('paytm', {
        id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: type.STRING,
        phone: type.INTEGER,
        ticket: type.INTEGER
    })
}