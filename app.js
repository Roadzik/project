const env = require('dotenv').config()
const express = require('express')
const mongo = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.7awui74.mongodb.net/?retryWrites=true&w=majority`
const app = express()
const mongoose = require('mongoose')

app.listen(5555)
app.use(express.json())
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/urlshrt', (req, res) =>{
    res.render('urlshrt')
})

app.post('/urlshrt', (req, res) =>{
    res.render('urlshrt')
})


app.use((req,res)=>{
    res.status(404).render('index')
})