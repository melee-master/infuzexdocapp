const mongoose = require('mongoose')

const trackingschema = mongoose.Schema({
    timeslot : {
        type:String ,
        require ,

      
    } ,

    slotcnt :{
        type: Number, 
        default: 0
    }
})

const BookingSchema = mongoose.Schema({
    // _id:{
    //     type:String,
    //     require
    // } ,

    name:{
        type:String,
        require
    } ,
    lname :{
        type:String,
        require
    } ,

    email:{
        type:String,
        trim:true ,

        require
    } ,


    doctorname :{
        type:String,
        require
    }
  ,
    contactnumber : {
        type:Number ,
        require 
    } ,
 
    userid:{
        type:String,
        require

    } ,

    doctorid:{
        type:String,
        require

    } ,
    status : {
        type:String,
        require
    } ,
    date:{
        type:String ,
        require
    },
   
    slot : {
        type:String ,
        require ,

      
    } ,
    speciality :{
        type:String ,
        require ,
    } ,

    checkif:{
        type:String ,
        require ,
    } ,


    doctorcontact:{
        type:String ,
        require ,
    } ,

    slottrack : [trackingschema]

} , {
    timestamps:true
} )

const Booking = mongoose.model('booking' , BookingSchema )
module.exports = Booking