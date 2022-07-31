import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetBookingsByUserAdminIdAction } from '../actions/bookingaction';
import { GetBookingsByUserIdReducer } from '../reducers/bookingreducer';
import { GetAllDoctorAction } from '../actions/doctoraction';
import { GetAllDoctorReducer } from '../reducers/doctorreducer';

import Calendar from 'react-calendar';
import Loader from '../component/loader'
import TableStyle from '../users/tablestyle';
import { useParams } from 'react-router';

const UserAdminBookingList = () => {


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    const [bookingdate, onChange] = useState(new Date());
    
const userid = window.location.pathname.substr(19)


    

    const dispatch = useDispatch()

    const bookingstate = useSelector(state => state.GetBookingsByUserIdReducer)
    const { orders, error, loading } = bookingstate





var checkday = bookingdate?.toString().substr(0,15)

console.log('Booking date 2' , checkday  )


    var today = new Date();
  

    var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();



var currentday = today.toString().substr(0,15)
// var day2=bookingdate.toString().substr(0,3)
// var dd2 = today.getDate() + 7

// var maxdate = yyyy + '-' + mm + '-' + dd2;










    if(orders)
    {
        console.log(orders.map(i=>{
            if(i.date===checkday)
            {
                console.log('Available Bookings',i.name , i.slot )
            }
         
        }))
  
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

        dispatch(GetBookingsByUserAdminIdAction({userid}))


    }, [dispatch])



    return (
        <div>




            {
                bengali ? (<p>

                    <div className="error"  >
                    <Calendar onChange={onChange} value={bookingdate}

dateFormat = 'dd/MM/yyyy'

// minDate =  { new Date(yyyy,mm-1,dd)  }

// maxDate = { new Date( yyyy , mm-1 , dd2 ) }
maxDetail = 'month'
minDetail = 'month'


/>

                        <br></br>

                        <h1 style={{ textAlign: 'center' }} >বুকিং তালিকা</h1>
                        {loading && (<Loader />)}
                                    {
                                        orders&&(orders.map(i=>{
                                           
                                            if(i.checkif!=='Cancelled')
                                            {
                                                return  <TableStyle i={i} />
                                            }
                                            
                                        }))
                                    }

                                    <h2>Cancelled Booking</h2>

                                    {
                                        orders&&(orders.map(i=>{
                                           
                                            if(i.checkif==='Cancelled')
                                            {
                                                return  <TableStyle i={i} />
                                            }
                                            
                                        }))
                                    }



                    </div>


                </p>) : (<p>
                    {
                        english ? (
                            <p>


                                <div className="error"  >


                                    <br></br>

                                    <h1 style={{ textAlign: 'center' }} >Booking List</h1>
                                  
                                  
                                    <Calendar onChange={onChange} value={bookingdate}

dateFormat = 'dd/MM/yyyy'

// minDate =  { new Date(yyyy,mm-1,dd)  }

// maxDate = { new Date( yyyy , mm-1 , dd2 ) }
maxDetail = 'month'
minDetail = 'month'


/>

<h2>Booked Bookings</h2>

                                    {loading && (<Loader />)}
                                    {
                                        orders&&(orders.map(i=>{ 
                                            if(i.checkif!=='Cancelled' )
                                            {
                                                if( i.date===checkday )
                                              {  return  <TableStyle i={i} />}
                                            }
                                          
                                        }))
                                    }

                                    <hr/>


<h2>Cancelled Bookings</h2>

{
    orders&&(orders.map(i=>{
       
        if(i.checkif==='Cancelled')
        {
            if( i.date===checkday )
            return  <TableStyle i={i} />
        }
        
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

<h2>Cancelled Booking</h2>

{
    orders&&(orders.map(i=>{
       
        if(i.checkif==='Cancelled')
        {
            return  <TableStyle i={i} />
        }
        
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

export default UserAdminBookingList