const router = require("express").Router()
const Rating = require('./../models/Rating.model')
const Project = require('./../models/Project.model')

router.get('/getRatings/:project_id', (req, res, next) => {
    const { project_id } = req.params

    Rating
        .find({ receiver: project_id })
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})


router.post("/createRating/:project_id", (req, res) => {
    const { project_id } = req.params

    Rating
        .create(req.body)
        .then(response => {
            // console.log(response._id)
            console.log('------------------Este es el id', response)
            return Project.findByIdAndUpdate(project_id, { $push: { testimonials: response._id } }, { new: true })
        })
        .then(newTestimonials => {
            console.log('---------------------Este es el nuevo proyecto', newTestimonials)
            res.json(newTestimonials)
        })
        .catch(err => res.status(500).json(err))
})




module.exports = router