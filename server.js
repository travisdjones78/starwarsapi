const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4000
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser')

// router calls
const filmRouter = require('./routes/filmRouter')
const peopleRouter = require('./routes/peopleRouter')
const planetRouter = require('./routes/planetRouter')
const speciesRouter = require('./routes/speciesRouter')
const starshipRouter = require('./routes/starshipRouter')
const vehicleRouter = require('./routes/vehicleRouter')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(`${req.method} >>> ${req.url}`),
        next()
})
app.use(express.static(path.join(__dirname, 'public')))
const tryer = {
first: 'hi',
bigFella: 'I See you'
}
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/films',filmRouter)
app.use('/people',peopleRouter)
app.use('/planets',planetRouter)
app.use('/species',speciesRouter)
app.use('/starships',starshipRouter)
app.use('/vehicles',vehicleRouter)

app.get('/users', function (req, res) {
    res.sendFile(path.join(__dirname, '/users.html'));
});

app.get('/employees',(req,res)=>{
    res.sendFile(path.join(__dirname, '/employees.html'));
})
app.get('/name', (req, res) => {
res.json(tryer)
})
app.use('*', (req, res) => {
    res.sendStatus(404)
        .send('404 File Not Found')
})

app.listen(PORT, () => {
    console.log(`Server running on http:(localhost:${PORT})`)
})

