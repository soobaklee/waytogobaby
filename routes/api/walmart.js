const express = require('express');
const router = express.Router();
const walmartCtrl = require('../../controllers/walmart');

// router.post('/products', walmartCtrl.babyProdCat)
router.get('/products', walmartCtrl.index);
router.get('/products/:id', walmartCtrl.index);


module.exports = router;