const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Booking = require('../models/Booking')


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
            checkif:"false"
           

       } ) 

  
    //    const localsave = {
    //        name : docs[0].name ,
    //        _id: docs[0]._id ,
               
    //             contactnumber:docs[0].contactnumber ,
    //             lname:docs[0].lname ,
    //             slot:docs[0].slot ,
    //             status : docs[0].status ,
    //             date:docs[0].date ,
    //             doctorname : docs[0].doctorname ,
    //             speciality:docs[0].speciality
    //    }

      

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

    const doctorid = req.body.userid

    Booking.find({ doctorid: doctorid }, (err, docs) => {
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
console.log('docid is' , doctorid )
    Booking.find({ doctorid: doctorid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
            console.log('Data is' , docs )
            res.send(docs)
        }
    })

})






router.post('/getbookingssbyuserid', (req, res) => {

    const userid = req.body.userid

    Booking.find({ userid: userid }, (err, docs) => {
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