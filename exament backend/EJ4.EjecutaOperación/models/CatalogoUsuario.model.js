const {DataTypes} = require('sequelize');
const sequelize = require('./../db');


const CatalogoUsuario = sequelize.define('CatalogoUsuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
});

module.exports = {CatalogoUsuario}
