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
    id_level: {
        type: String,
        required: true
    },
    password_user: {
        type: String,
        required: true
    },
    date_user: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('admin_users', codeomongoSchema)