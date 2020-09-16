module.exports = {
  validateBody: function (schema) {
    return function (req, res, next) {
      const result = schema.validate(req.body)
      if (result.error) {
        return res.status(400).json(result.error)
      }

      req.value = req.value || {}
      req.value.body = result.value
      next()
    }
  },
}
