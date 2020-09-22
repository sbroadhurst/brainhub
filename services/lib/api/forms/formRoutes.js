const router = require('express-promise-router')()

const { validateBody } = require('../../validate')
const formValidate = require('./formValidate').schemas.form
const Form = require('./formModel')

const createHandler = async function (req, res) {
  const { ...payload } = req.body
  const doc = new Form({ ...payload })
  await doc.save()

  res.status(200).json({ _id: doc._id, ...payload })
}

const getHandler = async function (req, res) {
  const { id } = req.params
  const doc = await Form.findById(id)

  res.status(200).json(doc)
}

const getAllHandler = async function (req, res) {
  const doc = await Form.find().sort({ updatedAt: -1 })

  res.status(200).json({ doc })
}

const updateHandler = async function (req, res) {
  const { id } = req.params
  console.log(id)
  const { ...payload } = req.body
  await Form.findOneAndUpdate({ _id: id }, { $set: { ...payload } })

  res.status(200).json(req.body)
}

const deleteDocHandler = async function (req, res) {
  const { id } = req.params
  await Form.deleteOne({ _id: id })

  res.status(200).send({ message: `Deleted ${id}` })
}

router.route(`/`).post(validateBody(formValidate), createHandler)
router.route(`/:id`).get(getHandler)
router.route(`/`).get(getAllHandler)
router.route(`/:id`).put(updateHandler)
router.route(`/:id`).delete(deleteDocHandler)

module.exports = router
