var express = require('express');
var router = express.Router();
var ProjectModel = require('../model/ProjectModel');

/* GET all projects. */
router.get('/', async (req, res) => {
  const max = req.query.max || 999;
  const data = await ProjectModel.find().limit(Number(max)).sort({ date: -1 });
  res.json(data);
});

/* GET project by id */
router.get('/:id', async (req, res) => {
  console.log(req.params.id);
  const data = await ProjectModel.findById(req.params.id);
  res.json(data);
});

module.exports = router;
