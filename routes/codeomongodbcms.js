const express = require('express')
const router = express.Router()
const Codeomongo = require('../models/codeomongodbcms')


// Getting All
router.get('/', async (req, res) => {
    try {
        const codeomongodbcms = await Codeomongo.find()
        res.json(codeomongodbcms)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getCodeomongo, (req, res) => {
    res.json(res.codeomongodbcms)
})
// Creating One
router.post('/', async (req, res) => {
    const codeomongodbcms = new Codeomongo({
        id_category: req.body.id_category,
        title_cms: req.body.title_cms,
        description_cms: req.body.description_cms
     
    })
    try {
        const newCodeomongo = await codeomongodbcms.save()
        res.status(201).json(newCodeomongo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Updating One
router.patch('/:id', getCodeomongo, async (req, res) => {
    if (req.body.name != null) {
        res.codeomongodbcms.name = req.body.name
    }
    if(req.body.codeomongoToChannel != null) {
        res.codeomongodbcms.codeomongoToChannel = req.body.codeomongoToChannel
    }
    try {
        const updateCodeomongo = await res.codeomongodbcms.save()
        res.json(updateCodeomongo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Deleting One
router.delete('/:id', getCodeomongo, async (req, res) => {
    try {
        await res.codeomongodbcms.remove()
        res.json({ message: 'Deleted The Data' })
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

async function getCodeomongo(req, res, next){
    let codeomongodbcms
    try {
        codeomongodbcms = await Codeomongo.findById(req.params.id)
        if(codeomongodbcms == null){
            return res.status(404).json({ message: 'Cannot find data' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.codeomongodbcms = codeomongodbcms
    next()
}


module.exports = router