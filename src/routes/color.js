const express = require('express');
const colorController = require('../controllers/colorController');

const router = express.Router();

router.get('/', colorController.viewallColors);
router.get('/color', colorController.viewColorByType);


module.exports = router;
