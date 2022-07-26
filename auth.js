const mongoose = require('mongoose')

var mongodburl = 'mongodb+srv://checkup:checkup@cluster0.3oruho2.mongodb.net/checkup'

mongoose.connect(mongodburl , { useUnifiedTopology:true , useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on( 'error' ,()=>{
    console.log('Mogo DB connection failed')
} )

dbconnect.on('connected' , ()=>{
    console.log('connection passed Doctrap'  )
} )

mongoose.exports = mongoose

