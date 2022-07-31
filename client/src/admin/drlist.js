import React from 'react'
import {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import Loader from '../component/loader';

import { GetAllDoctorAction } from '../actions/doctoraction';
import { GetAllDoctorReducer } from '../reducers/doctorreducer';
import './admin.css'

const AllDrList=()=>{

    const getallusers = useSelector(state=> state.GetAllDoctorReducer )

    const {doctors , loading , error} = getallusers

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllDoctorAction())
    } , [] )



    return(
        <div>
<table className='table' id="customers"  >
               <thead>
                   <tr>
                  
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">Contact Number</th>
                   <th scope="col">Fees</th>
                   <th scope="col">Specilization</th>
                   <th scope="col">Address</th>
                   <th scope="col">Approved Status</th>
                   
                   <th scope="col">Edit</th>
                   <th scope="col">Compounders</th>
                   <th scope="col">See More</th>
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {doctors && ( doctors.map(use=>{
                       return <tr>


                           <td data-label="Name"> {use.name} </td>
                           <td data-label="Email"> {use.email} </td>
                           <td data-label="Contact Number"> { use.contactnumber } </td>
                           <td data-label="Fees"> { use.fees } </td>
                           <td data-label="Specilization"> { use.field } </td>
                           <td data-label="Address"> { use.address } </td>
                           <td data-label="Approved Status"> {use.status==='false' ? <p>Not Approved</p> : <p> Approved</p> } </td>
                           {/* <td data-label="Created At" >{use.createdAt.substr(0,10)}</td> */}
                           <td data-label="Edit" > <Link to={`/admin/dredit/${use._id}`} >
                           <td  > <i class="fas fa-edit"></i> </td>
                           </Link></td>

                           
                           <td data-label="Compounders" >
                           < a href={`/admincompounder/${use._id}`} style={{textDecoration:'none'}} >
                                Compounders

                          </a>
                          </td>
                           


                       

                          <td data-label="See More" >
                           < a href={`/admindoctorbookings/${use._id}`} style={{textDecoration:'none'}} >
                                See More

                          </a>
                          </td>
                        
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>
        </div>
    )

}

export default AllDrList