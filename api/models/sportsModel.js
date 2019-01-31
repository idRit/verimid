module.exports = (sequelize, type) => {
    return sequelize.define('sports', {
        alternative_contact_no: type.BIGINT,
        alternative_email: type.TEXT,
        alternative_name: type.CHAR,
        contact_no: type.BIGINT,
        email: type.TEXT,
        event: type.TEXT,
        gender: type.TEXT,
        id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: type.CHAR,
        orderId: type.TEXT,
        sd: type.TEXT
    })
}