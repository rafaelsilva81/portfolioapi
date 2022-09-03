var express = require('express');
var router = express.Router();
var ProjectModel = require('../model/ProjectModel');

/* GET all projects. */
router.get('/', async (req, res) => {
  const data = await ProjectModel.find();
  res.json(data);
  /* .then(() => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    }); */
});

/* GET project by id */
router.get('/:id', async (req, res) => {
  const data = await ProjectModel.findById(req.params.id)
    .then(() => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).send({ error: "project not found or doesn't exist" });
    });
});

module.exports = router;
