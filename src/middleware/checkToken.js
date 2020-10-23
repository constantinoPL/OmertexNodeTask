require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createToken = require('../helpers/token');

const { jwtToken } = process.env;

const checkToken = (req, res, next) => {
  const userToken = req.headers.authorization.split(' ')[1];

  try {
    jwt.verify(userToken, jwtToken, async (err, decoded) => {
      try {
        if (err) throw new Error(err);

        const user = await User.findById(decoded.id);
        if (!user || user.accessToken !== userToken) {
          return res.sendStatus(403);
        }
        user.accessToken = createToken('access', { id: user.user_id });
        await user.save();

        req.body.id = decoded.id;
        next();
      } catch (error) {
        if (error.message === 'TokenExpiredError: jwt expired') {
          return res.status(403).json({ message: 'TokenExpired' });
        }
        console.log(error.message);
      }
    });
  } catch (e) {
    console.log(e.message);
    return res.sendStatus(500);
  }
};

module.exports = checkToken;
