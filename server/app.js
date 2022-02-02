require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const path = require('path');
const db = require('./database');

db();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, () => {
    console.log(`Serveur connecter sur le ${process.env.PORT}`);
});
