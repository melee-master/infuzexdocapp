import React from 'react'
import {useEffect , useState} from 'react';

import {useDispatch , useSelector} from 'react-redux';
import Loader from '../component/loader';

import { GetAllDoctorReqAction } from '../actions/doctoraction';
import { GetAllReqDoctorReducer } from '../reducers/doctorreducer';
import { ApproveDr } from '../actions/doctoraction';
import { Link } from 'react-router-dom';


const  DrReq=()=>{

    const [val,setval]=useState('')

   var value=true

    const getallusers = useSelector(state=> state.GetAllReqDoctorReducer )

    const {doctors , loading , error} = getallusers

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllDoctorReqAction())
    } , [] )



    return(
        <div>
This is Request Screen

<table className='table' id="customers"  >
               <thead>
                   <tr>
                   <th scope="col" >User Id</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">Contact Number</th>
                   <th scope="col">Fees</th>
                   <th scope="col">Specilization</th>
                   <th scope="col">Address</th>
                   <th scope="col">Approved Status</th>
                   <th scope="col">Show More</th>
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {doctors && ( doctors.map(use=>{
                       return <tr>
                           
                           <td data-label="User Id" > {use._id} </td>
                           <td data-label="Name"> {use.name} </td>
                           <td data-label="Email"> {use.email} </td>
                           <td data-label="Contact Number"> { use.contactnumber } </td>
                           <td data-label="Fees"> { use.fees } </td>
                           <td data-label="Specilization"> { use.field } </td>
                           <td data-label="Address"> { use.address } </td>
                           <td data-label="Approved Status"> {use.status ? <p>Not Approved</p> : <p> Approved</p> } </td>
                           <Link to={`/admin/doctorapprove/${use._id}`} >
                           <td data-label="Show More" > <i class="fa fa-list" aria-hidden="true"></i> </td>
                           </Link>
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>



        </div>
    )

}

export default DrReq