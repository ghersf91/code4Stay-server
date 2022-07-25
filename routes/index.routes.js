const router = require("express").Router();

router.use('/users', require('./user.routes'))

router.use('/projects', require('./project.routes'))

router.use('/search', require('./search.routes'))

router.use('/auth', require('./auth.routes'))

router.use('/upload', require('./upload.routes'))

router.use('/ratings', require('./rating.routes'))

module.exports = router;
