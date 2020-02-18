const mongoose = require ('mongoose')

const codeomongoSchema = new mongoose.Schema({
    id_category: {
        type: String,
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
    date_updatecms: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('cms_tabels', codeomongoSchema)