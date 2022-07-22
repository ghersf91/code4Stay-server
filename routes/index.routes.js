const router = require("express").Router();

router.use('/users', require('./user.routes'))

router.use('/projects', require('./project.routes'))

router.use('/auth', require('./auth.routes'))

router.use('/upload', require('./upload.routes'))

module.exports = router;
