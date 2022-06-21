import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";
import Loader from '../component/loader';

const CheckSchedule=()=>{

    const dispatch = useDispatch()

     const [day,setday]=useState('Mon')

    const patientstate = useSelector(state=>state.GetPatientsByUserIdReducer)
    
    const {orders , error , loading } = patientstate
    
    
    const doc = localStorage.getItem('doctor')
        useEffect( ()=>{
    
            if(localStorage.getItem('doctor'))
            {
                dispatch(GetPatientsByUserIdAction())
            }
            else{
                window.location.href='/drlogin'
            }
    
    
    
        } ,[dispatch]  )
    
       

        

    return(
        <div>
            <div className="error"  >
            

            <br></br>
            
                           <h1 style={{textAlign:'center'  }} >Patients List As Per Day</h1>

                           <h5>Select Day :</h5>

                           <select onChange={ (e)=>{ setday(e.target.value) } }  
                           
                          

                           style={{
                               marginLeft: 'auto',
                               marginRight: 'auto' ,
                               fontSize:'20px'
                           }} 
                            
                           >
                               <option value='Mon' >Monday</option>
                               <option value='Tue' >Tuesday</option>
                               <option value='Wed' >Wednesday</option>
                               <option value='Thu' >Thursday</option>
                               <option value='Fri' >Friday</option>
                               <option value='Sat' >Saturday</option>
                               <option value='Sun' >Sunday</option>
                               </select>
            
                           <table   className='table' id="customers"  >
                              
                                 
                   
                        <tr>
                            <th scope="col"  >Booking Id</th>
                            <th scope="col" > Patient's Name </th>


                            <th scope="col" > Contact Details  </th>
                            <th scope="col"  > Appointment Booked For  </th>
                            <th scope="col" >Slot</th>
                            <th scope="col" >Booked By</th>
                            <th scope="col" >Status</th>
                        </tr>
                                  
                                
                                      {loading && ( <Loader/> ) }  
                                       {orders && (
                                          orders.map( ord =>{
                                             
                                            console.log( 'The Day is' , ord.date.substr(0,3))
                                            var daynow = ord.date.substr(0,3) 

                                                


                                            if( (ord.date.substr(0,3)===day) && (ord.checkif==='false') )
                                                
                                              
                                            {
                                                return  <tr>
                                              
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
                                            }
                                            
                                            
                                          } )
                                      )  } 
                                      
                                          
                                 
            
                               
            
                           </table>

</div>                
        </div>
    )

}

export default CheckSchedule;