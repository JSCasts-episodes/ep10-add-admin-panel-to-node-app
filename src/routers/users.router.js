const { Router } = require('express')
const paginate = require('../services/paginate.service')
const User = require('../models/user.model')

const router = new Router()

const serializer = (user) => {
  return user.toObject({ versionKey: false })
}

router.get('/', async (req, res) => {
  const users = await paginate(User.find({}), req)
  res.send(users.map(serializer))
})

router.post('/', async (req, res) => {
  const user = await new User(req.body.user).save()
  res.send(serializer(user))
})

module.exports = router
