const AdminJS = require('adminjs');
const uploadFeature = require('@adminjs/upload');
const ProjectModel = require('../model/ProjectModel');

const ProjectResource = {
  resource: ProjectModel,
  features: [
    uploadFeature({
      provider: { local: { bucket: 'public' } },
      properties: {
        file: 'images',
        filePath: 'images.path',
        filename: 'images.filename',
        filesToDelete: 'images.toDelete',
        key: 'images.key',
        mimeType: 'images.mimeType',
        bucket: 'images.bucket',
      },
      multiple: true,
      validation: {
        mimeTypes: ['image/png', 'image/jpeg'],
      },
    }),
  ],
  options: {
    parent: {},
    properties: {
      description: {
        type: 'richtext',
      },
      created_at: {
        isVisible: { list: true, filter: true, show: true, edit: false, add: false },
      },
      _id: {
        isVisible: false,
      },
      images: {
        components: {
          list: AdminJS.bundle('../components/ImageList.jsx'),
        },
      },
    },
  },
};

module.exports = ProjectResource;