const InstrumentSchema = require('../schemas/instrumentSchema');

exports.create = async (req, res) => {
    const { name, description, type } = req.body;
    const image = req.file;
    const { id } = req.params;

    const newInstrument = new InstrumentSchema({
        name,
        description,
        type,
        image,
        user: id,
    });

    const instrument = await newInstrument.save();

    if (!instrument) {
        return res.json(false);
    }
    return res.status(200).json(true);
};
