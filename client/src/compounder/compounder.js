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
import FutureScheduleCompounder from "./futureschedule";
import ChooseLanguage from "../doctors/chooselanguage";

const Compounder=()=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    

    



    const compounder = JSON.parse(localStorage.getItem('compounder'))

    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate

    const currentuser = JSON.parse(localStorage.getItem('currentuser'))

   


 
    var doc 
    const dispatch = useDispatch()

   // dispatch(GetDoctorById(compounder.docid))

  

   

    return(
        <div>




{
        bengali ? ( <p>






<ul className='makebig'  >
                    <li ><Link to={`/compounder/makebooking`}   className='stylebar'   > বুকিং করুন
</Link>  </li>
                    <li ><Link to='/compounder/checkschedule'   className='stylebar' >আজকের সূচি
 </Link>   </li>
                    {/* <li ><Link to='/compounder/adduser'  className='stylebar'>Add New Patient</Link>   </li> */}
                    <li> <Link to='/compounder/futureschedule'   className='stylebar' >সময়সূচী চেক করুন
 </Link> </li>
 <li> <Link to='/compounder/changelanguage'   className='stylebar' >ভাষা পরিবর্তন করুন
</Link> </li>        


                </ul>


                <Switch>
                    <Route exact path='/compounder' ><CheckSchedule doctorid={compounder.docid} /></Route>
                <Route path="/compounder/makebooking"   ><CompounderBooking doctorid={compounder.docid} /></Route>
                <Route path="/compounder/checkschedule"   ><CheckSchedule doctorid={compounder.docid} /></Route>
                <Route path="/compounder/futureschedule"   ><FutureScheduleCompounder doctorid={compounder.docid}  /></Route>
                {/* <Route path='/compounder/adduser' ><AddUserCompounder/></Route> */}
                <Route path="/compounder/changelanguage"   ><ChooseLanguage /></Route>
                </Switch>








        </p> ) : ( <p>
          {
            english ? (
              <p>






<ul className='makebig'  >
                    <li ><Link to={`/compounder/makebooking`}   className='stylebar'   > Make Booking</Link>  </li>
                    <li ><Link to='/compounder/checkschedule'   className='stylebar' >Today's Schedule </Link>   </li>
                    {/* <li ><Link to='/compounder/adduser'  className='stylebar'>Add New Patient</Link>   </li> */}
                    <li> <Link to='/compounder/futureschedule'   className='stylebar' >Check Schedule </Link> </li>
                    <li> <Link to='/compounder/changelanguage'   className='stylebar' >Change Language</Link> </li>


                </ul>


                <Switch>
                    <Route exact path='/compounder' ><CheckSchedule doctorid={compounder.docid} /></Route>
                <Route path="/compounder/makebooking"   ><CompounderBooking doctorid={compounder.docid} /></Route>
                <Route path="/compounder/checkschedule"   ><CheckSchedule doctorid={compounder.docid} /></Route>
                <Route path="/compounder/changelanguage"   ><ChooseLanguage /></Route>
                <Route path="/compounder/futureschedule"   ><FutureScheduleCompounder doctorid={compounder.docid}  /></Route>
                {/* <Route path='/compounder/adduser' ><AddUserCompounder/></Route> */}

                </Switch>






              </p>
            ) : (
              <p>





<ul className='makebig'  >
                    <li ><Link to={`/compounder/makebooking`}   className='stylebar'   > Make Booking</Link>  </li>
                    <li ><Link to='/compounder/checkschedule'   className='stylebar' >Today's Schedule </Link>   </li>
                    {/* <li ><Link to='/compounder/adduser'  className='stylebar'>Add New Patient</Link>   </li> */}
                    <li> <Link to='/compounder/futureschedule'   className='stylebar' >Check Schedule </Link> </li>
                    <li> <Link to='/compounder/changelanguage'   className='stylebar' >Change Language</Link> </li>


                </ul>


                <Switch>
                    <Route exact path='/compounder' ><CheckSchedule doctorid={compounder.docid} /></Route>
                <Route path="/compounder/makebooking"   ><CompounderBooking doctorid={compounder.docid} /></Route>
                <Route path="/compounder/checkschedule"   ><CheckSchedule doctorid={compounder.docid} /></Route>
                <Route path="/compounder/changelanguage"   ><ChooseLanguage /></Route>
                <Route path="/compounder/futureschedule"   ><FutureScheduleCompounder doctorid={compounder.docid}  /></Route>
                {/* <Route path='/compounder/adduser' ><AddUserCompounder/></Route> */}

                </Switch>


              


                </p>
            )
          }
        </p> )
      }






 



        </div>
    )



}

export default Compounder