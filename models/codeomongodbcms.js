const mongoose = require ('mongoose')

const codeomongoSchema = new mongoose.Schema({
    id_category: {
        type: int,
        required: true
    },
    title_cms: {
        type: String,
        required: true
    },
    description_cms: {
        type: String,
        required: true
    },
    date_cms: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('tabel_cms', codeomongoSchema)