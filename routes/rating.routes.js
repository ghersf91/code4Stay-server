const router = require("express").Router()
const Rating = require('./../models/Rating.model')


router.post("/createRating", (req, res) => {

    Rating
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



module.exports = router