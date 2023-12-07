const env = require('dotenv').config()
const express = require('express')
const mongo = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.7awui74.mongodb.net/?retryWrites=true&w=majority`
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')

function getFiles(dir, files = []) {
    // Get an array of all files and directories in the passed directory using fs.readdirSync
    const fileList = fs.readdirSync(dir)
    // Create the full path of the file/directory by concatenating the passed directory and file/directory name
    for (const file of fileList) {
        const name = `${dir}/${file}`
        // Check if the current file/directory is a directory using fs.statSync
        if (fs.statSync(name).isDirectory()) {
        // If it is a directory, recursively call the getFiles function with the directory path and the files array
        getFiles(name, files)
        } else {
        // If it is a file, push the full path to the files array
        files.push(name)
        }
    }
    return files
}     




app.listen(5555)
app.use(express.json())
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('index', {data:getFiles('./public/logos')})
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