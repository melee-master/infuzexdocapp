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

    // start1: {
    //     type: Number,
    //     require
    // },
    // end1: {
    //     type: Number,
    //     require
    // },
    // start2: {
    //     type: Number,
    //     require
    // },
    // end2: {
    //     type: Number,
    //     require
    // },
    // val1: {
    //     type: String,
    //     require
    // },
    // val2: {
    //     type: String,
    //     require
    // },
    // val3: {
    //     type: String,
    //     require
    // },
    // val4: {
    //     type: String,
    //     require
    // },
    // time1: {
    //     type: Date,

    // },


    reviews: [reviewschema],

    patientsperhr: {
        type: Number,
        default: 0,

    },

    // timecheck : [timingscehma]

    // checked: [{
    //     type: String,
    //     require
    // }],

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





}, {
    timestamps: true
})

const Doctor = mongoose.model('doctor', DoctorSchema)

module.exports = Doctor