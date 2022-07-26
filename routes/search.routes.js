const router = require('express').Router()
const Project = require('./../models/Project.model')

router.get('/:continent', (req, res, next) => {
    const { continent } = req.params

    Project
        .find({ continent })
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.get('/filter', (req, res, next) => {
    const { from_to } = req.query

    Project
        .find({ 'projectName': new RegExp(from_to, 'i') })
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router