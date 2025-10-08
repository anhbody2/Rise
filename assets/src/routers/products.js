const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/productsController');

router.get('/:category/:slug', productsController.showProducts);
router.get('/test', productsController.test);
module.exports = router;
