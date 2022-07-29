const router = require('express').Router()
const Project = require('./../models/Project.model')

router.get('/:continent', (req, res, next) => {
    const { continent } = req.params

    Project
        .find({ continent })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router