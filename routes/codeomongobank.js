const express = require('express')
const router = express.Router()
const Codeomongo = require('../models/codeomongobank')


// Getting All
router.get('/', async (req, res) => {
    try {
        const codeomongobank = await Codeomongo.find()
        res.json(codeomongobank)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getCodeomongo, (req, res) => {
    res.json(res.codeomongobank)
})
// Creating One
router.post('/', async (req, res) => {
    const codeomongobank = new Codeomongo({
        id_user: req.body.id_user,
        nama_bank: req.body.nama_bank,
        no_rekening: req.body.no_rekening,
        jumlah_saldo: req.body.jumlah_saldo
     
    })
    try {
        const newCodeomongo = await codeomongobank.save()
        res.status(201).json(newCodeomongo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Updating One
router.patch('/:id', getCodeomongo, async (req, res) => {
    if (req.body.name != null) {
        res.codeomongobank.name = req.body.name
    }
    if(req.body.codeomongoToChannel != null) {
        res.codeomongobank.codeomongoToChannel = req.body.codeomongoToChannel
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
        await res.codeomongobank.remove()
        res.json({ message: 'Deleted The Data' })
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

async function getCodeomongo(req, res, next){
    let codeomongobank
    try {
        codeomongobank = await Codeomongo.findById(req.params.id)
        if(codeomongobank == null){
            return res.status(404).json({ message: 'Cannot find data' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.codeomongobank = codeomongobank
    next()
}


module.exports = router