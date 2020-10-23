const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type_user_id: {
    type: String,
    required: true,
  },

  accessToken: String,
  refreshToken: String,
});

module.exports = mongoose.model('User', userSchema);
