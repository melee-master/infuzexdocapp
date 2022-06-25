const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Booking = require('../models/Booking')
// const accountSid = process.env.accountSid; 
// const authToken = process.env.authToken; 
// const client = require('twilio')('AC25e57c35ff0fa2cffd8b8dc7668fb3a0', '0226bdd15fc9b9278110ea171a772561'); 

const wbm = require('wbm');


const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "98fac372",
  apiSecret: "wQoKewL083mjA0SI"
})



const accountSid = '123testAC4b987f9ad23a9b5d52b20b55cac0f81f'; 
const authToken = '123d2af4975471f0d3f630371ffca7becfd'; 
const client = require('twilio')('AC4b987f9ad23a9b5d52b20b55cac0f81f', 'd2af4975471f0d3f630371ffca7becfd'); 
 




router.post('/booking' , (req,res)=>{


    


    // client.messages 
    //   .create({ 
    //      body: `This is to inform ${req.body.name} ${req.body.lname} that your appointment has been booked 
    //      for Dr.${req.body.doctorname} on ${req.body.date} at time ${req.body.slot} . 

    //      `,  
    //      messagingServiceSid: 'MGb4b7ae325252ab96d0ff4429f17046b0',      
    //      to: `+91${req.body.contactnumber}` 
    //    }) 
    //   .then(message => console.log('Message has been sent to',req.body.contactnumber , message.sid)) 
    //   .done();




//       const from = "Vonage APIs"
// const to = `91${req.body.contactnumber}`
// const text = `This is to inform ${req.body.name} ${req.body.lname} that your appointment has been booked 
//          for Dr.${req.body.doctorname} on ${req.body.date} at time ${req.body.slot} . `

// vonage.message.sendSms(from, to, text, (err, responseData) => {
//     if (err) {
//         console.log(err);
//     } else {
//         if(responseData.messages[0]['status'] === "0") {
//             console.log("Message sent successfully.");
//         } else {
//             console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//         }
//     }
// })




    //   wbm.start().then(async () => {
    //     const phones = `+91${req.body.contactnumber}`;
    //     const message = `This is to inform ${req.body.name} ${req.body.lname} that your appointment has been booked 
    //     for Dr.${req.body.doctorname} on ${req.body.date} at time ${req.body.slot} . 

    //     `;
    //     await wbm.send(phones, message);

    //     console.log('Whatsapp Message sent to' , req.body.contactnumber )
    //     await wbm.end();
    // }).catch(err => console.log(err));





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