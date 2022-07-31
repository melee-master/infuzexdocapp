import React from "react";
import DocumentMeta from 'react-document-meta';
import AllDoctors from "./alldoctor";
import './general.css'
import DoctorBySpecialization  from "./doctorbyspec";
import DoctorByIllness from "./doctorbyillness";
import AmbulanceService from "./ambulance";
import img1 from '../Images/doc-1.png'
import amb from '../Images/amb.png'
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

<img src={img1} id="homescreen-image" />
 <h1> আপনি এখন নিরাপদ হাতে
 </h1>


</div>


<div>

<img src={amb} id="homescreen-image" />


</div>
<h3 style={{marginBottom:'-1%'}} >এমারজেনসি অবস্থায় ?</h3>
<div className="gridcontain1" style={{alignItems:'center' , marginLeft:'-1%'  }} >
<a href='/ambulance-list' style={{textDecoration:'none'}} >
<p className='docdes-box1' style={{backgroundColor:'#0EB9B8' , border:'1px solid white'  , color:'white' ,

}} 

id='ambulance-button'

> অ্যাম্বুলেন্স বুক করুন

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
<img src={img1} id="homescreen-image" />
{/* <img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" id="homescreen-image" /> */}
 <h1> You are in Safe Hands </h1>



</div>



<div>


<img src={amb} id="homescreen-image" />


</div>
<h3 style={{marginBottom:'-1%'}} >Is an Emergency?</h3>
<div className="gridcontain1" style={{alignItems:'center' , marginLeft:'-1%' , marginBottom:'-6%' }}  >
<a href='/ambulance-list' style={{textDecoration:'none'}} >
<p className='docdes-box1' style={{backgroundColor:'#0EB9B8' , border:'1px solid white'  , color:'white' 
}} 

id='ambulance-button'

>Book Ambulance 
&nbsp;&nbsp;
<i class="fa fa-ambulance" aria-hidden="true"></i>

 </p>

</a>
</div>



<AllDoctors  />

<DoctorBySpecialization/>

<br/>


<DoctorByIllness/>


              </p>
            ) : (
              <p>
                <div>

                <img src={img1} id="homescreen-image" />
 <h1> You are in Safe Hands </h1>
</div>

<div className="gridcontain1" style={{alignItems:'center' , marginLeft:'-1.5%'  }} >
<a href='/ambulance-list' style={{textDecoration:'none'}} >
<p className='docdes-box1' style={{backgroundColor:'#0EB9B8' , border:'1px solid white'  , color:'white' 
}} 

id='ambulance-button'

>Book Ambulance 
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