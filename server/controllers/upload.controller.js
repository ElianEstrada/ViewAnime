const cloudinary = require('cloudinary').v2;

exports.upload = async (req, res) => {

    const { path, folder } = req.body;

    try {
        const uploaded = await cloudinary.uploader.upload(path, {
            folder: folder
        });

        const { secure_url } = uploaded;

        res.status(201).send({
            "status": 201,
            "message": "Image upload successfully",
            "data": secure_url
        });

    } catch (error) {
        console.error(error);
        res.status(400).send({
            "status": 400,
            "message": "Error to upload image",
            "error": error
        });
    }
}