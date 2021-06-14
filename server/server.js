const express = require('express')
const dotenv = require('dotenv')
const connectionDB = require('./config/connection')
const app = express()

//Express Instance
dotenv.config({path: '../src/config.env'})
app.use(express.json())

//Database Connection
connectionDB()


//Routes for authentication
app.use('/api/auth/', require('./router/auth.routes'))

const PORT = process.env.PORT || 4000
app.listen(5000, () => {console.log(`Server is runing on port ${PORT}`)})