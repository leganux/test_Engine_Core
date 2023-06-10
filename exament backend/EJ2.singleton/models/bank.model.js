const {DataTypes} = require('sequelize');
const sequelize = require('./../db');


const Bank = sequelize.define('Bank', {
    Clave: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
});

module.exports = {Bank}
