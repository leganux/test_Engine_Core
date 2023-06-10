const {DataTypes} = require('sequelize');
const sequelize = require('./../db');


const LogOperaciones = sequelize.define('LogOperaciones', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user: DataTypes.INTEGER,
    action: DataTypes.STRING,
});

module.exports = {LogOperaciones}
