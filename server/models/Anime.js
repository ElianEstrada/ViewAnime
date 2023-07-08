const { DataTypes } = require('sequelize');
const { connection } = require('../config/connection');

const {Type} = require('./Type');

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
    },
    opinion: {
        type: DataTypes.STRING(250)
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'anime',
    timestamps: false
});

Type.hasMany(Anime, {
    foreignKey: 'id_type'
})

exports.Anime = Anime;