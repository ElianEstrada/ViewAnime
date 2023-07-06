const { connection } = require('../config/connection');
const { Anime } = require('../models/Anime');

exports.getAnime = async (req, res) => {
    const  result = await Anime.findAll();

    res.status(200)
    .send({
        "message": "All animes",
        "data": result
    });
    
}

exports.addAnime = async (req, res) => {
    const {name, image, synopsis} = req.body;

    const result = await Anime.create({
        name,
        image, 
        synopsis
    });

    console.log(result.toJSON());

    res.status(201)
    .send({
        "status": 201,
        "message": "Anime insert successfully"
    });
}