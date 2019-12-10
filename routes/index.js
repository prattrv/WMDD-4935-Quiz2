const {characterRouter} = require('./characters.js')

const express = require('express')
const router = express.Router()

// Here, we're combining the various routers
router.use('/characters', characterRouter)

exports.indexRouter = router;