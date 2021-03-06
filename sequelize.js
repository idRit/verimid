const Sequelize = require('sequelize')

const paytmModel = require('./api/models/paytmModel')
const sportsModel = require('./api/models/sportsModel')

const {Database, UserName, Password} = require('./databaseCredentials');

const sequelize = new Sequelize(Database, UserName, Password, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
      timestamps: false,
      freezeTableName: true
  }
})

const Paytm = paytmModel(sequelize, Sequelize)
const Sports = sportsModel(sequelize, Sequelize)
const Concert = concertModel(squelize, Sequelize)

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

//sequelize.sync()
//  .then(() => {
//    console.log(`Database & tables created!`)
//})

module.exports = {
  Paytm, 
  Sports,
  Concert
}