const User = require('../../models/userModel');

const info = async (req, res) => {
  const { id } = req.body;

  const user = await User.findById(id);

  const { user_id, type_user_id } = user;

  res.json({ user_id, type_user_id });
};

module.exports = info;
