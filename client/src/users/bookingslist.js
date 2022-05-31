
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetBookingsByUserIdAction } from '../actions/bookingaction';
import { GetBookingsByUserIdReducer } from '../reducers/bookingreducer';
import { GetAllDoctorAction } from '../actions/doctoraction';
import { GetAllDoctorReducer } from '../reducers/doctorreducer';
import { useEffect } from 'react';
import Loader from '../component/loader'

const BookingList=({userid})=>{

    const user = localStorage.getItem('currentuser')

    const dispatch = useDispatch()

    const bookingstate = useSelector(state=>state.GetBookingsByUserIdReducer)
    const {orders , error , loading } = bookingstate




    useEffect( ()=>{

        dispatch(GetBookingsByUserIdAction())
       

    } , [dispatch] )



    return(
        <div>
           <div className="error"  >
            

            <br></br>
            
                           <h1 style={{textAlign:'center'  }} >Booking List</h1>
                           
                           <table   className='table' id="customers"  >
                              
                                 
                   
                        <tr>
                            <th scope="col"  >Booking Id</th>
                            <th scope="col" >Doctor's Name</th>
                            <th scope="col" >Speicality</th>

                            
                            <th scope="col" >Contact Details</th>
                            <th scope="col"  >Appointment Booked For</th>
                            <th scope="col" >Slot</th>

                           
                        </tr>


                                    {loading && ( <Loader/> ) }  
                                    {orders && (
                                          orders.map( ord =>{

                                               if( userid===ord.userid )
                                               {
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
                                                                                    
                                                    </tr>
                                               }
                                                    


                                            
                                            
                                          } )
                                      )  } 
                                
                                  
                                          
                                 
            
                               
            
                           </table>

</div>                

        </div>
    )
}

export default BookingList