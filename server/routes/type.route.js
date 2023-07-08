const express = require('express');
const router = express.Router();

const typeController = require('../controllers/type.controller');

router.get('/types', typeController.getTypes);

module.exports = router;