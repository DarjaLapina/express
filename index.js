const express = require('express')
const { addListener } = require('nodemon')

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})