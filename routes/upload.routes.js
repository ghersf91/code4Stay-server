const router = require('express').Router()

const uploader = require('./../config/cloudinary.config')

router.post('/image', uploader.single('imageData'), (req, res) => {
    if (!req.file) {
        res.status(500).json({ errorMessage: 'Mistake loading the file' })
        return
    }
    res.json({ cloudinary_url: req.file.path })

})

router.post('/multipleImages', uploader.array('multipleImagesData'), (req, res) => {
    if (!req.files) {
        res.status(500).json({ errorMessage: 'Mistake loading the files' })
        return
    }
    res.json({ cloudinary_urls: req.files.map(res => res.path) })
})

module.exports = router