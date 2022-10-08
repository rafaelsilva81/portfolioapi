const AdminJS = require('adminjs');
const uploadFeature = require('@adminjs/upload');
const ProjectModel = require('../model/ProjectModel');
const UploadProvider = require('../providers/UploadProvider');

const ProjectResource = {
  resource: ProjectModel,
  features: [
    uploadFeature({
      provider: new UploadProvider(),
      properties: {
        file: 'image',
        filePath: 'image.path',
        filename: `image.filename`,
        filesToDelete: 'image.toDelete',
        key: 'imag.key',
        mimeType: 'image.mimeType',
        bucket: 'image.bucket',
      },
      multiple: false,
      validation: {
        mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'],
      },
    }),
  ],
  options: {
    parent: {},
    properties: {
      created_at: {
        isVisible: { list: true, filter: true, show: true, edit: false, add: false },
      },
      _id: {
        isVisible: false,
      },
      description: {
        type: 'richtext',
      },
      image: {
        components: {
          list: AdminJS.bundle('../components/ImageList.jsx'),
        },
      },
    },
  },
};

module.exports = ProjectResource;
