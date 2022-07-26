import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'
import Rating from 'react-rating'
import { UpdateBookingsAction } from '../actions/bookingaction'
import { UpdateBookingReducer } from '../reducers/bookingreducer'
import { GetPatientsByOnlyIdAction, GetBookingsByBookingIdAction } from '../actions/bookingaction'
import { GetBookingsByBookingIdReducer } from '../reducers/bookingreducer'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { DeleteBookingAction } from '../actions/bookingaction'

import Loader from "../component/loader";
import { book } from 'fontawesome'

const Invoice = () => {

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')


    const [checkif, setcheckif] = useState('false')


    const location = useLocation()

    var testpath = location.pathname



    const dispatch = useDispatch()

    const orderidstate = useSelector(state => state.GetBookingsByBookingIdReducer)
    const { loading, bookings, error } = orderidstate

    // const currentuser = JSON.parse(localStorage.getItem('currentuser'))




    const updatestate = useSelector(state => state.UpdateBookingReducer)

    const { success, update_error, uploading } = updatestate


    var bookid = location.pathname.substr(10, testpath.length)



    useEffect(() => {


        if (bookings) {
            if (bookings._id == bookid) {

                setcheckif(bookings.checkif)


            }
            else {
                dispatch(GetBookingsByBookingIdAction({ bookid }))

            }
        }

        else {
            dispatch(GetBookingsByBookingIdAction({ bookid }))
        }



    }, [dispatch, bookings])




    const editdoctor = (e) => {
        e.preventDefault()
        const updatedproduct = {

            checkif: checkif

        }

        dispatch(UpdateBookingsAction(bookid, updatedproduct))


    }





    return (
        <div>
            {
                bengali ? (<p>

                    {loading && <Loader />}


                    {
                        bookings && (
                            <div>
                                <div>

                                    <p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



                                        <h3> {bookings.name}'s নিয়োগ </h3>
                                    </p>


                                    <div id='bookingbox' >

                                        <h4 id='heading' >বুকিং বিবরণ
                                        </h4>


                                        <div id='containerbox' style={{ textAlign: 'justify' }} >
                                            <h6 id='heading2' style={{ textAlign: 'center' }}  >  বুকিং বিবরণ
                                                :  {bookings.name} {bookings.lname}  </h6>
                                            <h6 id='heading2' style={{ textAlign: 'center', color: '#dcdcdc' }}  >  {bookings.status} &nbsp;&nbsp;&nbsp; </h6>


                                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > তারিখ:
                                            </span> {bookings.date} </p>
                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > সময় : </span>{bookings.slot}</p>



                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > যোগাযোগের ঠিকানা
                                                : </span> {bookings.contactnumber} </p>



                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > ডাক্তার : </span>: {bookings.doctorname} </p>
                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > মাঠ: </span> {bookings.speciality} </p>


                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' >      বুক করা হয়েছে: </span> {bookings.createdAt.substr(0, 10)} </p>




                                        </div>






                                    </div>

                                    <br />


                                    {
                                        bookings.checkif === 'false' ? (
                                            <p

                                                id='Cancel-Booking'

                                                onClick={() => {
                                                    alert('আপনি কি বুকিং বাতিল করতে চান?')
                                                    var bookingid = bookings._id

                                                    dispatch(DeleteBookingAction({ bookingid }))
                                                }}

                                            >
                                                <i class="fa fa-times" aria-hidden="true"></i> &nbsp;
                                                বুকিং বাতিল করুন

                                            </p>
                                        ) : (
                                            <p>
                                            </p>
                                        )
                                    }




                                </div>

                            </div>
                        )
                    }






                </p>) : (<p>
                    {loading && <Loader />}


                    {
                        bookings && (
                            <div>
                                <div>

                                    <p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



                                        <h3> {bookings.name}'s Appointment </h3>
                                    </p>


                                    <div id='bookingbox' >

                                        <h4 id='heading' >Booking Details</h4>


                                        <div id='containerbox' style={{ textAlign: 'justify' }} >
                                            <h6 id='heading2' style={{ textAlign: 'center' }}  >  Patient's Name :  {bookings.name} {bookings.lname}  </h6>
                                            <h6 id='heading2' style={{ textAlign: 'center', color: '#dcdcdc' }}  >  {bookings.status} &nbsp;&nbsp;&nbsp; </h6>


                                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Date : </span> {bookings.date} </p>
                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Time : </span>{bookings.slot}</p>



                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Contact Details : </span> {bookings.contactnumber} </p>



                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Doctor : </span>: {bookings.doctorname} </p>
                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Field: </span> {bookings.speciality} </p>

                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Booked On : </span> {bookings.createdAt.substr(0, 10)} </p>




                                        </div>







                                    </div>

                                    <br />



                                    {
                                        bookings.checkif === 'false' ? (
                                            <p

                                                id='Cancel-Booking'

                                                onClick={() => {
                                                    alert('Do You want to Cancel Booking?')
                                                    var bookingid = bookings._id
                                                    var bookingname = bookings.name
                                                    var bookingdate = bookings.date 
                                                    var bookingslot = bookings.slot 
                                                    var contactdetails = bookings.contactnumber
                                                    var doctorname = bookings.doctorname

                                                    dispatch(DeleteBookingAction({ bookingid , bookingname ,bookingdate , bookingslot , contactdetails ,doctorname  }))
                                                }}

                                            >
                                                <i class="fa fa-times" aria-hidden="true"></i> &nbsp;
                                                Cancel Booking
                                            </p>
                                        ) : (
                                            <p>
                                            </p>
                                        )
                                    }





                                </div>

                            </div>
                        )
                    }






                </p>)
            }


        </div>
    )


}

export default Invoice