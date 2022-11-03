const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('here is short history')
    }
    res.end(`
    <h1>oops!</h1>
    <p>we cannot find your page</p>
    <a href="/">back homepage</a>
    `)
})
server.listen(5000)