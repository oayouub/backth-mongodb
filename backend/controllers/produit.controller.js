const ProduitModel = require('../models/produit.model');

module.exports.setProduits = async (req, res) =>{
    const post = await ProduitModel.create({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        picture: req.body.picture,
        infusionTime: req.body.infusionTime,
        dosage: req.body.dosage,
        temperature: req.body.temperature,
        color: req.body.color,
        parfums: req.body.parfums,
    })
};
module.exports.getPosts = async (req, res) => {
    const posts = await ProduitModel.find();
    res.status(200).json(posts);
  };

module.exports.getPostsId = async (req, res) => {
    const posts = await ProduitModel.findById(req.params.id);
    res.status(200).json(posts);
  };
  
