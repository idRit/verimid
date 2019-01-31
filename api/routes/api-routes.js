module.exports = (app) => {
    const order = require('../controllers/api-controller.js');

    // Retrieve a single event with eventId
    app.get('/api/getDetails/:orderId', order.getDetails);

    // Update a event with eventId
    app.get('/api/getByPhone/:phoneNum', order.getByPhone);
}