import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'
import { createBrowserHistory } from 'history'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { book, check } from 'fontawesome'
import CheckPage from './check'
import './confirm.css'
const ConfirmationPage=()=>{

    

const booking = JSON.parse(sessionStorage.getItem('bookingdetails'))

console.log(booking)

    return(
        <div>
            
            <p style={{marginLeft:'auto' , marginRight:'auto'  }} >

            <CheckPage  />

            <h3>Your Booking has been Confirmed</h3>
            </p>


            <div id='bookingbox' >

               <h4 id='heading' >Booking Details</h4>
              

               <div id='containerbox' style={{ textAlign:'justify'  }} >
               <h6 id='heading2'  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patient's Name :  {booking.name} {booking.lname}  </h6>
               <h6 id='heading2' style={{textAlign:'center' , color:'#dcdcdc'}}  >  {booking.status} &nbsp;&nbsp;&nbsp; </h6>
        

<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Date : </span> {booking.date} </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Time : </span>{booking.slot}</p>



<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Contact Details : </span> {booking.contactnumber} </p>
 


<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Doctor : </span>: {booking.doctorname} </p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Field: </span> {booking.speciality} </p>

 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Booked On : </span> {booking.createdAt.substr(0,10)} </p>




               </div>

               

               


            </div>

<br/>

        </div>
    )


}

export default ConfirmationPage