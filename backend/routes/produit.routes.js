const express = require('express');
const { setProduits, getPosts } = require('../controllers/produit.controller');
const router = express.Router();
const db = require('../config/db');



router.post('/post', setProduits);
router.get("/", getPosts);

module.exports = router