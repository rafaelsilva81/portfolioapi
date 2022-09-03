const AdminJS = require('adminjs');
const AdminJSMongoose = require('@adminjs/mongoose');
const ProjectResource = require('./resources/ProjectResource');
const UserResource = require('./resources/UserResource');

AdminJS.registerAdapter(AdminJSMongoose);
const adminJSOptions = new AdminJS({
  resources: [ProjectResource, UserResource],
  locale: {
    translations: {
      labels: {
        Project: 'My Projects',
        User: 'Users',
        loginWelcome: `Welcome!`,
      },
      messages: {
        loginWelcome: 'MyPortfolio Admin - Login',
      },
    },
  },
  branding: {
    companyName: 'MyPortfolio',
    softwareBrothers: false,
    logo: '',
  },
  dashboard: {
    component: AdminJS.bundle('./components/Dashboard'),
  },
  rootPath: '/admin',
});

module.exports = adminJSOptions;
