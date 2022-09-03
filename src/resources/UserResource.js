const UserModel = require('../model/UserModel');
const bcrypt = require('bcrypt');

const UserResource = {
  resource: UserModel,
  options: {
    properties: {
      encryptedPassword: {
        isVisible: false,
      },
      password: {
        type: 'string',
        isVisible: {
          list: false,
          edit: true,
          filter: false,
          show: false,
        },
      },
    },
    parent: {},
    actions: {
      new: {
        before: async (request) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              encryptedPassword: await bcrypt.hash(request.payload.password, 10),
              password: undefined,
            };
          }
          return request;
        },
      },
    },
  },
};

module.exports = UserResource;
