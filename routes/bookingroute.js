const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Booking = require('../models/Booking')
// const accountSid = process.env.accountSid; 
// const authToken = process.env.authToken; 
// const client = require('twilio')('AC25e57c35ff0fa2cffd8b8dc7668fb3a0', '0226bdd15fc9b9278110ea171a772561'); 

const wbm = require('wbm');


// const Vonage = require('@vonage/server-sdk')

// const vonage = new Vonage({
//   apiKey: "98fac372",
//   apiSecret: "wQoKewL083mjA0SI"
// })



// const accountSid = '123testAC4b987f9ad23a9b5d52b20b55cac0f81f'; 
// const authToken = '123d2af4975471f0d3f630371ffca7becfd'; 
// const client = require('twilio')('AC4b987f9ad23a9b5d52b20b55cac0f81f', 'd2af4975471f0d3f630371ffca7becfd'); 
 




router.post('/booking' , (req,res)=>{





    Booking.find({} , (err,docs)=>{

        const book = new Booking({
            name:req.body.name ,
            lname : req.body.lname ,
            email : req.body.email ,
            contactnumber:req.body.contactnumber ,
            date:req.body.date ,
           slot:req.body.slot ,
           doctorname:req.body.doctorname,
            status : req.body.status ,
            userid:req.body.userid ,
            doctorid:req.body.doctorid ,
            speciality : req.body.speciality ,
            doctorcontact:req.body.doctorcontact ,
            checkif:"false" 
           

       } ) 



      

       book.save(err=>{
        
        if(!err)
        {
            
           return  res.send(book  )
        }
        else{
           return  res.send({message :'Something went wrong' } )
        }
    }


   

    ) 

     

    } )





    

} )


router.post('/getpatientsbyuserid', (req, res) => {

    //const userid = req.body.userid

    Booking.find({ doctorid: req.body.userid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
          
            res.send(docs)
        }
    })

})


router.post('/getpatientsbyuserid2', (req, res) => {

    //const userid = req.body.userid

    Booking.find({ doctorid: req.body.userid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
          
            res.send(docs)
        }
    })

})






router.post('/getpatientsbydocid', (req, res) => {

    const doctorid = req.body.doctorid

    Booking.find({ doctorid: doctorid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
           
            res.send(docs)
        }
    })

})




router.post('/getpatientsbydate', (req, res) => {

    const date2 = req.body.date2
    const doctorid = req.body.doctorid



    Booking.find({ doctorid: doctorid }, (err2, docs2) => {
        if (err2) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
           
            Booking.find({ date: date2 }, (err, docs) => {
                if (err) {
                    console.log( 'Error For Booking Date is' , err)
                    return res.status(400).json({ message: 'Something Went Wrong' })
                }
                else {
                    console.log( `All Bookings on ${date} for docid ${doctorid} are : ` , docs )
                    res.send(docs)
                }
            })
        }
    })



  

})







router.post('/getbookingssbyuserid', (req, res) => {

    const userid = req.body.userid

    Booking.find({ contactnumber: userid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
           
            res.send(docs)
        }
    })

})



router.post('/getbookingssbyBookingid', (req, res) => {

    
    Booking.findById({ _id: req.body.bookid }, (err, docs) => {
       // console.log('booking id in req is' , req.body.bookingid  )
        if (err) {
            //console.log(res)
            return res.status(400).json({ message: `Something Went Wrong ${err} ` })
        }
        else {
            
            res.send(docs)
        }
    })

})







router.post('/getbookingsbyonlyid', (req, res) => {

    const bookingid = req.body.orderid

    Booking.find({ _id: bookingid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
            res.send(docs[0])
        }
    })

})



router.get('/getallpatients' , (req,res)=>{
    Booking.find( {} , (err,docs)=>{
        if(err)
        {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else{
            res.send(docs)
        }
    } )
} )





router.post('/updatebooking' , (req,res)=>{

    // console.log('Body is' , req )
    console.log('Value of Checkif' ,req.body.updatedproduct.checkif  )
    Booking.findByIdAndUpdate( req.body.bookid , 
        { checkif : req.body.updatedproduct.checkif ,
            
        
        }  ,   (err,docs)=>{
        if(err)
        return res.status(400).json({message:`Something Went Wrong while updating doc ${err} `})

        else{
            
            //alert(docs)
            res.send({message:`Doctor Approved Successfully  `})
        }

    } )
} )




module.exports =router