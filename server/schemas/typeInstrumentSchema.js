const mongoose = require('mongoose')

const TypeInstrumentSchema = mongoose.Schema({
    name: {type: String, required: true}
})

module.exports = mongoose.model("typeInstrument", TypeInstrumentSchema)