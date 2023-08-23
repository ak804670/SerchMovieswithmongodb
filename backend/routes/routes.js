const express = require('express')
const router = express.Router()
const {storeFavorite, getFavorite}= require("../controllers/moviesController.js")


router.post('/favorite', storeFavorite)
router.get('/favorite', getFavorite)


module.exports = router

// http://localhost:3000/api/favorite