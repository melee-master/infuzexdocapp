import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";

import { GetCompounderPatientsByUserIdAction } from '../actions/compounderaction';


const CheckSchedule=({doctorid})=>{

    const dispatch = useDispatch()




const patientstate = useSelector(state=>state.GetPatientsByUserIdReducer)

const {orders , error , loading } = patientstate


const doc = localStorage.getItem('compounder')

    useEffect( ()=>{

        if(localStorage.getItem('compounder'))
        {
            dispatch(GetCompounderPatientsByUserIdAction())
        }
        else{
            window.location.href='/compounder'
        }



    } ,[dispatch]  )




    return(
        <div>
          
            <div className="error"  >
                

                <br></br>
                
                               <h1 style={{textAlign:'center'  }} >Doctor's Schedule</h1>
                
                               <table   className='table' id="customers"  >
                                  
                                       <tr  > 
                
                                          <th> Booking Id </th>
                                           <th> Patient's Name </th>
                                          
                
                                           <th> Contact Details  </th>
                                           <th> Appointment Booked For  </th>
                                           <th>Slot</th>
                                           <th>Booked By</th>
                                         
                                           {/* <th> Status </th>
                                           <th> Appointment Booked On </th> */}
                                           
                                           
                                     </tr>
                                      
                                    
                                          {/* {loading && ( <Loading/> ) }   */}
                                           {orders && (
                                              orders.map( ord =>{
                                                  return <tr >
                
                                                     <td>{ord._id}</td>
                                                      <td> {ord.name} {ord.lname} </td>
                                                   
                                                     
                                                   
                                                      <td>{ord.contactnumber}
                                                      <br/> {ord.email}
                                                      </td>
                                                      {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                                      <td> {ord.date} </td>
                                                      <td>{ord.slot}</td>
                                                      <td>{ord.status}</td>
                                                      
                                                      {/* <td>Dr. {doc.name}</td> */}
                                                 
                
                
                                                     
                                                
                
                                                  </tr>
                                              } )
                                          )  } 
                                          
                                              
                                     
                
                                   
                
                               </table>

</div>                

        </div>
    )
}

export default CheckSchedule