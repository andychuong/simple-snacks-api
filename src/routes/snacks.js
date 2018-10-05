const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/snacks')

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getOneSnack)

router.post('/', ctrl.createSnack)

// router.put('/:id', ctrl.updateSnack)

// router.delete('/:id', ctrl.deleteSnack)

module.exports = router
