const Sequelize = require('sequelize');
const sequelize = new Sequelize('pinterest', 'pinterest_admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
})

const checkConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established succesfully')
  } catch (error) {
    console.log('Unable to connect to the database', error)
  }
}

// checkConnection()

module.exports = sequelize






