const router = require("express").Router();

router.use('/projects', require('./project.routes'))

module.exports = router;
