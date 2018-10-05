// Controllers
const model = require('../models/snacks')

function createSnack (req, res, next) {
  // console.log("In create function")
  // console.log("body: " , req.body)
  const result = model.create(req.body)
  if (result.errors) {
    return next({ status: 400, message: `Could not create new snack`, errors: result.errors })
  }
  res.status(201).json({ data: result })
}

function getAll (req, res, next) {
  // console.log("in getAll")
  const data = model.getAll()
  res.status(200).json({ data: data })
}

function getOneSnack (req, res, next) {
  // console.log('Inside getOneSnack')
  const data = model.getOneSnack(req.params.id)
  // console.log(data)
  if (data.error) {
    return next({ status: 404, message: data.error })
  }
  res.status(200).json({ data: data.snack })
}

function updateSnack (req, res, next) {
  // console.log('inside updateSnack')
  // console.log("id: ", req.params.id)
  // console.log("name: ", req.body.name)
  const data = model.updateSnack(req.params.id, req.body)
  console.log(data.status)
  if(data.error){
    return next({ status: data.error.status, message: data.error.message})
  }
  res.status(200).json({ data: data.snack})
}

function deleteSnack (req, res, next) {
  // console.log('inside deleteSnack')
  const data = model.deleteSnack(req.params.id)
  if(data.error){
    return next({ status:404, message: data.error})
  }
  res.status(204).json({ data: data.snack})
}

module.exports = {createSnack, getAll, getOneSnack, updateSnack, deleteSnack}
