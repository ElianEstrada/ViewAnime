require('dotenv').config();
require('./config/connection');
require('./config/bucket');

const express = require('express');
const formData = require('express-form-data');
const app = express();

const port = 4000;

app.use(express.json());
app.use(formData.parse());
app.use(express.urlencoded({extended: true}));
app.use('/anime', require('./routes/anime.route'));
app.use(require('./routes/upload.route'));
app.use(require('./routes/type.route'));

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});