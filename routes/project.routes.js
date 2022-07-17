const router = require("express").Router();

router.use('/getAllProjects', (req, res, next) => {
    res.json({ message: 'All projects'})
})

module.exports = router;