const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize, type) => {
    
    return sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    });
}
