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

import Loader from "../component/loader";
import { book } from 'fontawesome'

const IndividualBooking = () => {


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


                            <span style={{ 
    fontSize:'large' ,
    fontWeight:'bolder'
 }} > Status :  </span>

                            <form onSubmit={editdoctor} >

                                <select value={checkif} onChange={(e) => { setcheckif(e.target.value) }}

                                    id='show-hide'

                                    style={{
                                        marginLeft: 'auto',
                                        marginRight: 'auto'
                                    }} 

                                >

                                    <option value='true' >Checked</option>
                                    <option value='false' >Denied </option>

                                </select>

                                <br /><br />




                                <button type="submit" className='docdes-box1' style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }} id='post-button' > UPDATE </button>




                            </form>

                        </div>

                    </div>
                )
            }




        </div>
    )


}

export default IndividualBooking