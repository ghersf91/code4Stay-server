const router = require("express").Router()

const User = require('./../models/User.model')


router.get("/getAllUsers", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneUser/:user_id", (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/createUser", (req, res) => {

    User
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/editUser/:user_id", (req, res) => {

    const { user_id } = req.params
    const { username, password, role, profilePicture, bio, projectTypeInterests, locationInterests } = req.body

    User
        .findByIdAndUpdate(user_id, { username, password, role, profilePicture, bio, projectTypeInterests, locationInterests })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/deleteUser/:user_id", (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



module.exports = router