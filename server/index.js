require('dotenv').config();
require('./config/connection');

const  express = require('express');
const app = express();

const port = 4000;

app.use(express.json())
app.use('/anime', require('./routes/anime.route'));

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});