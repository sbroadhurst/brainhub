const router = require('express-promise-router')()

const { validateBody } = require('../../validate')
const formValidate = require('./formValidate').schemas.form
const Form = require('./formModel')

const crud = function (router, cb) {
  const create = async function (req, res) {
    const { ...payload } = req.body
    const doc = cb.getModelInstance({ ...payload })
    await doc.save()

    res.status(200).json({ _id: doc._id, ...payload })
  }

  const get = async function (req, res) {
    const { id } = req.params
    let doc
    doc = await cb.getModel().findById(id)
    doc = { ...doc, _id: doc._id }

    res.status(200).json(doc)
  }

  const getAll = async function (req, res) {
    let doc
    doc = await cb.getModel().sort({ updatedAt: -1 })

    res.status(200).json({ docs: [...doc] })
  }

  const update = async function (req, res) {
    const { id } = req.params
    const doc = await cb.getModel().update({ _id: id }, { $set: { firstName: 'updatedName' } })

    res.status(200).json(doc)
  }

  const deleteDoc = async function (req, res) {
    const { id } = req.params
    await cb.getModel().deleteOne({ _id: id })

    res.status(200).send({ message: `Deleted ${id}` })
  }

  if (cb.validate) {
    router.route(`${cb.getPath()}/`).post(cb.validate(), cb.create ? cb.create : create)
  }
  router.route(`${cb.getPath()}/:id`).get(cb.get ? cb.get : get)
  router.route(`${cb.getPath()}/`).get(cb.getAll ? cb.getAll : getAll)
  router.route(`${cb.getPath()}/:id`).put(cb.update ? cb.update : update)
  router.route(`${cb.getPath()}/:id`).delete(cb.deleteDoc ? cb.deleteDoc : deleteDoc)
}

crud(router, {
  getModel: function () {
    return Form
  },
  getModelInstance: function (payload) {
    return new Form(payload)
  },
  validate: function () {
    return validateBody(formValidate)
  },
  getPath: function () {
    return '/forms'
  },
})

module.exports = router
