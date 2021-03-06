require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser:true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.error('Connected to Database'))

app.use(express.json())

const codeomongoRouter = require('./routes/codeomongodb')
app.use('/codeo', codeomongoRouter)

const codeomongobankRouter = require('./routes/codeomongobank')
app.use('/codeobank', codeomongobankRouter)

const codeomongocmsRouter = require('./routes/codeomongodbcms')
app.use('/codeocms', codeomongocmsRouter)

const codeomongoledgerRouter = require('./routes/codeomongoledger')
app.use('/codeoledger', codeomongoledgerRouter)


app.listen(3000, () => console.log('Server Started'))