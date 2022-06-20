const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


const User = require('../models/usermodel')

router.post('/register', (req,res)=>{


    User.find({email:req.body.email} , (err,docs)=>{
        if(docs.length>0)
        {
            return res.status(400).send({message:'Email Already Registered'})
        }
        else{
            const user = new User(
                {
                    name : req.body.name ,
                    lname : req.body.lname ,
                    email : req.body.email ,
                    password : req.body.password ,
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

    User.find({email:req.body.email , password:req.body.password} , (err,docs)=>{

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
        email: userupdate.email ,
        password :userupdate.password
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






var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
//   service: 'gmail',
host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'awanishsampleprojects@gmail.com',
    pass: 'grjmaxulvkdyfdvr'
  }
});




router.post('/forgetpassword' , (req,res)=>{

    const {email} = req.body

    // getidbymail(req.body.email)

    var idvariable 
    var strires

    User.find({email:req.body.email} , (err,res)=>{
        if(err)
        {
            console.log('Email Not Registered')
            console.log(`Something Went Wrong with the email id : ${err} `)
            return  res.status(400).json({message:`Something Went Wrong  `})

        }
        else
        {
            strires = JSON.stringify(res)
            
           


            var mailOptions = {
                            from: 'awanishsampleprojects@gmail.com',
                            to: `${req.body.email}`,
                            subject: 'Password Reset',
                            text: `These are your details ${res} .
                           
                            Please note your User ID . i.e the ObjectID , as it is required. 

                            `
                          };
                          
                          transporter.sendMail(mailOptions, function(error, info){
                            if (error) {
                              console.log(error);
                            } else {
                              console.log('Email sent: ' + info.response);
                            }
                          });
            
           
            
        }
    } )

 



} )



router.post('/resetpassword' , (req,res)=>{
    const {userid , password} = req.body
    User.findByIdAndUpdate({_id : userid} , {
   
        password :req.body.password
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





module.exports = router