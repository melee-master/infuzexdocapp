const express = require('express');
const router = express.Router();

const formController = require("../controllers/formController");

const User = require('../models/usermodel');

var universalhash = '0xff51afd7ed558ccb9fe1a85ec53LdL'
var backendhash = '1a85ec53LdL0xc4ceb9fe1a85ec50x'

router.post('/register',
    formController.handleFileUploads({ //parse uploaded form data
        config: {
            keepExtensions: true,
            multiples: false //upload single file only
        },
        allowedFields: { 'profile': "image" }, //prevent mismatch fields from uploading
        bucketDir: 'profiles' //bucket folder name to upload user image
    }),
    async (req, res) => {
        try {
            var hashedpass = universalhash + req.body.password + backendhash

            const isAlreadyExists = await User.findOne({ contactnumber: req.body.contactnumber });
            if (isAlreadyExists) {
                throw { message: 'Phone Number Already Registered' }
            }

            //create user in db
            const user = await User.create({
                name: req.body.name,
                profile: req.body.filesInfo.map(file => ({ fileurl: file.fileurl, filename: file.filename })),
                lname: req.body.lname,
                email: req.body.email,
                password: hashedpass,
                contactnumber: req.body.contactnumber
            });

            return res.send({ message: 'Registration Successful' })

        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }
);


router.post('/login', (req, res) => {

    const usepass = universalhash + req.body.password + backendhash



    User.find({ contactnumber: req.body.email, password: usepass }, (err, docs) => {

        if (docs.length > 0) {

            const localsave = {
                name: docs[0].name,
                _id: docs[0]._id,
                email: docs[0].email,
                contactnumber: docs[0].contactnumber,
                lname: docs[0].lname
            }

            res.send(localsave)
        }
        else {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }

    })

})


router.post('/update', (req, res) => {
    const { userid, userupdate } = req.body
    User.findByIdAndUpdate({ _id: userid }, {
        name: userupdate.name,
        lname: userupdate.lname,
        email: userupdate.email,
        contactnumber: userupdate.contactnumber
    }, (err) => {

        if (err) {
            return res.status(400).json({ message: `Couldn't update user  ` })

        }
        else {
            res.send({ message: 'Updated Successfully' })
        }

    })
})


router.get('/getalluser', (req, res) => {
    User.find({}, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: `Something Went Wrong  ` })
        }
        else {
            res.send(docs)
        }
    })
})


router.post('/deleteuser', (req, res) => {
    User.findByIdAndRemove(req.body.userid, (err) => {
        if (err) {
            return res.status(400).json({ message: `Something Went Wrong  ` })
        }
        else {
            res.send({ message: 'Deleted Successfully' })
        }
    })
})






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




router.post('/forgetpassword', (req, res) => {

    const { contactnumber } = req.body

    // getidbymail(req.body.email)

    var idvariable
    var strires

    User.find({ contactnumber: req.body.contactnumber }, (err, docs) => {
        if (err) {

            return res.status(400).json({ message: `Something Went Wrong  ` })

        }
        else {


            // console.log('The Data is' , docs )



            const localsave = {
                name: docs[0].name,
                _id: docs[0]._id,

                contactnumber: docs[0].contactnumber,
                lname: docs[0].lname
            }

            // console.log('The Local Save is' , localsave )



            res.send(localsave)



        }
    })





})



router.post('/resetpassword', (req, res) => {
    const { userid, password } = req.body

    var hashedpass = universalhash + req.body.password + backendhash

    User.findByIdAndUpdate({ _id: userid }, {

        password: hashedpass
    }, (err) => {

        if (err) {
            return res.status(400).json({ message: `Couldn't update user  ` })

        }
        else {
            res.send({ message: 'Updated Successfully' })
        }

    })
})



router.post('/getuserbyid', (req, res) => {



    User.find({ _id: req.body.userid }, (err, docs) => {
        if (!err) {

            res.send(docs[0])
        }
        else {
            return res.status(400).json({ message: `There's an error ${err} ` })
        }

    })
})



module.exports = router