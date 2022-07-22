import React from "react";
import DocumentMeta from 'react-document-meta';
import AllDoctors from "./alldoctor";
import './general.css'
import DoctorBySpecialization  from "./doctorbyspec";
import DoctorByIllness from "./doctorbyillness";
import AmbulanceService from "./ambulance";

const HomeScreen=()=>{

    const meta = {
        title: 'Doctrap',
        description: 'Home Page of DocTrap ',
        canonical: '',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags,doctrap,illness,medical,best doctors , dr , drs '
          }
        }
      };

      const bengali = localStorage.getItem('bengali')
      const english = localStorage.getItem('english')


    return(

        <DocumentMeta {...meta}>

      {
        bengali ? ( <p>

<div>

<img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" id="homescreen-image" />
 <h1> আপনি নিরাপদ হাতে আছেন
 </h1>
</div>

<div className="gridcontain1"  >
<a href='/ambulance-list' style={{textDecoration:'none'}} >
<p className='docdes-box1' style={{backgroundColor:'#0EB9B8' , border:'1px solid white'  , color:'white' 
}} 

id='ambulance-button'

> অ্যাম্বুলেন্স

&nbsp;&nbsp;
<i class="fa fa-ambulance" aria-hidden="true"></i>

 </p>

</a>
</div>


<AllDoctors/>

<DoctorBySpecialization/>

<br/>

<DoctorByIllness/>

        </p> ) : ( <p>
          {
            english ? (
              <p>

<div>

<img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" id="homescreen-image" />
 <h1> You are in Safe Hands </h1>



</div>



<div>


<img src="https://media.istockphoto.com/vectors/ambulance-emergency-paramedic-carrying-patient-in-stretcher-vector-id1218104087?b=1&k=20&m=1218104087&s=612x612&w=0&h=z4Cf76Q0lU48-W1UMQEuKDADirzMCQbgAjEdso4SRKA=" id="homescreen-image" />





</div>

<div className="gridcontain1"  >
<a href='/ambulance-list' style={{textDecoration:'none'}} >
<p className='docdes-box1' style={{backgroundColor:'#0EB9B8' , border:'1px solid white'  , color:'white' 
}} 

id='ambulance-button'

> Ambulance 
&nbsp;&nbsp;
<i class="fa fa-ambulance" aria-hidden="true"></i>

 </p>

</a>
</div>



<AllDoctors/>

<DoctorBySpecialization/>

<br/>


<DoctorByIllness/>


              </p>
            ) : (
              <p>
                <div>

<img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" id="homescreen-image" />
 <h1> You are in Safe Hands </h1>
</div>

<div className="gridcontain1"  >
<a href='/ambulance-list' style={{textDecoration:'none'}} >
<p className='docdes-box1' style={{backgroundColor:'#0EB9B8' , border:'1px solid white'  , color:'white' 
}} 

id='ambulance-button'

> Ambulance 
&nbsp;&nbsp;
<i class="fa fa-ambulance" aria-hidden="true"></i>

 </p>

</a>
</div>




<AllDoctors/>

<DoctorBySpecialization/>
<br/>


<DoctorByIllness/>


                </p>
            )
          }
        </p> )
      }







            </DocumentMeta>
     
    )


}


export default HomeScreen ;