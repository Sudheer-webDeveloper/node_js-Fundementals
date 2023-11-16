const express = require('express')
const path = require('path')
const app = express()

//app.use(express.static('./public'))


app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
})

app.get('/about',(req,res)=>{
    res.send('aboutpage')
})

app.listen(3000,()=>{
    console.log('Express server strted')
})


//node Expressserver.js