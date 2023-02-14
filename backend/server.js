const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const dotenv = require("dotenv").config();
const port = 5000;

connectDB();

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        optionsSuccessStatus: 200,
    })
);

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require('./routes/produit.routes'));




// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port));