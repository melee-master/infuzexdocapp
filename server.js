const express = require('express')
const bodyparser= require('body-parser')
const app = express()

var useroroute = require('./routes/useroute')
var drroute = require('./routes/drroute')
var bookingroute = require('./routes/bookingroute')
var adminroute = require('./routes/adminroute')
var compounderroute = require('./routes/comounderroute')

app.use(bodyparser.json())
const path=require('path')
let dbconnection = require('./auth')



app.get("/" , (req,res)=>{
    res.send("Welcome to Doctrap")
} )




app.use('/api/users/' , useroroute )

app.use('/api/doctor/' , drroute )
app.use('/api/booking/' , bookingroute )
app.use('/api/admin' , adminroute )
app.use('/api/compounder/' , compounderroute )


const port =  7000 ;

 app.listen( port , ()=>{
    console.log('Server started of Doctrap')
} )