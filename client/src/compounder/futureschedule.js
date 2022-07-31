import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByDoctorIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";
import Loader from '../component/loader';
import DoctorTableStyle from '../doctors/drnewtable'

const FutureScheduleCompounder=({doctorid})=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    

    




    const dispatch = useDispatch()

     const [day,setday]=useState('Mon')

    const patientstate = useSelector(state=>state.GetPatientsByUserIdReducer)
    
    const {orders , error , loading } = patientstate
    
    
    const doc = localStorage.getItem('compouder')
        useEffect( ()=>{
    
            if(localStorage.getItem('compounder'))
            {
                dispatch(GetPatientsByDoctorIdAction({doctorid}))
            }
            else{
                window.location.href='/drlogin'
            }
    
    
    
        } ,[dispatch]  )
    
       

        

    return(
        <div>
    

{
        bengali ? ( <p>










<div className="error"  >
            

            <br></br>
            
                           <h1 style={{textAlign:'center'  }} >প্রতিদিন হিসাবে রোগীদের তালিকা</h1>

                           <h5>দিন নির্বাচন করুন:</h5>

                           <select onChange={ (e)=>{ setday(e.target.value) } }  
                           
                          

                           style={{
                               marginLeft: 'auto',
                               marginRight: 'auto' ,
                               fontSize:'20px'
                           }} 
                            
                           >
                               <option value='Mon' >সোমবার</option>
                               <option value='Tue' >মঙ্গলবার</option>
                               <option value='Wed' >বুধবার</option>
                               <option value='Thu' >বৃহস্পতিবার</option>
                               <option value='Fri' >শুক্রবার</option>
                               <option value='Sat' >শনিবার</option>
                               <option value='Sun' >রবিবার</option>
                               </select>
                               <br/>
                             <br/>
                             {loading && (<Loader />)}
                             {
    orders&&( orders.map((i,k)=>{
        var daynow = i.date.substr(0,3) 

                                                


                                            if( (i.date.substr(0,3)===day) && (i.checkif==='false') )
{
    if(i.checkif!=='Cancelled')
    {
        return <DoctorTableStyle i={i} />
    }

   
}


     
    }) )
}

    

</div>  






        </p> ) : ( <p>
          {
            english ? (
              <p>








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
                               <br/>   <br/>
         {loading&&(<Loader/>)}
                               {
    orders&&( orders.map((i,k)=>{
        var daynow = i.date.substr(0,3) 

                                                


                                            if( (i.date.substr(0,3)===day) && (i.checkif==='false') )
{
    if(i.checkif!=='Cancelled')
    {
        return <DoctorTableStyle i={i} />
    }
}


     
    }) )
}


</div>  






              </p>
            ) : (
              <p>








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

                               <br/>   <br/>
                               {loading && (<Loader />)}
                               {
    orders&&( orders.map((i,k)=>{
        var daynow = i.date.substr(0,3) 

                                                


                                            if( (i.date.substr(0,3)===day) && (i.checkif==='false') )
{
    if(i.checkif!=='Cancelled')
    {
        return <DoctorTableStyle i={i} />
    }
}


     
    }) )
}


</div>  



              


                </p>
            )
          }
        </p> )
      }

               
        </div>
    )

}

export default FutureScheduleCompounder;