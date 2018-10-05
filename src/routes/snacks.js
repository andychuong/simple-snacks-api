const express = require('express')
const router = express.Router()
const control = require('../controllers/snacks')

// http http://localhost:3000/snacks
router.get('/', control.getAll)
// http://localhost:3000/snacks/snacks/
router.get('/:id', control.getOneSnack)
//http  --json POST http://localhost:3000/snacks name=Chips+Ahoy
router.post('/', control.createSnack)
router.put('/:id', control.updateSnack)
// router.delete('/:id', control.deleteSnack)

module.exports = router
