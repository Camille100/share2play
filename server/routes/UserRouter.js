const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

router.post('/registration', UserController.registration);
router.post('/connexion', UserController.login);

module.exports = router;
