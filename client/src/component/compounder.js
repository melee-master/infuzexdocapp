import React, { useState , useEffect } from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import Loader from "../component/loader";
import { GetDoctorById } from "../actions/doctoraction";
import { GetDoctorByIdReducer } from "../reducers/doctorreducer";
import GetDoctorByIdComponent from "./getdocbyid";
import './comp.css'
import CompounderBooking from "./makebooking";
import CheckSchedule from "./checkschedule";
import AddUserCompounder from "./addusercompounder";

const Compounder=()=>{

    const compounder = JSON.parse(localStorage.getItem('compounder'))

    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate

    const currentuser = JSON.parse(localStorage.getItem('currentuser'))

   


 
    var doc 
    const dispatch = useDispatch()

   // dispatch(GetDoctorById(compounder.docid))

  

   

    return(
        <div>

 

<ul className='makebig'  >
                    <li ><Link to={`/compounder/makebooking`}   className='stylebar'   > Make Booking</Link>  </li>
                    <li ><Link to='/compounder/checkschedule'   className='stylebar' >Check Schedule </Link>   </li>
                    <li ><Link to='/compounder/adduser'  className='stylebar'>Add New Patient</Link>   </li>
                   


                </ul>


                <Switch>
                    <Route exact path='/compounder' ><CompounderBooking doctorid={compounder.docid} /></Route>
                <Route path="/compounder/makebooking"   ><CompounderBooking doctorid={compounder.docid} /></Route>
                <Route path="/compounder/checkschedule"   ><CheckSchedule doctorid={compounder.docid} /></Route>
                <Route path='/compounder/adduser' ><AddUserCompounder/></Route>
                </Switch>


        </div>
    )



}

export default Compounder