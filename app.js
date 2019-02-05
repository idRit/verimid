const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// API ENDPOINTS
//app.get('/api/getDetails/:orderId', (req, res) => {
//    //req.params.orderId
//    
//    Sports.findAll().then(sports => res.json(sports))
//})

app.get('/', (req, res) => {
    res.send('working')
})

require('./api/routes/api-routes.js')(app)

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})