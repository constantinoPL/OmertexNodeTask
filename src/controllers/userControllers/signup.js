const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('../../models/userModel');

const saltRounds = process.env.saltRounds ?? 10;

const signup = async (req, res) => {
  const { user_id, password } = req.body;

  if (user_id && password) {
    const temp = user_id.replace(/\+?[\d\(\)-\s]{5,18}/, '');

    let type_user_id;

    if (temp.length === 0) {
      type_user_id = 'phone';
    } else if (temp.split('').filter((char) => char === '@').length === 1) {
      type_user_id = 'email';
    } else {
      return res.status(406).json({ message: 'user Id is incorrect' });
    }
    try {
      const userPass = await bcrypt.hash(password, Number(saltRounds));

      const newUser = new User({
        type_user_id,
        user_id,
        password: userPass,
      });

      const payload = { id: newUser._id };

      newUser.accessToken = createToken('access', payload);
      newUser.refreshToken = createToken('refresh', payload);

      await newUser.save();

      return res.json(userDstructurization(newUser));
    } catch (error) {
      console.log(error);
      return res
        .status(422)
        .json({ message: 'user id already exists in system' });
    }
  }
  return res.sendStatus(204);
};

module.exports = signup;
