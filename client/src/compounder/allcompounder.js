import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'
import { GetCompounderById } from '../actions/compounderaction'
import { GetCompounderByIdReducer } from '../reducers/compounderreducer'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import './comp.css'
import Loader from '../component/loader'
import { DeleteCompounderAction } from '../actions/compounderaction'

const GetCompounder=({docid})=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    





    const dispatch = useDispatch()

    const dridstate = useSelector(state=>state.GetCompounderByIdReducer)
    const { loading, compounders ,error} = dridstate

    
const [ans,setans]=useState()
    useEffect(() => {
        dispatch(GetCompounderById( {docid} ))

    }, [])


    // const deletingcompounder=()=>{
    //     alert('Deleting this compounder..')
    //     dispatch(DeleteCompounderAction(use._id))
    // }
  


    return(
        <div>




{
        bengali ? ( <p>





<table className='table' id="customers"  >
               <thead>
                   <tr>
                   <th scope="col" >ব্যবহারকারী আইডি</th>
                   <th scope="col" >নাম</th>
                   <th scope="col" >ইমেইল</th>
                   <th scope="col" >যোগাযোগের নম্বর</th>
                   <th scope="col" >পাসওয়ার্ড</th>
                   <th scope="col" >মুছে ফেলা</th>
                   
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {compounders && ( compounders.map(use=>{
                       return <tr>

                           <td data-label="ব্যবহারকারী আইডি" > {use._id} </td>
                           <td data-label="নাম" > {use.name} </td>
                           <td data-label="ইমেইল" > {use.email} </td>
                           <td data-label="যোগাযোগের নম্বর" > { use.contactnumber } </td>
                           <td data-label="পাসওয়ার্ড" > { use.password } </td>
                             <td data-label="মুছে ফেলা" > 
                             <i id="del" className="far fa-trash-alt" onClick={ 
                                
                                ()=>{ 
                                   alert('Do You want to Delete this Compounder?') 
                                   setans(1)
                                   if(ans==1)
                                   {
                                       dispatch(DeleteCompounderAction(use._id))
                                   }
                                    }

                             // deletingcompounder
                                
                                 }  ></i> 
                          </td>
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>








        </p> ) : ( <p>
          {
            english ? (
              <p>










<table className='table' id="customers"  >
               <thead>
                   <tr>
                   <th scope="col" >User Id</th>
                   <th scope="col" >Name</th>
                   <th scope="col" >Login Id</th>
                   <th scope="col" >Contact Number</th>
                   <th scope="col" >Password</th>
                   <th scope="col" >Delete</th>
                  

                   
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {compounders && ( compounders.map(use=>{
                       return <tr>

                           <td data-label="User Id" > {use._id} </td>
                           <td data-label="Name" > {use.name} </td>
                           <td data-label="Login Id" > {use.email} </td>
                           <td data-label="Contact Number" > { use.contactnumber } </td>
                           <td data-label="Password" >{use.password}</td>
                             <td data-label="Delete" > <i id="del" className="far fa-trash-alt" onClick={ 
                                
                                 ()=>{ 
                                    alert('Do You want to Delete this Compounder?') 
                                    setans(1)
                                    if(ans==1)
                                    {
                                        dispatch(DeleteCompounderAction(use._id))
                                    }
                                     }

                              // deletingcompounder
                                 
                                  }  ></i> 
                          </td>

                        
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>






              </p>
            ) : (
              <p>











<table className='table' id="customers"  >
               <thead>
                   <tr>
                   <th scope="col" >User Id</th>
                   <th scope="col" >Name</th>
                   <th scope="col" >Login Id</th>
                   <th scope="col" >Contact Number</th>
                   <th scope="col" >Password</th>
                   <th scope="col" >Delete</th>
                  

                   
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {compounders && ( compounders.map(use=>{
                       return <tr>

                           <td data-label="User Id" > {use._id} </td>
                           <td data-label="Name" > {use.name} </td>
                           <td data-label="Login Id" > {use.email} </td>
                           <td data-label="Contact Number" > { use.contactnumber } </td>
                           <td data-label="Password" >{use.password}</td>
                             <td data-label="Delete" > <i id="del" className="far fa-trash-alt" onClick={ 
                                
                                 ()=>{ 
                                    alert('Do You want to Delete this Compounder?') 
                                    setans(1)
                                    if(ans==1)
                                    {
                                        dispatch(DeleteCompounderAction(use._id))
                                    }
                                     }

                              // deletingcompounder
                                 
                                  }  ></i> 
                          </td>

                        
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>


              


                </p>
            )
          }
        </p> )
      }





    
    </div>

   





       
    )



}

export default GetCompounder;