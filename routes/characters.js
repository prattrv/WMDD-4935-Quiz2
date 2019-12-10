// routes/letters.js will contain all routes that are related to serving letter data
const express = require('express')
const router = express.Router()

// GET '/api/characters'
router.get('/', (req, res) => {
    res.send(req.app.locals.characters)
})

// GET '/api/characters/:id'
router.get('/:id', (req, res) => {
    res.send(req.app.locals.characters.filter(character => character.id == req.params.id).map(character => {return {"name": character.name, "description": character.description}}))
})

exports.characterRouter = router