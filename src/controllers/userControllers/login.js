const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('../../models/userModel');
const userDstructurization = require('../../helpers/userDestructurization');
const createToken = require('../../helpers/token');

const login = async (req, res) => {
  const { user_id, password } = req.body;

  if (user_id && password) {
    try {
      const user = await User.findOne({ user_id }).exec();
      if (!user) {
        return res.status(404).json({ message: 'user Id is incorrect' });
      }
      const isValidPass = await bcrypt.compare(password, user.password);

      if (isValidPass) {
        const payload = { id: user._id };
        user.accessToken = createToken('access', payload);
        user.refreshToken = createToken('refresh', payload);

        user.save();
        return res.json(userDstructurization(user));
      }
      return res.sendStatus(401);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(204);
};

module.exports = login;
