const express = require('express')
const router = express.Router()
const Codeomongo = require('../models/codeomongoledger')


// Getting All
router.get('/', async (req, res) => {
    try {
        const codeomongo = await Codeomongo.find()
        res.json(codeomongo)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getCodeomongo, (req, res) => {
    res.json(res.codeomongo)
})
// Creating One
router.post('/', async (req, res) => {
    const codeomongo = new Codeomongo({
       id_user: req.body.id_user,
       date_createwallet: req.body.date_createwallet,
       wallet_address: req.body.wallet_address,
       actual_balance: req.body.actual_balance,
       ETH_actualbalance: req.body.ETH_actualbalance,
       private_key: req.body.private_key
    })
    try {
        const newCodeomongo = await codeomongo.save()
        res.status(201).json(newCodeomongo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Updating One
router.patch('/:id', getCodeomongo, async (req, res) => {
    if (req.body.name != null) {
        res.codeomongo.name = req.body.name
    }
    if(req.body.codeomongoToChannel != null) {
        res.codeomongo.codeomongoToChannel = req.body.codeomongoToChannel
    }
    try {
        const updateCodeomongo = await res.codeomongo.save()
        res.json(updateCodeomongo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Deleting One
router.delete('/:id', getCodeomongo, async (req, res) => {
    try {
        await res.codeomongo.remove()
        res.json({ message: 'Deleted The Data' })
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

async function getCodeomongo(req, res, next){
    let codeomongo
    try {
        codeomongo = await Codeomongo.findById(req.params.id)
        if(codeomongo == null){
            return res.status(404).json({ message: 'Cannot find data' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.codeomongo = codeomongo
    next()
}


module.exports = router