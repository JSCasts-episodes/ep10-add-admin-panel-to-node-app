const { model } = require('mongoose')

const City = model('City', {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = City
