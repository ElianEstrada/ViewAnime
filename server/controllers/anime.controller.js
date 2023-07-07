const { Anime } = require('../models/Anime');
const cloudinary = require('cloudinary').v2;

const validExtensions = ['png', 'jpg', 'jpeg'];

exports.getAnime = async (req, res) => {
    const  result = await Anime.findAll();

    res.status(200)
    .send({
        "message": "All animes",
        "data": result
    });
    
}

exports.addAnime = async (req, res) => {
    const {name, synopsis} = req.body;    
    const { file } = req.files;

    const extension = file.type.split('/')[1];

    if (!validExtensions.includes(extension)) {
        return res.status(400).send({
            "message": "Not valid file extension"
        });
    }

    try {
        const upload = await fetch('http://localhost:4000/upload', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path: file.path,
                folder: 'images'
            })
        });

        const response = await upload.json();

        if (response.status !== 201) {
            return res.status(400).send({
                "status": response.status,
                "message": response.message,
                "error": response.error
            });
        }

        const image = response.data;

        const result = await Anime.create({
            name,
            image,
            synopsis
        });

        //console.log(result.toJSON());
    
        if (JSON.stringify(result) === '{}') {
            return res.status(500)
            .send({
                "status": 500,
                "message": "Error to insert in data base"
            });
        }

        res.status(201)
        .send({
            "status": 201,
            "message": "Anime add successfully"
        });

    } catch (error) {
        res.status(400)
        .send({
            "status": 400,
            "message": "Error to add anime",
            "error": error
        });
    }
}