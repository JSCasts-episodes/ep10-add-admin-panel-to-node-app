const { model } = require('mongoose')

const User = model('User', {
  name: String,
  email: String,
})

module.exports = User
