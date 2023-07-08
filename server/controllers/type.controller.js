const { Type } = require('../models/Type');

exports.getTypes = async (req, res) => {
    const result = await Type.findAll();

    res.status(200)
    .send({
        "status": 200,
        "message": "Types of Animes",
        "data": result
    });
}