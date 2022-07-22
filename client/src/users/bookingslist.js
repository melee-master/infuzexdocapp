
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetBookingsByUserIdAction } from '../actions/bookingaction';
import { GetBookingsByUserIdReducer } from '../reducers/bookingreducer';
import { GetAllDoctorAction } from '../actions/doctoraction';
import { GetAllDoctorReducer } from '../reducers/doctorreducer';
import { useEffect } from 'react';
import Loader from '../component/loader'
import TableStyle from './tablestyle';

const BookingList = ({ userid }) => {


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')




    const user = localStorage.getItem('currentuser')

    const dispatch = useDispatch()

    const bookingstate = useSelector(state => state.GetBookingsByUserIdReducer)
    const { orders, error, loading } = bookingstate


    if(orders)
    {
  
        orders.sort(
            function(a, b) {    
                var v1 = a.slot.substr(5)
                var bookingtime =parseInt(`${a.slot}`) 
               // console.log('Hr is' , v1 , 'Time is ' , bookingtime )  
                
                if(v1==='AM')
                {
                    var time2 = bookingtime 
                    return a.time2 > b.time2 ? 1 : -1;
                }
                else if(v1==='PM')
                {
                    var time2 = bookingtime+12 
                    return a.time2 > b.time2 ? 1 : -1;

                }
                
           
            });
        
    
       
    }



    if(orders)
    {
  
        orders.sort(
            function(a, b) {    
                 
             var mydate = new Date(a.date)

            

             return new Date(b.date) - new Date(a.date);
                
                
           
            });
        
    
       
    }






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
                        {loading && (<Loader />)}
                                    {
                                        orders&&(orders.map(i=>{
                                          return  <TableStyle i={i} />
                                        }))
                                    }


                        {/* <table className='table' id="customers"  >



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







                        </table> */}

                    </div>


                </p>) : (<p>
                    {
                        english ? (
                            <p>


                                <div className="error"  >


                                    <br></br>

                                    <h1 style={{ textAlign: 'center' }} >Booking List</h1>

                                    {loading && (<Loader />)}
                                    {
                                        orders&&(orders.map(i=>{
                                          return  <TableStyle i={i} />
                                        }))
                                    }



                                </div>


                            </p>
                        ) : (
                            <p>


                                <div className="error"  >


                                    <br></br>

                                    <h1 style={{ textAlign: 'center' }} >Booking List</h1>
                                    {loading && (<Loader />)}
                                    {
                                        orders&&(orders.map(i=>{
                                          return  <TableStyle i={i} />
                                        }))
                                    }

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