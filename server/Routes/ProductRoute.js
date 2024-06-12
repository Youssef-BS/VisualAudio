const express  = require('express')
const { getAllMarkets,getProducts }  =require('../Controller/ProductCtrl');
const { getProductById } = require('../Controller/ProductCtrl');
const { getMarkets } = require('../Controller/ProductCtrl');
const { getNewsrooms } = require('../Controller/ProductCtrl');
const { getFeaturedProduct } = require('../Controller/ProductCtrl');
const { search } = require('../Controller/ProductCtrl');
const router = express.Router();


// Get all products from a specific market

router.get('/products',getProducts)

router.get('/all',getAllMarkets)
router.get('/markets',getMarkets)
router.get('/product/:id',getProductById)
router.get('/news',getNewsrooms)
router.get('/featured-product',getFeaturedProduct)
router.get('/search',search)

module.exports = router