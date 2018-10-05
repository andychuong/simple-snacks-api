// Controllers
const model = require('../models/snacks')

function getAll (req, res, next) {
  const data = model.getAll()
  res.json({ data: data })
}

function getOneSnack (req, res, next) {
  const data = model.getOne(req.params.id)

  if (data.error) {
    return next({ status: 404, message: data.error })
  }
  res.json({ data: data.snack })
}

function createSnack (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new snack`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}
