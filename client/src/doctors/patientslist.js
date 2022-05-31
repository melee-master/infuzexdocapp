import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";

const PatientsList=()=>{

    const dispatch = useDispatch()


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
            
                           <h1 style={{textAlign:'center'  }} >All Patient's List</h1>
            
                           <table   className='table' id="customers"  >
                              
                                 
                   
                        <tr>
                            <th scope="col"  >Booking Id</th>
                            <th scope="col" > Patient's Name </th>


                            <th scope="col" > Contact Details  </th>
                            <th scope="col"  > Appointment Booked For  </th>
                            <th scope="col" >Slot</th>
                            <th scope="col" >Booked By</th>
                        </tr>
                                  
                                
                                      {/* {loading && ( <Loading/> ) }   */}
                                       {orders && (
                                          orders.map( ord =>{
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
                                                </tr>
                                            
                                          } )
                                      )  } 
                                      
                                          
                                 
            
                               
            
                           </table>

</div>                

    </div>
    )
}

export default PatientsList