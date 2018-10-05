const express = require('express')
const router = express.Router()
const control = require('../controllers/snacks')

// http http://localhost:3000/snacks
router.get('/', control.getAll)
// http://localhost:3000/snacks/snacks/
router.get('/:id', control.getOneSnack)
// http  --json POST http://localhost:3000/snacks name=Chips+Ahoy
router.post('/', control.createSnack)
// http --json PUT http://localhost:3000/snacks/$id name=Wings
router.put('/:id', control.updateSnack)
// http DELETE http://localhost:3000/snacks/$id
router.delete('/:id', control.deleteSnack)

module.exports = router
