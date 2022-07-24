const router = require("express").Router();
const Project = require('./../models/Project.model')
const { isAuthenticated } = require("../middlewares/jwt.middleware")

router.get('/getAllProjects', (req, res, next) => {

    Project
        .find()
        // .select()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneProject/:project_id', (req, res, next) => {
    const { project_id } = req.params

    Project
        .findById(project_id)
        .populate('testimonials')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/create', isAuthenticated, (req, res, next) => {
    const { _id: owner } = req.payload

    Project
        .create({ owner, ...req.body })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



router.put('/edit/:project_id', isAuthenticated, (req, res, next) => {
    const { project_id } = req.params

    const { projectType, hoursPerWeek, minWeeks, description,
        city, country, shelterType, gallery, mealsIncluded }
        = req.body

    const newInfo = {
        projectType, hoursPerWeek, minWeeks, description,
        city, country, shelterType, gallery, mealsIncluded
    }

    Project
        .findByIdAndUpdate(project_id, newInfo, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/join/:project_id', isAuthenticated, (req, res, next) => {
    const { project_id } = req.params
    const { _id } = req.payload

    Project
        .findByIdAndUpdate(project_id, { $push: { joiners: _id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/delete/:project_id', (req, res, next) => {
    const { project_id } = req.params

    Project
        .findByIdAndDelete(project_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router;