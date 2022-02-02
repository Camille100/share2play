const mongoose = require("mongoose");

const InstrumentSchema = mongoose.Schema({
    name: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'typeInstrument',
        required: true
    },
    image: {type: String, required: true},
    description: {type: String, required:true},
    borrowed: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model("instrument", InstrumentSchema);