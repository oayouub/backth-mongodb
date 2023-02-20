const express = require('express');
const { setProduits, getPosts, getPostsId } = require('../controllers/produit.controller');
const router = express.Router();
const db = require('../config/db');



router.post('/post', setProduits);
router.get("/", getPosts);
router.get("/:id", getPostsId);

module.exports = router