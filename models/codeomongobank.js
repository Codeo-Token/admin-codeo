const mongoose = require ('mongoose')

const codeomongoSchema = new mongoose.Schema({
    id_user: {
        type: String,
        required: true
    },
    nama_bank: {
        type: String,
        required: true
    },
    no_rekening: {
        type: String,
        required: true
    },
    jumlah_saldo: {
        type: String,
        required: true
    },
    date_time: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('tabel_bank', codeomongoSchema)