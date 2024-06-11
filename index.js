const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

hbs.handlebars.registerPartial('footer', '{{{footer}}}')
hbs.handlebars.registerPartial('head', '{{{head}}}')

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Добавить курс',
        isAdd: true
    })
})

app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Курсы',
        isCourses: true
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
