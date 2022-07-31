import React from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import EditDoctor from "../admin/editdoc";
import GetCompounder from "../compounder/allcompounder";
import ChooseLanguage from "./chooselanguage";
import CompounderRegister from "./compunderreg";
import DailySchedule from "./dailyschedule";
import CheckSchedule from "./drcheckschedule";
import DoctorWelcomeScreen from "./drwelcomescreen";
import PatientsList from "./patientslist";
import UpdateProfile from "./updateprofile";


const DoctorPage=()=>{



    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')




    const doctor = JSON.parse(localStorage.getItem('doctor'))

   

    return(
        <div>




{
        bengali ? ( <p>



<ul className='makebig'  >
            
            <li ><Link to='/drpage/dailyschedule'   className='stylebar'   > আজকের সূচি</Link>  </li>
            <li ><Link to='/drpage/checkpatientslist'   className='stylebar'   >সময়সূচী চেক করুন</Link>  </li>
            <li ><Link to='/drpage/addcompounder'   className='stylebar' >কম্পাউন্ডার যোগ করুন</Link>   </li>
            {
              doctor.status==='true'?( <li > <Link to={`/drpage/update/${doctor._id}`}   className='stylebar'>Update My  Profile</Link>  </li>  ):(<li >  </li> )
            }
                    <li ><Link to='/drpage/compounderinfo'  className='stylebar'>কম্পাউন্ডার দেখুন</Link>   </li>
                    <li ><Link to='/drpage/allpatients'   className='stylebar'   > সকল রোগী</Link>  </li>
                    <li ><Link to='/drpage/changelanguage'   className='stylebar'   >ভাষা পরিবর্তন করুন</Link>  </li>
        
        </ul>


        <Switch>
        <Route path="/drpage" exact  component={DoctorWelcomeScreen}  ></Route>
        <Route path="/drpage/dailyschedule"  component={DailySchedule}  ></Route>
     
<Route path="/drpage/allpatients"  component={PatientsList}  ></Route>
<Route path="/drpage/addcompounder"  ><CompounderRegister docid={doctor._id} /></Route>
<Route path="/drpage/update/:doctor" component={UpdateProfile}  ><UpdateProfile/></Route>
<Route path='/drpage/compounderinfo' >< GetCompounder docid={doctor._id} /></Route> 
<Route path='/drpage/checkpatientslist' component={CheckSchedule} ></Route> 
<Route path='/drpage/changelanguage' component={ChooseLanguage} ></Route>

</Switch>





        </p> ) : ( <p>
          {
            english ? (
              <p>


<ul className='makebig'  >
            
            <li ><Link to='/drpage/dailyschedule'   className='stylebar'   > Today's Schedule</Link>  </li>
            <li ><Link to='/drpage/checkpatientslist'   className='stylebar'   >Check Schedule</Link>  </li>
            <li ><Link to='/drpage/addcompounder'   className='stylebar' >Add Compounder</Link>   </li>
            
            {
              doctor.status==='true'?( <li > <Link to={`/drpage/update/${doctor._id}`}   className='stylebar'>Update My  Profile</Link>  </li>  ):(<li >  </li> )
            }
             
            <li ><Link to='/drpage/compounderinfo'  className='stylebar'>See Compounder</Link>   </li>
            <li ><Link to='/drpage/allpatients'   className='stylebar'   > All Patients</Link>  </li>

            <li ><Link to='/drpage/changelanguage'   className='stylebar'   >Change Language</Link>  </li>
        
        </ul>


        <Switch>
        <Route path="/drpage" exact  component={DoctorWelcomeScreen}  ></Route>
        <Route path="/drpage/dailyschedule"  component={DailySchedule}  ></Route>
<Route path="/drpage/allpatients"  component={PatientsList}  ></Route>
<Route path="/drpage/addcompounder"  ><CompounderRegister docid={doctor._id} /></Route>
<Route path="/drpage/update/:doctor" component={UpdateProfile}  ><UpdateProfile/></Route>
<Route path='/drpage/compounderinfo' >< GetCompounder docid={doctor._id} /></Route> 
<Route path='/drpage/checkpatientslist' component={CheckSchedule} ></Route> 
<Route path='/drpage/changelanguage' component={ChooseLanguage} ></Route>


</Switch>




              </p>
            ) : (
              <p>




<ul className='makebig'  >
            
            <li ><Link to='/drpage/dailyschedule'   className='stylebar'   > Today's Schedule</Link>  </li>
            <li ><Link to='/drpage/checkpatientslist'   className='stylebar'   >Check Schedule</Link>  </li>
            <li ><Link to='/drpage/addcompounder'   className='stylebar' >Add Compounder</Link>   </li>
            {
              doctor.status==='true'?( <li > <Link to={`/drpage/update/${doctor._id}`}   className='stylebar'>Update My  Profile</Link>  </li>  ):(<li >  </li> )
            }
            <li ><Link to='/drpage/compounderinfo'  className='stylebar'>See Compounder</Link>   </li>
            <li ><Link to='/drpage/allpatients'   className='stylebar'   > All Patients</Link>  </li>

            <li ><Link to='/drpage/changelanguage'   className='stylebar'   >Change Language</Link>  </li>
        
        </ul>


        <Switch>
        <Route path="/drpage" exact  component={DoctorWelcomeScreen}  ></Route>
        <Route path="/drpage/dailyschedule"  component={DailySchedule}  ></Route>
<Route path="/drpage/allpatients"  component={PatientsList}  ></Route>
<Route path="/drpage/addcompounder"  ><CompounderRegister docid={doctor._id} /></Route>
<Route path="/drpage/update/:doctor" component={UpdateProfile}  ><UpdateProfile/></Route>
<Route path='/drpage/compounderinfo' >< GetCompounder docid={doctor._id} /></Route> 
<Route path='/drpage/checkpatientslist' component={CheckSchedule} ></Route> 
<Route path='/drpage/changelanguage' component={ChooseLanguage} ></Route>


</Switch>




                </p>
            )
          }
        </p> )
      }

        



       


        </div>
    )


}

export default DoctorPage;