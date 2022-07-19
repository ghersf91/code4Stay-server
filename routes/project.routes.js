const router = require("express").Router();
const Project = require('./../models/Project.model')
const { isAuthenticated } = require("../middlewares/jwt.middleware")

router.get('/getAllProjects', (req, res, next) => {

    Project
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneProject/:project_id', (req, res, next) => {
    const { project_id } = req.params

    Project
        .findById(project_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/create', (req, res, next) => {

    // const { _id: owner } = req.payload
    // console.log(req.payload)

    Project
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/edit/:project_id', (req, res, next) => {

    const { project_id } = req.params
    const { projectType, hoursPerWeek, minWeeks, description, site, shelterType, gallery }
        = req.body

    const newInfo = { projectType, hoursPerWeek, minWeeks, description, site, shelterType, gallery }

    Project
        .findByIdAndUpdate(project_id, newInfo)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/delete/:project_id', (req, res, next) => {
    const { project_id } = req.params

    Project
        .findByIdAndDelete(project_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router;