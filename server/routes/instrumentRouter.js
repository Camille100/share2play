const express = require('express');

const router = express.Router();

const InstrumentController = require('../controllers/InstrumentController');
const instrumentMulter = require('../middleware/instrumentMulter');

router.post('/create/:id', instrumentMulter, InstrumentController.create);

module.exports = router;
