/**
 * Paginates mongo collection,
 * 
 * @param {mongoose.Query} query
 * @param {Object} req     request passed by express
 * @return {mongoose.Query}
 */
const paginate = (query, req = {}) => {
  console.log(req.query)
  const page = req.query && req.query.page || 1
  const limit = req.query && req.query.perPage || process.env.LIMIT
  return query.limit(limit).skip((page - 1) * limit)
}

module.exports = paginate
