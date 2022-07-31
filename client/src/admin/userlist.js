import React from 'react'
import {useEffect , useState} from 'react';

import {useDispatch , useSelector} from 'react-redux';

import { GetAllUserAction } from '../actions/useraction';
import Loader from '../component/loader';
import { GetAllUserReducer } from '../reducers/userreducer';
import './admin.css'
import { table } from 'fontawesome';

const AllUserList=()=>{

    const getallusers = useSelector(state=> state.GetAllUserReducer )

    const {users , loading , error} = getallusers

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllUserAction())
    } , [] )



    return(
        <div>



<table className='table' id="customers"  >
               <thead>
                   <tr>
                   <th scope="col" style={{width:'20%'}} >User Id</th>
                   <th scope="col" style={{width:'20%'}} >Name</th>
                   
                   <th scope="col" style={{width:'20%'}} >Contact Number</th>
                   <th scope="col" style={{width:'20%'}} >Created At</th>
                   <th scope="col" style={{width:'20%'}} >View More</th>
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {users && ( users.map(use=>{
                       return <tr>

                           
                           <td data-label="User Id" > {use._id} </td>
                           <td data-label="Name" > {use.name} </td>
                         
                           <td  data-label="Contact Number" > { use.contactnumber } </td>
                           <td data-label="Created At" >{use.createdAt.substr(0,10)}</td>
                           < a href={`/adminuserbookings/${use._id}`} style={{textDecoration:'none'}} >
                               <td data-label="View More" ><i class="fa fa-eye" aria-hidden="true"></i>
</td>
                          </a>


                           </tr>
                   }) ) }
               </tbody>
           </table>



        </div>
    )

}

export default AllUserList