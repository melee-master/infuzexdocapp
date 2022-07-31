import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'
import { GetCompounderById } from '../actions/compounderaction'
import { GetCompounderByIdReducer } from '../reducers/compounderreducer'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';

import Loader from '../component/loader'
import { DeleteCompounderAction } from '../actions/compounderaction'


const AdminGetCompounder=()=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    
console.log(window.location.pathname.substr(17))

const docid=window.location.pathname.substr(17)


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
                  
                   <th scope="col" style={{width:"20%"}}>নাম</th>
                   <th scope="col" style={{width:"20%"}}>ইমেইল</th>
                   <th scope="col" style={{width:"20%"}}>যোগাযোগের নম্বর</th>
                   <th scope="col" style={{width:"20%"}}>পাসওয়ার্ড</th>
                   <th scope="col" style={{width:"20%"}}>মুছে ফেলা</th>
                   
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {compounders && ( compounders.map(use=>{
                       return <tr>

                           
                           <td data-label="নাম"  id='compounder-table'> {use.name} </td>
                           <td data-label="ইমেইল" id='compounder-table'> {use.email} </td>
                           <td data-label="যোগাযোগের নম্বর" id='compounder-table'> { use.contactnumber } </td>
                           <td data-label="পাসওয়ার্ড" id='compounder-table'> { use.password } </td>
                             <td data-label="মুছে ফেলা" id='compounder-table'> 
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
                  
                   <th scope="col" style={{width:"20%"}} >Name</th>
                   <th scope="col" style={{width:"20%"}}  >Login Id</th>
                   <th scope="col" style={{width:"20%"}} >Contact Number</th>
                   <th scope="col" style={{width:"20%"}} >Password</th>
                   <th scope="col" style={{width:"20%"}} >View More</th>
                   <th scope="col" style={{width:"20%"}} >Delete</th>
                  

                   
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {compounders && ( compounders.map(use=>{
                       return <tr>

                       
                           <td data-label="Name" id='compounder-table' > {use.name} </td>
                           <td data-label="Login Id" id='compounder-table' > {use.email} </td>
                           <td data-label="Contact Number" id='compounder-table' > { use.contactnumber } </td>
                           <td data-label="Password" id='compounder-table' >{use.password}</td>
                           <td data-label="See More" >
                           < a href={`/compounderhistory/${use._id}/${docid}`} style={{textDecoration:'none'}} >
                                See More

                          </a>
                          </td>
                           
                             <td data-label="Delete" id='compounder-table' > <i id="del" className="far fa-trash-alt" onClick={ 
                                
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
               {/* <thead>
                   <tr>
                  
                   <th scope="col" >Name</th>
                   <th scope="col" >Login Id</th>
                   <th scope="col" >Contact Number</th>
                   <th scope="col" >Password</th>
                   <th scope="col" >Delete</th>
                  

                   
                   
                  
                   
                       </tr>
                
               </thead> */}

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {compounders && ( compounders.map(use=>{
                       return <tr>

                          
                           <td data-label="Name" id='compounder-table'> {use.name} </td>
                           <td data-label="Login Id" id='compounder-table'> {use.email} </td>
                           <td data-label="Contact Number" id='compounder-table'> { use.contactnumber } </td>
                           <td data-label="Password" id='compounder-table'>{use.password}</td>
                             <td data-label="Delete" id='compounder-table'> <i id="del" className="far fa-trash-alt" onClick={ 
                                
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

export default AdminGetCompounder;