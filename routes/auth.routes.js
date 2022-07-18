const express = require("express")
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")

const router = express.Router()
const saltRounds = 10

router.post('/signup', (req, res, next) => {

    const { email, password, username } = req.body

    if (password.length < 5) {
        res.status(400).json({ message: 'Password must have at least 5 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username })
        })
        .then((createdUser) => {
            console.log('----', createdUser)
            const { email, username, user_id } = createdUser
            const user = { email, username, user_id }

            res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Internal Server Error' })
        })
})


module.exports = router