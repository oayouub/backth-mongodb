const mongoose = require('mongoose');

const produitSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            autoIncrement:true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        },
        infusionTime: {
            type: Number,
            required: true,
        },
        dosage: {
            type: Number,
            required: true,
        },
        temperature: {
            type: Number,
            required: true,
        },
        color: {
            type: [String],
            required: true,
        },
        parfums: {
            type: [String],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('produit', produitSchema)