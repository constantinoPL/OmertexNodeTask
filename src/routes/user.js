const express = require('express');

const signup = require('../controllers/userControllers/signup');
const login = require('../controllers/userControllers/login');
const info = require('../controllers/userControllers/info');

const checkToken = require('../middleware/checkToken');

const router = express.Router();

router.get('info', checkToken, info);

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
