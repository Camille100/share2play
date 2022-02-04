require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const path = require('path');
const db = require('./database');

const userRouter = require('./routes/UserRouter');
const instrumentRouter = require('./routes/instrumentRouter');

db();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/instrument', instrumentRouter);

app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Serveur connecter sur le ${process.env.PORT}`);
});
