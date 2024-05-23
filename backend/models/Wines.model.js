
const mongoose = require("mongoose")

const Wines = mongoose.model("Wines", new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    img: {
        type: String
    },
    disc:{
        type: String
    }
}))

module.exports = { Wines }
