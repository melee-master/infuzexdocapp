const mongoose = require('mongoose')


const reviewschema = mongoose.Schema({

    userid: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        require: true
    },
    comment: {
        type: String
    }


}, {
    timestamps: true
})

const timingscehma = mongoose.Schema({
    checked: [{
        type: String,
        require
    }]
})


const DoctorSchema = mongoose.Schema({

    name: {
        type: String,
        require,

    },
    lname: {
        type: String,
        require
    },

    email: {
        type: String,
        trim: true,

        require
    },
    password: {
        type: String,
        require
    },
    contactnumber: {
        type: Number,
        require
    },
    fees: {
        type: Number,
        require
    }
    ,
    college: {
        type: String,
        require
    },
    experience: {
        type: Number,
        require
    },
    field: {
        type: String,
        require

    },
    address: {
        type: String,
        require
    },
    image: {
        type: String
    },
    description: {
        type: String,

    },
    status: {
        type: String,

    },

 


    reviews: [reviewschema],

    patientsperhr: {
        type: Number,
        default: 0,

    },



    mon: [{
        type: String,
        require
    }],
    tue: [{
        type: String,
        require
    }],

    wed: [{
        type: String,
        require
    }],


    thu: [{
        type: String,
        require
    }],


    fri: [{
        type: String,
        require
    }],

    sat: [{
        type: String,
        require
    }],

    sun: [{
        type: String,
        require
    }],


    search_tags:{
        type:String  ,
        require : true 
    }



}, {
    timestamps: true
})

const Doctor = mongoose.model('doctor', DoctorSchema)

module.exports = Doctor