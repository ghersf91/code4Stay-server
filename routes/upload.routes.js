const router = require('express').Router()

const uploader = require('./../config/cloudinary.config')

//.array instead of .single to upload multiple images
router.post('/image', uploader.single('imageData'), (req, res) => {
    if (!req.file) {
        res.status(500).json({ errorMessage: 'Mistake loading the file' })
        return
    }


    //.files instead of .file to upload multiple images

    res.json({ cloudinary_url: req.file.path })

})

module.exports = router