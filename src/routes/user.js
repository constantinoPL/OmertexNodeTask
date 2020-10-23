const express = require('express');

const signup = require('../controllers/userControllers/signup');
const login = require('../controllers/userControllers/login');
const info = require('../controllers/userControllers/info');
const latency = require('../controllers/userControllers/latency');

const checkToken = require('../middleware/checkToken');

const router = express.Router();

router.get('/info', checkToken, info);
router.get('/latency', checkToken, latency);

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
