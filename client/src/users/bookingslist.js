
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetBookingsByUserIdAction } from '../actions/bookingaction';
import { GetBookingsByUserIdReducer } from '../reducers/bookingreducer';
import { GetAllDoctorAction } from '../actions/doctoraction';
import { GetAllDoctorReducer } from '../reducers/doctorreducer';
import { useEffect } from 'react';
import Loader from '../component/loader'

const BookingList = ({ userid }) => {


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')




    const user = localStorage.getItem('currentuser')

    const dispatch = useDispatch()

    const bookingstate = useSelector(state => state.GetBookingsByUserIdReducer)
    const { orders, error, loading } = bookingstate




    useEffect(() => {

        dispatch(GetBookingsByUserIdAction())


    }, [dispatch])



    return (
        <div>




            {
                bengali ? (<p>

                    <div className="error"  >


                        <br></br>

                        <h1 style={{ textAlign: 'center' }} >বুকিং তালিকা</h1>

                        <table className='table' id="customers"  >



                            <tr>
                                <th scope="col"  >
                                    বুকিং আইডি</th>
                                <th scope="col" >
                                    ডাক্তারের নাম</th>
                                <th scope="col" >বিশেষত্ব</th>


                                <th scope="col" >
                                    যোগাযোগের ঠিকানা</th>
                                <th scope="col"  >
                                    অ্যাপয়েন্টমেন্ট বুকড এর জন্য</th>
                                <th scope="col" >স্লট</th>
                                <th scope="col" >আরো দেখুন
                                </th>


                            </tr>


                            {loading && (<Loader />)}
                            {orders && (
                                orders.map(ord => {

                                    if (1) {
                                        return <tr>

                                            <td data-label="বুকিং আইডি" >{ord._id}</td>
                                            <td data-label="ডাক্তারের নাম" > {ord.doctorname}  </td>

                                            <td data-label="বিশেষত্ব" > {ord.speciality}  </td>

                                            <td data-label="যোগাযোগের ঠিকানা" >{ord.contactnumber}
                                                <br /> {ord.email}
                                            </td>
                                            {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                            <td data-label="অ্যাপয়েন্টমেন্ট বুকড এর জন্য" > {ord.date} </td>
                                            <td data-label="স্লট" >{ord.slot}</td>
                                            <a href={`/bookings/${ord._id}`} >

                                                <td data-label="আরো দেখুন
" >
                                                    <i class="fas fa-file-invoice" style={{ color: 'black', border: 'none' }} ></i>
                                                </td>
                                            </a>

                                        </tr>
                                    }





                                })
                            )}







                        </table>

                    </div>


                </p>) : (<p>
                    {
                        english ? (
                            <p>


                                <div className="error"  >


                                    <br></br>

                                    <h1 style={{ textAlign: 'center' }} >Booking List</h1>

                                    <table className='table' id="customers"  >



                                        <tr>
                                            <th scope="col"  >Booking Id</th>
                                            <th scope="col" >Doctor's Name</th>
                                            <th scope="col" >Speicality</th>


                                            <th scope="col" >Contact Details</th>
                                            <th scope="col"  >Appointment Booked For</th>
                                            <th scope="col" >Slot</th>
                                            <th scope="col">See More</th>


                                        </tr>


                                        {loading && (<Loader />)}
                                        {orders && (
                                            orders.map(ord => {

                                                if (1) {
                                                    return <tr>

                                                        <td data-label="Booking Id" >{ord._id}</td>
                                                        <td data-label="Doctor's Name" > {ord.doctorname}  </td>

                                                        <td data-label="speciality" > {ord.speciality}  </td>

                                                        <td data-label="Contact Details" >{ord.contactnumber}
                                                            <br /> {ord.email}
                                                        </td>
                                                        {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                                        <td data-label="Appointment Booked For" > {ord.date} </td>
                                                        <td data-label="Slot" >{ord.slot}</td>
                                                        <a href={`/bookings/${ord._id}`} >
                                                            <td data-label="See More" >
                                                                <i class="fas fa-file-invoice" style={{ color: 'black', border: 'none' }} ></i>
                                                            </td>
                                                        </a>
                                                    </tr>
                                                }





                                            })
                                        )}







                                    </table>

                                </div>


                            </p>
                        ) : (
                            <p>


                                <div className="error"  >


                                    <br></br>

                                    <h1 style={{ textAlign: 'center' }} >Booking List</h1>

                                    <table className='table' id="customers"  >



                                        <tr>
                                            <th scope="col"  >Booking Id</th>
                                            <th scope="col" >Doctor's Name</th>
                                            <th scope="col" >Speicality</th>


                                            <th scope="col" >Contact Details</th>
                                            <th scope="col"  >Appointment Booked For</th>
                                            <th scope="col" >Slot</th>
                                            <th scope="col">See More</th>


                                        </tr>


                                        {loading && (<Loader />)}
                                        {orders && (
                                            orders.map(ord => {

                                                if (1) {
                                                    return <tr>

                                                        <td data-label="Booking Id" >{ord._id}</td>
                                                        <td data-label="Doctor's Name" > {ord.doctorname}  </td>

                                                        <td data-label="speciality" > {ord.speciality}  </td>

                                                        <td data-label="Contact Details" >{ord.contactnumber}
                                                            <br /> {ord.email}
                                                        </td>
                                                        {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                                        <td data-label="Appointment Booked For" > {ord.date} </td>
                                                        <td data-label="Slot" >{ord.slot}</td>
                                                        <a href={`/bookings/${ord._id}`} >
                                                            <td data-label="See More" >
                                                                <i class="fas fa-file-invoice" style={{ color: 'black', border: 'none' }} ></i>
                                                            </td>
                                                        </a>
                                                    </tr>
                                                }





                                            })
                                        )}







                                    </table>

                                </div>


                            </p>
                        )
                    }
                </p>)
            }



        </div>
    )
}

export default BookingList