const router = require('express-promise-router')()

const { validateBody } = require('../../validate')
const formValidate = require('./formValidate').schemas.form
const Form = require('./formModel')

const crud = function (router, cb) {
  const create = async function (req, res) {
    const { ...payload } = req.body
    const doc = new Form({ ...payload })
    await doc.save()

    res.status(200).json({ _id: doc._id, ...payload })
  }

  const get = async function (req, res) {
    const { id } = req.params
    const doc = await Form.findById(id)

    res.status(200).json(doc)
  }

  const getAll = async function (req, res) {
    const doc = await Form.find().sort({ updatedAt: -1 })

    res.status(200).json({ doc })
  }

  const update = async function (req, res) {
    const { id } = req.params
    const doc = await Form.update({ _id: id }, { $set: { firstName: 'updatedName' } })

    res.status(200).json(doc)
  }

  const deleteDoc = async function (req, res) {
    const { id } = req.params
    await Form.deleteOne({ _id: id })

    res.status(200).send({ message: `Deleted ${id}` })
  }

  if (cb.validate) {
    router.route(`/`).post(cb.validate(), cb.create ? cb.create : create)
  }
  router.route(`/:id`).get(cb.get ? cb.get : get)
  router.route(`/`).get(cb.getAll ? cb.getAll : getAll)
  router.route(`/:id`).put(cb.update ? cb.update : update)
  router.route(`/:id`).delete(cb.deleteDoc ? cb.deleteDoc : deleteDoc)
}

crud(router, {
  validate: function () {
    return validateBody(formValidate)
  },
})

module.exports = router
