const { Sequelize, DataTypes, Model } = require('sequelize');
const userModel = require('../Model/User');

const sequelize = new Sequelize('DockerBraulio', 'root', '1234', {
    host: '0.0.0.0',
    port: 3306,
    dialect:'mysql'
  });

const User = userModel(sequelize,Sequelize)

sequelize.sync({ force: false }).then(()=> {
    console.log("Tabla creadas")
})

module.exports = {
    User
}
 