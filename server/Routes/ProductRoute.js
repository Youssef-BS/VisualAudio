const express  = require('express')
const { getAllMarkets,getProducts }  =require('../Controller/ProductCtrl');
const { getProductById } = require('../Controller/ProductCtrl');
const router = express.Router();
router.get('/getall',getAllMarkets)
router.get('/:id',getProductById)
module.exports = router