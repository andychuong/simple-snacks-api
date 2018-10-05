// Model - Data
const uuid = require('uuid/v4')
const snacks = []

// Create Snack!
function create (body) {

  const errors = []
  const name = body.name
  let response

  if (!name) {
    errors.push(`Name is required`)
    response = { errors }
  } else {
    const newSnack = { id: uuid(), name}
    snacks.push(newSnack)
    response = newSnack
  }
  return response
}

// Get All Snacks
function getAll () {
  return snacks
}

// Get One Snacks
function getOneSnack (id) {
  let error = ''
  const snack = snacks.find(snack => snack.id === id)
  let response
  if (!snack) {
    error = `Could not find snack with id of ${id}`
    response = { error }
  } else {
    response = { snack }
  }
  return response
}

// Edit A Snacks
function updateSnack (id, body) {
  let error = {}
  const snack = snacks.find(snack => snack.id === id)
  const snackIndex = snacks.indexOf(snack)
  const name = body.name
  let response
  if (!snack) {
    error.message = `Could not find snack with id of ${id}`
    error.status = 404
    response = { error }
  } else if (!name) {
    error.message =  `Name is required`
    error.status = 400
    response = { error }
  } else {
    snack.name = name
    snacks[snackIndex] = snack
    response = { snack }
  }
  return response
}

module.exports = {create, getAll, getOneSnack, updateSnack}
