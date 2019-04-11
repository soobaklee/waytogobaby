const express = require('express');
const router = express.Router();
const weatherCtrl = require('../../controllers/weather');

router.post('/', weatherCtrl.weather);

module.exports = router;