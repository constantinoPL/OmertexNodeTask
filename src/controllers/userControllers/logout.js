const User = require('../../models/userModel');

const logout = async (req, res) => {
  const { id } = req.body;
  const { full } = req.query;
  const user = await User.findById(id).exec();

  if (full === 'false') {
    user.accessToken = '';
    user.save();
  } else {
    user.accessToken = '';
    user.refreshToken = '';
    user.save();
  }

  res.sendStatus(202);
};

module.exports = logout;
