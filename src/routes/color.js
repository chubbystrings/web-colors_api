const express = require('express');
const colorController = require('../controllers/colorController');

const router = express.Router();

router.get('/', colorController.viewallColors);
router.get('/type', colorController.viewColorByType);
router.get('/search', colorController.searchAllType);
router.get('/color', colorController.getColorByName);


module.exports = router;
