const joi = require('joi')

module.exports = {
  schemas: {
    form: joi
      .object()
      .keys({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().required(),
        date: joi.string().required(),
      })
      .options({ stripUnknown: true }),
  },
}
