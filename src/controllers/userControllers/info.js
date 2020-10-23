const User = require('../../models/userModel');

const info = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const user = await User.findById(id).exec();
  console.log('in info user', user);
  const { user_id, type_user_id } = user;

  res.json({ user_id, type_user_id });
};

module.exports = info;
