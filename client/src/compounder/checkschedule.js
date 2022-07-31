import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";

import { GetCompounderPatientsByUserIdAction } from '../actions/compounderaction';
import DoctorTableStyle from '../doctors/drnewtable';


const CheckSchedule=({doctorid})=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    

    


    

    const dispatch = useDispatch()

    const today = new Date()

    var checkdate = today.toString().substring(0, 15)


const patientstate = useSelector(state=>state.GetPatientsByUserIdReducer)

const {orders , error , loading } = patientstate


const doc = localStorage.getItem('compounder')
const dr = JSON.parse(localStorage.getItem('doctor'))

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
          
         

{
        bengali ? ( <p>





<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >
 আজকের সূচি ড</h1>

 {
    orders&&( orders.map((i,k)=>{
        if (i.date === checkdate)
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








<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >Dr Today's Schedule</h1>


{
    orders&&( orders.map((i,k)=>{
        if (i.date === checkdate)
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







<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >Dr Today's Schedule</h1>


{
    orders&&( orders.map((i,k)=>{
        if (i.date === checkdate)
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

export default CheckSchedule