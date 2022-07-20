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

    const today = new Date()

    var checkdate = today.toString().substring(0, 15)


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
                
                                          <th scope="col" >Booking Id</th>
                                           <th scope="col" >Patient's Name</th>
                                          
                
                                           <th scope="col" >Contact Details</th>
                                           <th scope="col" >Appointment Booked For</th>
                                           <th scope="col" >Slot</th>
                                           <th scope="col" >Booked By</th>
                                         
                                           {/* <th> Status </th>
                                           <th> Appointment Booked On </th> */}
                                           
                                           
                                     </tr>
                                      
                                    
                                          {/* {loading && ( <Loading/> ) }   */}
                                           {orders && (
                                              orders.map( ord =>{

                                                if (ord.date === checkdate)
                                                {
                                                    return <tr >
                
                                                    <td data-label="Booking Id" >{ord._id}</td>
                                                     <td data-label="Patient's Name" > {ord.name} {ord.lname} </td>
                                                  
                                                    
                                                  
                                                     <td data-label="Contact Details" >{ord.contactnumber}
                                                     <br/> {ord.email}
                                                     </td>
                                                     {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                                     <td data-label="Appointment Booked For" > {ord.date} </td>
                                                     <td data-label="Slot">{ord.slot}</td>
                                                     <td data-label="Booked By" >{ord.status}</td>
                                                     
                                                     {/* <td>Dr. {doc.name}</td> */}
                                                
               
               
                                                    
                                               
               
                                                 </tr>
                                                }

                                               
                                              } )
                                          )  } 
                                          
                                              
                                     
                
                                   
                
                               </table>

</div>                

        </div>
    )
}

export default CheckSchedule