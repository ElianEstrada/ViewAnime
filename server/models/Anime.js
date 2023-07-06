const { DataTypes } = require('sequelize');
const { connection } = require('../config/connection');

const Anime = connection.define('Anime', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'anime',
    timestamps: false
});

exports.Anime = Anime;