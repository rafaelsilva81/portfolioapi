const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  description: {
    type: String,
    required: true,
    maxLength: 1000,
  },
  short_description: {
    type: String,
    required: true,
    maxLength: 100,
  },
  tags: {
    type: [String],
    required: true,
  },
  link: String,
  github: String,
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    required: true,
  },
  image: {
    type: JSON,
    required: false,
  },
  created_at: { type: Date, default: Date.now },
});

const ProjectModel = mongoose.model('Project', ProjectSchema);
module.exports = ProjectModel;
