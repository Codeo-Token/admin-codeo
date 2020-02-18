const mongoose = require ('mongoose')

const codeomongoSchema = new mongoose.Schema({
    id_user: {
        type: String,
        required: true
    },
    date_createwallet: {
        type: Date,
        required: true,
        default: Date.now
    },
    wallet_address: {
        type: String,
        required: true
    },
    actual_balance: {
        type: String,
        required: true
    },
    ETH_actualbalance: {
        type: String,
        required: true
    },
    private_key: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('ledger_tabels', codeomongoSchema)