const router = require("express").Router();

router.get('/getAllProjects', (req, res, next) => {
    res.json({ message: 'All projects' })
})

module.exports = router;