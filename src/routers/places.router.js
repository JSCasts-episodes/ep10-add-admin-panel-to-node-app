const { Router } = require('express')
const paginate = require('../services/paginate.service')
const Place = require('../models/place.model')
const City = require('../models/city.model')

const router = new Router()

const serializer = (place) => {
  return place.toObject({ versionKey: false })
}

router.get('/', async (req, res) => {
  const places = await paginate(Place.find({
    userId: req.params.userId,
  }), req)
  res.send(places.map(serializer))
})

router.get('/:placeId', async (req, res) => {
  const place = await Place.findOne({
    userId: req.params.userId,
    _id: req.params.placeId,
  })
  res.send(serializer(place))
})

router.post('/', async (req, res) => {
  const place = await new Place({
    userId: req.params.userId,
    ...req.body.place
  }).save()
  res.send(serializer(place))
})

module.exports = router
