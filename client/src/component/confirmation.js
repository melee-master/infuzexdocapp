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

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    

    


    

const booking = JSON.parse(sessionStorage.getItem('bookingdetails'))

//console.log(booking)

    return(
        <div>

{
        bengali ? ( <p>






<p style={{marginLeft:'auto' , marginRight:'auto'  }} >

<CheckPage  />

<h3>আপনার বুকিং নিশ্চিত করা হয়েছে</h3>
</p>


<div id='bookingbox' >

   <h4 id='heading' >বুকিং বিবরণ</h4>
  

   <div id='containerbox' style={{ textAlign:'justify'  }} >
   <h6 id='heading2' style={{ textAlign:'center'  }}  >  
রোগীর নাম: {booking.name} {booking.lname}  </h6>
   <h6 id='heading2' style={{textAlign:'center' , color:'#dcdcdc'}}  >  {booking.status} &nbsp;&nbsp;&nbsp; </h6>


<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > তারিখ: </span> {booking.date} </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > সময়: </span>{booking.slot}</p>



<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > 
যোগাযোগের ঠিকানা : </span> {booking.contactnumber} </p>



<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > ডাক্তার: </span>: {booking.doctorname} </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > 
ক্ষেত্র: </span> {booking.speciality} </p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > বুক করা হয়েছে: </span> {booking.createdAt.substr(0,10)} </p>




   </div>

   

   


</div>

<br/>

<br/><br/><br/><br/>

<p className='doc-exp' >আপনার বুকিং নিশ্চিত করতে বা আরও বিশদ পেতে, অনুগ্রহ করে ক্লিনিকে যোগাযোগ করুন {booking.doctorcontact} </p>

<br/>   






        </p> ) : ( <p>
          {
            english ? (
              <p>





<p style={{marginLeft:'auto' , marginRight:'auto'  }} >

<CheckPage  />

<h3>Your Booking has been Confirmed</h3>
</p>


<div id='bookingbox' >

   <h4 id='heading' >Booking Details</h4>
  

   <div id='containerbox' style={{ textAlign:'justify'  }} >
   <h6 id='heading2' style={{ textAlign:'center'  }}  >  Patient's Name :  {booking.name} {booking.lname}  </h6>
   <h6 id='heading2' style={{textAlign:'center' , color:'#dcdcdc'}}  >  {booking.status} &nbsp;&nbsp;&nbsp; </h6>


<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Date : </span> {booking.date} </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Time : </span>{booking.slot}</p>



<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Contact Details : </span> {booking.contactnumber} </p>



<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Doctor : </span>: {booking.doctorname} </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Field: </span> {booking.speciality} </p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Booked On : </span> {booking.createdAt.substr(0,10)} </p>




   </div>

   

   


</div>

<br/><br/><br/><br/>

<p className='doc-exp' >To Confirm Your Booking or to get more details , Please contact clinic {booking.doctorcontact}

{/* <a href={`+91${booking.doctorcontact}`}> */}

 {/* </a> */}
  </p>

<br/>


              </p>
            ) : (
              <p>






<p style={{marginLeft:'auto' , marginRight:'auto'  }} >

<CheckPage  />

<h3>Your Booking has been Confirmed</h3>
</p>


<div id='bookingbox' >

   <h4 id='heading' >Booking Details</h4>
  

   <div id='containerbox' style={{ textAlign:'justify'  }} >
   <h6 id='heading2' style={{ textAlign:'center'  }}  >  Patient's Name :  {booking.name} {booking.lname}  </h6>
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

<br/><br/><br/><br/>

<p className='doc-exp' >To Confirm Your Booking or to get more details , Please contact clinic {booking.doctorcontact} </p>

<br/>     


                </p>
            )
          }
        </p> )
      }

            
      

        </div>
    )


}

export default ConfirmationPage