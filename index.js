const express = require('express')
const app = express()
const io = require('socket.io')(3000,{})
const httpOptions = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html','css','map','js'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static('public',httpOptions))
app.get('/client',(req,res)=>{
    res.set('Content-Type','application/json').send('[]')
})

app.listen(80)