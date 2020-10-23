const express = require('express');

const signup = require('../controllers/userControllers/signup');
const login = require('../controllers/userControllers/login');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
