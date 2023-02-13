const express = require("express");
const connectDB = require("./config/db");

const dotenv = require("dotenv").config();
const port = 5000;

connectDB();

const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require('./routes/produit.routes'));




// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port));