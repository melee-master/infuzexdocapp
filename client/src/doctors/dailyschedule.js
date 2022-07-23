import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from 'react-rating'
import './tablestyle.css'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";
import DoctorTableStyle from './drnewtable'

const DailySchedule = () => {

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    



    const dispatch = useDispatch()


    const patientstate = useSelector(state => state.GetPatientsByUserIdReducer)

    const { orders, error, loading } = patientstate


    const doc = localStorage.getItem('doctor')
    const dr = JSON.parse(localStorage.getItem('doctor'))
    useEffect(() => {

        if (localStorage.getItem('doctor')) {
            dispatch(GetPatientsByUserIdAction())
        }
        else {
            window.location.href = '/drlogin'
        }



    }, [dispatch])


    const today = new Date()

    var checkdate = today.toString().substring(0, 15)

   

    return (
        <div>


{
        bengali ? ( <p>





<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >
ডাঃ {dr.name} আজকের সূচি ড</h1>

{
    orders&&( orders.map((i,k)=>{
        if (i.date === checkdate)
        return <DoctorTableStyle i={i} />
    }) )
}



</div>






        </p> ) : ( <p>
          {
            english ? (
              <p>








<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >Dr {dr.name} Today's Schedule</h1>

{
    orders&&( orders.map((i,k)=>{
        if (i.date === checkdate)
        return <DoctorTableStyle i={i} />
    }) )
}




</div>





              </p>
            ) : (
              <p>







<div className="error" id='customers'  >


<br></br>

<h1 style={{ textAlign: 'center' }} >Dr {dr.name} Today's Schedule</h1>



{
    orders&&( orders.map((i,k)=>{
        if (i.date === checkdate)
        return <DoctorTableStyle i={i} />
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

export default DailySchedule