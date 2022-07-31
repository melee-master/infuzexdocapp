import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { AdminGetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";
import DoctorTableStyle from '../doctors/drnewtable';
import Calendar from 'react-calendar';
import Loader from '../component/loader'



const AdminCompounderHistory = () => {

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')


    const [bookingdate, onChange] = useState(new Date());


    console.log('This is doc id' , window.location.pathname.substr(44))
 const testid= window.location.pathname.substr(19,24)
    
    const userid =  window.location.pathname.substr(44)
    console.log('user id' , userid )

   
    
var checkday = bookingdate?.toString().substr(0,15)




    var today = new Date();
  

    var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();

var compid = window.location.pathname.substr(19,24)



var currentday = today.toString().substr(0,15)

    const dispatch = useDispatch()

    const [stat, setstat] = useState('')

    const patientstate = useSelector(state => state.GetPatientsByUserIdReducer)

    const { orders, error, loading } = patientstate



    useEffect(() => {

        if (localStorage.getItem('admin')) {
            dispatch(AdminGetPatientsByUserIdAction({ userid }))
        }
        else {
            window.location.href = '/adminlogin'
        }



    }, [dispatch])


    var totalbookings = 0
    var overallbookings = 0
    var cancelledbookings = 0
   



    if (orders) {

   


orders.map(i=>{
    if(i.date===checkday)
    {
        overallbookings++
    }
   
})

orders.map(i=>{
    if(i.userid===testid)
    if(i.date===checkday)
    {
        totalbookings++
    }
    
})




        orders.sort(
            function (a, b) {
                var v1 = a.slot.substr(5)
                var bookingtime = parseInt(`${a.slot}`)
                // console.log('Hr is' , v1 , 'Time is ' , bookingtime )  

                if (v1 === 'AM') {
                    var time2 = bookingtime
                    return a.time2 > b.time2 ? 1 : -1;
                }
                else if (v1 === 'PM') {
                    var time2 = bookingtime + 12
                    return a.time2 > b.time2 ? 1 : -1;

                }


            });



    }




    if (orders) {

        orders.sort(
            function (a, b) {

                var mydate = new Date(a.date)



                return new Date(b.date) - new Date(a.date);



            });



    }


   








    return (
        <div>

            {
                bengali ? (<p>








                    <div className="error"  >


                        <br></br>

                        <h1 style={{ textAlign: 'center' }} >সমস্ত রোগীর তালিকা
                        </h1>

                        {
                            orders && (orders.map((i, k) => {
                                if (i.checkif !== 'Cancelled') {
                                    return <DoctorTableStyle i={i} />
                                }

                            }))
                        }

                        <hr />
                        <h3>Cancelled Bookings</h3>

                        {
                            orders && (orders.map((i, k) => {
                                if (i.checkif === 'Cancelled') {
                                    return <DoctorTableStyle i={i} />
                                }

                            }))
                        }



                    </div>






                </p>) : (<p>
                    {
                        english ? (
                            <p>






                                <div className="error"  >

                                <Calendar onChange={onChange} value={bookingdate}

dateFormat = 'dd/MM/yyyy'

// minDate =  { new Date(yyyy,mm-1,dd)  }

// maxDate = { new Date( yyyy , mm-1 , dd2 ) }
maxDetail = 'month'
minDetail = 'month'


/>


                                    <br></br>
                                    <h3> Stats on  {checkday} :</h3>
<h5> Total Bookings = {overallbookings}  </h5>
<h5>  Bookings By Compounder = {totalbookings}   </h5>
<h5> Total Money to be paid = { overallbookings*4 - totalbookings*2  } </h5>



                                    <h1 style={{ textAlign: 'center' }} >All Patient's List</h1>
                                    {
                                        orders && (orders.map((i, k) => {
                                            if (i.checkif !== 'Cancelled') {
                                                if( i.date===checkday )
                                                return <DoctorTableStyle i={i} />
                                            }

                                        }))
                                    }

                                    <hr />
                                    <h3>Cancelled Bookings</h3>

                                    {
                                        orders && (orders.map((i, k) => {
                                            if (i.checkif === 'Cancelled') {
                                                if( i.date===checkday )
                                                return <DoctorTableStyle i={i} />
                                            }

                                        }))
                                    }



                                </div>






                            </p>
                        ) : (
                            <p>






                                <div className="error"  >


                                    <br></br>

                                    <h1 style={{ textAlign: 'center' }} >All Patient's List</h1>

                                    <table className='table' id="customers"  >



                                        <tr>
                                            <th scope="col"  >Booking Id</th>
                                            <th scope="col" > Patient's Name </th>


                                            <th scope="col" > Contact Details  </th>
                                            <th scope="col"  > Appointment Booked For  </th>
                                            <th scope="col" >Slot</th>
                                            <th scope="col" >Booked By</th>
                                            <th scope="col" >Status</th>
                                        </tr>


                                        {/* {loading && ( <Loading/> ) }   */}
                                        {orders && (
                                            orders.map(ord => {
                                                return <tr>
                                                    <td data-label="Booking Id" >{ord._id}</td>
                                                    <td data-label="Patient's Name" > {ord.name} {ord.lname} </td>



                                                    <td data-label="Contact Details" >{ord.contactnumber}
                                                        <br /> {ord.email}
                                                    </td>
                                                    {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                                    <td data-label="Appointment Booked For" > {ord.date} </td>
                                                    <td data-label="Slot" >{ord.slot}</td>
                                                    <td data-label="Booked By" >{ord.status}</td>
                                                    <Link to={`/bookings/${ord._id}`} >
                                                        <td data-label="Status" >
                                                            <i class="fa fa-pencil-square-o" aria-hidden="true"  ></i></td>
                                                    </Link>
                                                </tr>

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

export default AdminCompounderHistory