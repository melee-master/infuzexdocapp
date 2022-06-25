import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';
import Loader from "../component/loader";
import './description.css'
import ReviewComponent from '../component/review';
import { map } from 'jquery';
import DrBooking from '../component/drbooking';
import DoctorBookingWithoutLogin from '../component/bookingwithoutlogin';

const DoctorDescription=({match})=>{

    
    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    
    
    
const date = new Date()
    const params = useParams();
    const doctorid=match.params.id
    const dispatch = useDispatch()

    var startarray = 5
    var call
    var today = new Date();
  
   
    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate

    const currentuser = JSON.parse(localStorage.getItem('currentuser'))
    const compounder = JSON.parse(localStorage.getItem('compounder'))

    useEffect(() => {
        dispatch(GetDoctorById( {doctorid} )) 
     

    }, [])


    const [daydate,setdaydate] = useState('')
    const [time,settime] = useState('')

    const admin=JSON.parse(localStorage.getItem('admin'))
    const doctor = JSON.parse(localStorage.getItem('doctor'))

  

    const shownumber=()=>{

        const pp = document.getElementById('no').innerHTML='Hello World'

    }

   

    return(
        <div  >

{
        bengali ? ( <p>

<div>

{ loading ? (<Loader/>) : error ? ( <h1>There's an error</h1> ) :

(
    <div  >

        <img src={doctors.image} id="img-docdes"/>

       <h3 className='docdes-name' > ডাঃ {doctors.name}  {doctors.lname}  </h3>
        <p className='docdes-sub' > {doctors.field} </p>
        <br/>
        <p className='docdes-sub' style={{fontWeight:'bold'}} > {doctors.experience} Years Exp </p>
        <br/>
       <h4 className='docdes-sub'> {doctors.address} </h4>
       <p className='docdes-sub' > 
ফি: ₹{doctors.fees} </p>

       <hr/>

      


     { currentuser ? <DrBooking doctorid={doctorid} /> : 
     (
         doctor ?  <DrBooking doctorid={doctorid} /> : (
             admin ?  <DrBooking doctorid={doctorid} /> : (
                 compounder ?  <DrBooking doctorid={doctorid} /> : (
                     <p>
                         <DoctorBookingWithoutLogin doctorid={doctorid}  />
                     </p>
                 )
             )
         )
     )  }




       
       <div style={{textAlign:'left' , marginLeft:'15px' }} >

       <h2 >ডাক্তার সম্পর্কে</h2>

<p className='docdes-sub'> {doctors.description} </p>

        </div>  



        <hr/>

    { currentuser ?  <ReviewComponent  doctors = {doctors}  /> :
    
    ( doctor ? <ReviewComponent  doctors = {doctors}  /> : 
     (
         admin ?  <ReviewComponent  doctors = {doctors}  /> : ( compounder ? <ReviewComponent  doctors = {doctors}  /> : 
             ( <h3>রিভিউ <a href='/login'>পড়তে</a> লগইন করুন</h3> )   )
     )  ) 
    
    
    
    }
      

        </div>
)


}
    
    </div>


        </p> ) : ( <p>
          {
            english ? (
              <p>

<div>

{ loading ? (<Loader/>) : error ? ( <h1>There's an error</h1> ) :

(
    <div  >

        <img src={doctors.image} id="img-docdes"/>

       <h3 className='docdes-name'  > Dr. {doctors.name}  {doctors.lname}  </h3>
        <p className='docdes-sub' style={{fontWeight:'bolder' , fontSize:'large' , marginTop:'-1%'}} > {doctors.field} </p>
       
        <p className='docdes-sub' style={{fontWeight:'bold'}} > {doctors.experience} Years Exp </p>
       
       <h4 className='docdes-sub' style={{fontWeight:'normal'}} > {doctors.address} </h4>
       <p className='docdes-sub' > Fees : ₹{doctors.fees} </p>

       {/* <hr/> */}

      
<div id='book-app' >
BOOK APPOINTMENT
</div>

{/* <hr/> */}

     { currentuser ? <DrBooking doctorid={doctorid} /> : 
     (
         doctor ?  <DrBooking doctorid={doctorid} /> : (
             admin ?  <DrBooking doctorid={doctorid} /> : (
                 compounder ?  <DrBooking doctorid={doctorid} /> : (
                     <p>
                         <DoctorBookingWithoutLogin doctorid={doctorid}  />
                     </p>
                 )
             )
         )
     )  }




       
       <div style={{textAlign:'left' , marginLeft:'15px' }} >

       <p>
<span style={{ 
    fontSize:'large' ,
    fontWeight:'bolder'
 }} > 
 About Doctor  </span>

</p>

<p className='docdes-sub'> {doctors.description} </p>

        </div>  



        <hr/>

    { currentuser ?  <ReviewComponent  doctors = {doctors}  /> :
    
    ( doctor ? <ReviewComponent  doctors = {doctors}  /> : 
     (
         admin ?  <ReviewComponent  doctors = {doctors}  /> : ( compounder ? <ReviewComponent  doctors = {doctors}  /> : 
             ( <h3>Please <a href='/login'> Login </a> To Read Reviews</h3> )   )
     )  ) 
    
    
    
    }
      

        </div>
)


}
    
    </div>



              </p>
            ) : (
              <p>

<div>

{ loading ? (<Loader/>) : error ? ( <h1>There's an error</h1> ) :

(
    <div  >

        <img src={doctors.image} id="img-docdes"/>

       <h3 className='docdes-name'  > Dr. {doctors.name}  {doctors.lname}  </h3>
        <p className='docdes-sub' style={{fontWeight:'bolder' , fontSize:'large' , marginTop:'-1%' }} > {doctors.field} </p>
       
        <p className='docdes-sub' style={{fontWeight:'bold'}} > {doctors.experience} Years Exp </p>
       
       <h4 className='docdes-sub' style={{fontWeight:'normal'}} > {doctors.address} </h4>
       <p className='docdes-sub' > Fees : ₹{doctors.fees} </p>

       {/* <hr/> */}

      
<div id='book-app' >
BOOK APPOINTMENT
</div>

{/* <hr/> */}

     { currentuser ? <DrBooking doctorid={doctorid} /> : 
     (
         doctor ?  <DrBooking doctorid={doctorid} /> : (
             admin ?  <DrBooking doctorid={doctorid} /> : (
                 compounder ?  <DrBooking doctorid={doctorid} /> : (
                     <p>
                         <DoctorBookingWithoutLogin doctorid={doctorid}  />
                     </p>
                 )
             )
         )
     )  }




       
       <div style={{textAlign:'left' , marginLeft:'15px' }} >

       <h2 >About the Doctor</h2>

<p className='docdes-sub'> {doctors.description} </p>

        </div>  



        <hr/>

    { currentuser ?  <ReviewComponent  doctors = {doctors}  /> :
    
    ( doctor ? <ReviewComponent  doctors = {doctors}  /> : 
     (
         admin ?  <ReviewComponent  doctors = {doctors}  /> : ( compounder ? <ReviewComponent  doctors = {doctors}  /> : 
             ( <h3>Please <a href='/login'> Login </a> To Read Reviews</h3> )   )
     )  ) 
    
    
    
    }
      

        </div>
)


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

export default DoctorDescription;