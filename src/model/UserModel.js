const mongoose = require('mongoose');

const UserModel = mongoose.model('User', {
  email: { type: String, required: true },
  encryptedPassword: { type: String, required: true },
});

module.exports = UserModel;
