
const { Wines } = require("../models/Wines.model")

const WinesController = {
    getAll: async (req, res) => {
        try {
            const items = await Wines.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Wines.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newBlog = new Wines({ ...req.body })
            await newBlog.save()
            const items = await Wines.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Wines.findByIdAndDelete(id)
            const items = await Wines.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Wines.findByIdAndUpdate(id, { ...req.body })
            const items = await Wines.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { WinesController }
