const http = require('http')
const fs = require('fs')
urls = {
    '/': 'index.html',
    '/urlshrt': 'urlshrt.html',
}
const server = http.createServer((req, res)=>{

    let path = './views/'

    if(urls[req.url]) {
        path += urls[req.url]
        res.statusCode = 200
    }
    else {
        path += '404.html'
        res.statusCode = 404
    }

    res.setHeader('Content-Type', 'text/html')

    fs.readFile(path, (err, data) =>{
        if(err) {
            console.log(err)
            res.end()
        }
        else {
            res.end(data)
        }
    })

})


server.listen(5555, 'localhost' , () =>{
    console.log('git')
})