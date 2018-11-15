const express = require('express')
const morgan = require('morgan')

const pages = require('./routes')
const path = require('path')
const ejs = require('ejs')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

if (app.get('env') === 'development') {
    app.use(morgan('dev'))
}

// //Static express
app.use(express.static('public'))


//ejs - view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//ejs -default route
app.get('/', (req, res) => {
    res.render('index', {
        name: 'Nattida Noo-Boon',
        department: 'SE',
        id: 5930213010

    })
})

// Import route
app.use('/pages', pages)

//Server Started
app.listen(port, () => {
    console.log(`Server Started on ${port}`)
})