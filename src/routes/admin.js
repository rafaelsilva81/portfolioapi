const AdminJSExpress = require('@adminjs/express');
const AdminJS = require('adminjs');
const bcrypt = require('bcrypt');
const adminJSOptions = require('../admin.config');
const UserModel = require('../model/UserModel');

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJSOptions, {
  authenticate: async (email, password) => {
    const user = await UserModel.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword);
      if (matched) {
        return user;
      }
    }
    return false;
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
});

module.exports = adminRouter;
