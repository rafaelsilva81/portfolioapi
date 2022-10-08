const AdminJS = require('adminjs');
const uploadFeature = require('@adminjs/upload');
const ProjectModel = require('../model/ProjectModel');
const UploadProvider = require('../providers/UploadProvider');

const ProjectResource = {
  resource: ProjectModel,
  /*   features: [
      uploadFeature({
        provider: new UploadProvider(),
        properties: {
          file: 'images',
          filePath: 'images.path',
          filename: `images.filename`,
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
    ], */
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
      }
      /* images: {
        components: {
          list: AdminJS.bundle('../components/ImageList.jsx'),
        },
      }, */
    },
  },
};

module.exports = ProjectResource;
