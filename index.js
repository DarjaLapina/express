const express = require('express')
const { addListener } = require('nodemon')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname,'views','about.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})