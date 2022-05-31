import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';

import Loader from '../component/loader';
import Calendar from 'react-calendar';
import { BookPatientsAction } from '../actions/bookingaction';


const CompounderBooking=({doctorid})=>{

    const [docid , setdocid] = useState(doctorid)
    const [time , settime ] = useState('')
    const [bookingdate, onChange] = useState(new Date());
const [field , setfield] = useState('')


const [name , setname ] = useState('')
const [lname , setlname ] = useState('')
const [contactnumber , setcontactnumber ] = useState()

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();

const compounder = JSON.parse(localStorage.getItem('compounder'))

var dd2 = today.getDate() + 7

var maxdate = yyyy + '-' + mm + '-' + dd2;

const dispatch = useDispatch()

useEffect( ()=>{
    dispatch(GetDoctorById( {doctorid} ))
} , [] )

const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
const { loading, doctors ,error} = dridstate



const bookappointment=()=>{

    var date =  bookingdate.toString().substr(0,15)
   // alert(date)


  
  if(compounder)
  {

    const details = {
        name:name ,
        lname:lname ,
        status:'Own Compounder' ,
        contactnumber:contactnumber ,
        doctorid:doctorid ,
        userid:compounder._id ,
        date:date ,
        slot:field
    }

    dispatch(BookPatientsAction(details))
  }
 



// alert(bookingdate ,'timing is' , field)

     document.getElementById('show-date').innerHTML=bookingdate + field + 'Booking Confirmed'
 }


 const showcontact=()=>{
    // alert(doctors.contactnumber)
     document.getElementById('show-number').innerHTML=doctors.contactnumber
 }

var timevar = []
//timevar =  doctors.checked




    return(
        <div>
           

 {loading ? (<Loader/>) : error ? ( <p> There's an error </p> ) :
 (
     <div>

<form onSubmit={bookappointment} >

<div id='calendar-position' >
<Calendar onChange={onChange} value={bookingdate}

dateFormat = 'dd/MM/yyyy'

minDate =  { new Date()  }

maxDate = { new Date( yyyy , mm-1 , dd2 ) }
maxDetail = 'month'
minDetail = 'month'





/>




















<br/>
<select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.checked && doctors.checked.map(rev => {
    return <option value={rev} >

 
        {rev} 




        </option>

})

}
</select>







<br/>









</div>



<h4 style={{float:'left', marginLeft:'5%'}} > Enter Name </h4>
<br/>
<input type='text' value={name} placeholder='Enter Name' 

required
style={{width:'90%' , marginLeft:'5%'  }}
onChange={ (e)=>{ setname(e.target.value) } }  />
<br/><br/><br/>


<h4 style={{float:'left', marginLeft:'5%'}} > Enter Last Name </h4>
<br/>
<input type='text' value={lname} placeholder='Enter Last Name' 
style={{width:'90%', marginLeft:'5%'}}

onChange={ (e)=>{ setlname(e.target.value) } }  />
<br/><br/><br/>


<h4 style={{float:'left', marginLeft:'5%'}} > Enter Contact Number </h4>
<br/>
<input 
style={{width:'90%', marginLeft:'5%'}}
type='Number' value={contactnumber} placeholder='Enter Contact Number'

required
onChange={ (e)=>{ setcontactnumber(e.target.value) } }  />


<br/><br/><br/>

<br/><br/><br/><br/><br/><br/><br/><br/><br/>

<button 
value='submit' 
//onClick={bookappointment}

className='docdes-box1' style={{backgroundColor:'#0EB9B8' , color:'white'}}  > Book Appointment</button>





</form>


<br/>




<p id="show-number" ></p>
<p id="show-date" ></p>



         </div>
 )
}       
                          


        </div>
    )
}

export default CompounderBooking;