const express = require('express');
const signup = require('../controllers/userControllers/signup');

const router = express.Router();

router.post('/signup', signup);

module.exports = router;
