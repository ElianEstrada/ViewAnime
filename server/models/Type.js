const { DataTypes } = require('sequelize');
const { connection } = require('../config/connection');

const Type = connection.define('Type', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'type_a',
    timestamps: false
});

exports.Type = Type;