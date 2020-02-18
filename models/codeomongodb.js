const mongoose = require ('mongoose')

const codeomongoSchema = new mongoose.Schema({
    nama_user: {
        type: String,
        required: true
    },
    email_user: {
        type: String,
        required: true
    },
    id_country: {
        type: String,
        required: true
    },
    date_updatecms: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('tabel_cms', codeomongoSchema)