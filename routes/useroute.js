const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


const User = require('../models/usermodel')

var universalhash = '0xff51afd7ed558ccb9fe1a85ec53LdL'
var backendhash = '1a85ec53LdL0xc4ceb9fe1a85ec50x'

router.post('/register', (req,res)=>{

const {password} = req.body

var hashedpass = universalhash+req.body.password+backendhash


    User.find({contactnumber:req.body.contactnumber} , (err,docs)=>{
        if(docs.length>0)
        {
            return res.status(400).send({message:'Phone Number Already Registered'})
        }
        else{
            const user = new User(
                {
                    name : req.body.name ,
                    lname : req.body.lname ,
                    email : req.body.email ,
                    password : hashedpass ,
                    contactnumber:req.body.contactnumber
                }
            )
        
            user.save(err=>{
        
                if(!err)
                {
                    
                   return  res.send({message :'Registration Successful' }  )
                }
                else{
                   return  res.send({message :'Something went wrong' } )
                }
        
        
        
        
            }
        
            )
        
        }
    } )

  


} )












router.post('/login' , (req,res)=>{

   const usepass = universalhash + req.body.password + backendhash

 

    User.find({contactnumber:req.body.email , password:usepass} , (err,docs)=>{

        if(docs.length>0)
        {
            
            const localsave = {
                name : docs[0].name ,
                _id: docs[0]._id ,
                email:docs[0].email ,
                contactnumber:docs[0].contactnumber ,
                lname:docs[0].lname
            }

            res.send(localsave)
        }
        else{
          return  res.status(400).json({message:'Invalid Credentials'})
        }

    } )

} )


router.post('/update' , (req,res)=>{
    const {userid , userupdate} = req.body
    User.findByIdAndUpdate({_id : userid} , {
        name : userupdate.name ,
        lname:userupdate.lname ,
        email: userupdate.email ,
        contactnumber:userupdate.contactnumber
    } , (err)=>{

        if(err)
        {
            return  res.status(400).json({message:`Couldn't update user  `})

        }
        else{
            res.send({message :'Updated Successfully' } )
        }

    }  )
} )


router.get('/getalluser' , (req,res)=>{
    User.find( {} , (err,docs)=>{
        if(err)
        {
            return  res.status(400).json({message:`Something Went Wrong  `})
        }
        else{
            res.send(docs)
        }
    } )
} )


router.post('/deleteuser' , (req,res)=>{
    User.findByIdAndRemove(req.body.userid , (err)=>{
        if(err)
        {
            return  res.status(400).json({message:`Something Went Wrong  `})
        }
        else{
            res.send({message :'Deleted Successfully' } )
        }
    } )
} )






// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
// //   service: 'gmail',
// host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'awanishsampleprojects@gmail.com',
//     pass: 'grjmaxulvkdyfdvr'
//   }
// });




router.post('/forgetpassword' , (req,res)=>{

    const {contactnumber} = req.body

    // getidbymail(req.body.email)

    var idvariable 
    var strires

    User.find({contactnumber:req.body.contactnumber} , (err,docs)=>{
        if(err)
        {
           
            return  res.status(400).json({message:`Something Went Wrong  `})

        }
        else
        {
            
            
            // console.log('The Data is' , docs )

            

            const localsave = {
                name : docs[0].name ,
                _id: docs[0]._id ,
                
                contactnumber:docs[0].contactnumber ,
                lname:docs[0].lname
            }

// console.log('The Local Save is' , localsave )

          

            res.send(localsave)

           
            
        }
    } )

 



} )



router.post('/resetpassword' , (req,res)=>{
    const {userid , password} = req.body
    
    var hashedpass = universalhash+req.body.password+backendhash

    User.findByIdAndUpdate({_id : userid} , {
   
        password :hashedpass
    } , (err)=>{

        if(err)
        {
            return  res.status(400).json({message:`Couldn't update user  `})

        }
        else{
            res.send({message :'Updated Successfully' } )
        }

    }  )
} )



router.post('/getuserbyid' , (req,res)=>{


    
    User.find( {_id : req.body.userid} , (err, docs)=>{
        if(!err)
        {
           
             res.send(docs[0])
        }
        else
        {
            return res.status(400).json({message:`There's an error ${err} `})
        }

    } )
} )



module.exports = router