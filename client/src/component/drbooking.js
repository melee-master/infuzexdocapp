import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';
import { GetPatientsByUserId2Action } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";



import Calendar from 'react-calendar';
import './drbooking.css';
import Loader from './loader';
// import { TextField } from '@mui/material'

import { BookPatientsAction, GetBookingsByDate } from '../actions/bookingaction';


const DrBooking=({doctorid})=>{


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')




    const [docid , setdocid] = useState(doctorid)
    const [time , settime ] = useState('')
    const [bookingdate, onChange] = useState(new Date());
const [field , setfield] = useState('8:00 AM')
const [name , setname ] = useState('')
const [lname , setlname ] = useState('')
const [contactnumber,setcontactnumber]=useState()

var redirect = false 


const user = JSON.parse(localStorage.getItem('currentuser'))
const admin=JSON.parse(localStorage.getItem('admin'))
const doctor = JSON.parse(localStorage.getItem('doctor'))
const compounder = JSON.parse(localStorage.getItem('compounder'))





var unavailableday 

    var today = new Date();
  

    var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();

var currentday = today.toString().substr(0,15)
var day2=bookingdate.toString().substr(0,3)
var dd2 = today.getDate() + 7

var maxdate = yyyy + '-' + mm + '-' + dd2;

const dispatch = useDispatch()
    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate

  

var userid = doctors._id

    useEffect( ()=>{

        if(localStorage.getItem('doctor') || localStorage.getItem('currentuser') || localStorage.getItem('compounder') || localStorage.getItem('admin')  )
        {
            dispatch(GetPatientsByUserId2Action({userid}))
        }
        else{
            window.location.href='/makechoice'
        }



    } ,[dispatch]  )


    const patientstate = useSelector(state=>state.GetPatientsByUserIdReducer)

    const {orders  } = patientstate


    
    var date =  bookingdate.toString().substr(0,15)
  


  var x= 0;





  if(orders)
  {
  orders.map( i =>{
    if(( i.date===date ) && ( i.slot===field ) )
    {
       
        x++;
    }
} )
  }



const ShowAvailabilityBengali=()=>{

   

    return(
        <div>
            {
                unavailableday===`Doctor Isn't Available`?(
                    <p  style={{fontWeight:'bold' , color:'#FF0000' }}>
                        ডাক্তার পাওয়া যাচ্ছে না

             <br/><br/>
                    </p>
                ):(
                    <p>
                        { x<doctors.patientsperhr?(<p style={{fontWeight:'bold' , color:'#7CFC00' }} >
               {doctors.patientsperhr-x} স্লট উপলব্ধ

               <br/><br/>
            </p>):(<p style={{fontWeight:'bold' , color:'#FF0000' }} >
            সমস্ত স্লট বুক করা হয়েছে, অন্য স্লট চেষ্টা করুন
             <br/><br/>
            </p>) }
                    </p>
                )
            }
           
           
          
        </div>
    )

}




const ShowAvailabilityEnglish=()=>{

   

    return(
        <div>
            {
                unavailableday===`Doctor Isn't Available`?(
                    <p  style={{fontWeight:'bold' , color:'#FF0000' }}>
                         Doctor Is Unavailable
             <br/><br/>
                    </p>
                ):(
                    <p>
                        { x<doctors.patientsperhr?(<p style={{fontWeight:'bold' , color:'#7CFC00' }} >
               {doctors.patientsperhr-x} Slots Available 
               <br/><br/>
            </p>):(<p style={{fontWeight:'bold' , color:'#FF0000' }} >
             All Slots Booked , Please Try Another Slot
             <br/><br/>
            </p>) }
                    </p>
                )
            }
           
           
          
        </div>
    )

}




   


    const bookappointment=()=>{

       

      
     var fieldslot = field.toString().substr(5)


      var bookingtime = parseInt(`${field}`)


      const d = new Date();
      let text = d.toTimeString();
      var timeinnum = parseInt(`${text}`)

      
 if(x>doctors.patientsperhr-1)
 {
     alert('This Slot is Booked , Please Try Another Slot')
     return 
    
 }
 else {
if( unavailableday===`Doctor Isn't Available` )
{
    alert(`Doctor Isn't Available`)
}



else if( date==currentday )
{
    if(fieldslot==='PM')
    {
        bookingtime = bookingtime+12 
       
    }

   

    if( timeinnum >= bookingtime  )
    {
        alert(`Can't Book this Slot`)
    }
    else
    {
        if(user)
        {
            const details = {
                name:name ,
                lname:lname ,
                email:user.email ,
                contactnumber:contactnumber ,
                doctorid:doctorid ,
                userid:user._id ,
                status:'Registered User' ,
                date:date ,
                slot:field , 
                doctorname:doctors.name ,
           speciality:doctors.field  ,
           doctorcontact:doctors.contactnumber
            }
    
            dispatch(BookPatientsAction(details))
          
             
    
    
           window.location.href=`/bookingconfirmation`
           alert('Please take a screenshot of this page')

          
    
    
        }
    
        if(doctor)
        {
            const details = {
                name:name ,
                lname:lname ,
                email:doctor.email ,
                contactnumber:contactnumber ,
                doctorid:doctorid ,
                status:'Doctor' ,
                userid:doctor._id ,
                date:date ,
                slot:field , 
                doctorname:doctors.name ,
           speciality:doctors.field  ,
           doctorcontact:doctors.contactnumber
            }
    
            dispatch(BookPatientsAction(details))   
           
           
    
            alert('Please take a screenshot of this page')
    
           window.location.href=`/bookingconfirmation`
    
        }
    
        if(compounder)
        {
         const details = {
            name:name ,
            lname:lname ,
             email:compounder.email ,
             contactnumber:contactnumber ,
             doctorid:doctorid ,
             status:'Compounder' ,
             userid:compounder._id ,
             date:date ,
             slot:field ,
             doctorname:doctors.name ,
           speciality:doctors.field ,
           doctorcontact:doctors.contactnumber
         }
    
         dispatch(BookPatientsAction(details))
        //  setredirect(1)  
         window.location.href=`/bookingconfirmation`
    
         alert('Please take a screenshot of this page')
         
    
        }


    

    }


       
    

  
}


else
{
    if(user)
    {
        const details = {
            name:name ,
            lname:lname ,
            email:user.email ,
            contactnumber:contactnumber ,
            doctorid:doctorid ,
            userid:user._id ,
            status:'Registered User' ,
            date:date ,
            slot:field , 
            doctorname:doctors.name ,
       speciality:doctors.field  ,
       doctorcontact:doctors.contactnumber
        }

        dispatch(BookPatientsAction(details))
          window.location.href=`/bookingconfirmation`

alert('Please take a screenshot of this page')

    }

    if(doctor)
    {
        const details = {
            name:name ,
            lname:lname ,
            email:doctor.email ,
            contactnumber:contactnumber ,
            doctorid:doctorid ,
            status:'Doctor' ,
            userid:doctor._id ,
            date:date ,
            slot:field , 
            doctorname:doctors.name ,
       speciality:doctors.field  ,
       doctorcontact:doctors.contactnumber
        }

        dispatch(BookPatientsAction(details))     
         window.location.href=`/bookingconfirmation`

        alert('Please take a screenshot of this page')

       // window.location.href=`/bookingconfirmation`

    }

    if(compounder)
    {
     const details = {
        name:name ,
        lname:lname ,
         email:compounder.email ,
         contactnumber:contactnumber ,
         doctorid:doctorid ,
         status:'Compounder' ,
         userid:compounder._id ,
         date:date ,
         slot:field ,
         doctorname:doctors.name ,
       speciality:doctors.field ,
       doctorcontact:doctors.contactnumber
     }

     dispatch(BookPatientsAction(details))
     window.location.href=`/bookingconfirmation`

     alert('Please take a screenshot of this page')
     

    }
   

}
 }


     


        document.getElementById('show-date').innerHTML=bookingdate + field

      
       
    }


    const showcontact=()=>{
       
        document.getElementById('show-number').innerHTML=doctors.contactnumber
    }



 

var timevar = []
timevar =  doctors.checked



    return(
        <div>

{
        bengali ? ( <p>


 {loading ? (<Loader/>) : error ? ( <p> There's an error </p> ) :
 (
     <div>

<form onSubmit={bookappointment} >

<div id='calendar-position' >
<Calendar onChange={onChange} value={bookingdate}

dateFormat = 'dd/MM/yyyy'

minDate =  { new Date( yyyy , mm-1 , dd)  }

maxDate = { new Date( yyyy , mm-1 , dd2 ) }
maxDetail = 'month'
minDetail = 'month'


/>



<p>
<span style={{ 
    fontSize:'large' ,
    fontWeight:'bolder'
 }} > 
 উপলব্ধ স্লট :  </span>

</p>












{

day2==='Mon'?(
    <p>
        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.mon && doctors.mon.map(rev => {

    // if( rev==`Doctor Isn't Available` ) { alert('Hello') }
    // return <option disabled value={rev} >

       
    
    if(rev===`Doctor Isn't Available`)
    {
        return <option disabled value={rev} >

 
{ unavailableday = rev }
    
    
    
    
        </option>


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }

})

}
</select>
        </p>

):(
   day2==='Tue' ? (
    <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

    {
     
    doctors.tue && doctors.tue.map(rev => {
        if(rev===`Doctor Isn't Available`)
        {
            return <option disabled value={rev} >
    
     
    { unavailableday = rev }
        
        
        
        
            </option>
    
    
        }
        else
        {
            return <option value={rev} >
    
     
            {rev  } 
        
        
        
        
            </option>
        }
    
    })
    
    }
    </select>
   ) : (
       day2==='Wed' ? (
        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.wed && doctors.wed.map(rev => {
    if(rev===`Doctor Isn't Available`)
    {
        return <option disabled value={rev} >

 
{ unavailableday = rev }
    
    
    
    
        </option>


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }

})

}
</select>
    ) : (
        day2==='Thu' ? (
            <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

            {
             
            doctors.thu && doctors.thu.map(rev => {
                if(rev===`Doctor Isn't Available`)
                {
                    return <option disabled value={rev} >
            
             
            { unavailableday = rev }
                
                
                
                
                    </option>
            
            
                }
                else
                {
                    return <option value={rev}  >
            
             
                    {rev  } 
                
                
                
                
                    </option>
                }
            
            })
            
            }
            </select>
        )  : (
            day2==='Fri' ? (
                <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.fri && doctors.fri.map(rev => {
    if(rev===`Doctor Isn't Available`)
    {
        return <option disabled value={rev} >

 
{ unavailableday = rev }
    
    
    
    
        </option>


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }

})

}
</select>
            )  : (
                day2==='Sat'?(
                    <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.sat && doctors.sat.map(rev => {
    if(rev===`Doctor Isn't Available`)
    {
        return <option disabled value={rev} >

 
{ unavailableday = rev }
    
    
    
    
        </option>


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }

})

}
</select>
                ) : (
                    day2==='Sun' ? (
                        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.sun && doctors.sun.map(rev => {
  
    if(rev===`Doctor Isn't Available`)
    {

        return <option disabled value={rev} >

 
        {/* {rev  }  */}
    
    
        { unavailableday = rev }
    
        </option>
    


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }
        

})

}
</select>
                    ) : (
                        <p> </p>
                    )
                )
            )
        )
    )
   )
)

}









<br/>






{ShowAvailabilityBengali()}








</div>
<input  

placeholder="রোগীর নাম" type='text'

value={name}
required

onChange={ (e)=>setname(e.target.value) }

style={{width:'90%', marginLeft:'5%'  }}

/>



<br/>









<br/>






<br/><br/><br/><br/>


<button 
value='submit' 
//onClick={bookappointment}

className='docdes-box1' style={{backgroundColor:'#0EB9B8' , color:'white'  }}  > &nbsp; &nbsp;   বুক অ্যাপয়েন্টমেন্ট</button>
<h4>বা
</h4>
<span  className='docdes-box1' style={{backgroundColor:'white' , border:'1px solid black'  }} 

onClick={ showcontact }


>

<i class="fa fa-phone" aria-hidden="true"></i>  
 ক্লিনিকে কল করুন</span>




</form>


<br/>




<p id="show-number" ></p>
<p id="show-date" ></p>



         </div>
 )
}       
                          


        </p> ) : ( <p>
          {
            english ? (
              <p>



 {loading ? (<Loader/>) : error ? ( <p> There's an error </p> ) :
 (
     <div>

<form onSubmit={bookappointment} >

<div id='calendar-position' >
<Calendar onChange={onChange} value={bookingdate}

dateFormat = 'dd/MM/yyyy'

minDate =  { new Date(yyyy,mm-1,dd)  }

maxDate = { new Date( yyyy , mm-1 , dd2 ) }
maxDetail = 'month'
minDetail = 'month'


/>





<br/>


<p>
<span style={{ 
    fontSize:'large' ,
    fontWeight:'bolder'
 }} > Available Slots  :  </span>

</p>




{

day2==='Mon'?(
    <p>
        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.mon && doctors.mon.map(rev => {

    // if( rev==`Doctor Isn't Available` ) { alert('Hello') }
    // return <option disabled value={rev} >

       
    
    if(rev===`Doctor Isn't Available`)
    {
        return <option disabled value={rev} >

 
{ unavailableday = rev }
    
    
    
    
        </option>


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }

})

}
</select>
        </p>

):(
   day2==='Tue' ? (
    <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  
    
    
    
    >
         

    {
     
    doctors.tue && doctors.tue.map(rev => {
        if(rev===`Doctor Isn't Available`)
        {
            return <option disabled value={rev} >
    
     
    { unavailableday = rev }
        
        
        
        
            </option>
    
    
        }
        else
        {
            return <option value={rev} >
    
     
            {rev  } 
        
        
        
        
            </option>
        }
    
    })
    
    }
    </select>
   ) : (
       day2==='Wed' ? (
        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.wed && doctors.wed.map(rev => {
    if(rev===`Doctor Isn't Available`)
    {
        return <option disabled value={rev} >

 
{ unavailableday = rev }
    
    
    
    
        </option>


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }

})

}
</select>
    ) : (
        day2==='Thu' ? (
            <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

            {
             
            doctors.thu && doctors.thu.map(rev => {
                if(rev===`Doctor Isn't Available`)
                {
                    return <option disabled value={rev} >
            
             
            { unavailableday = rev }
                
                
                
                
                    </option>
            
            
                }
                else
                {
                    return <option value={rev} >
            
             
                    {rev  } 
                
                
                
                
                    </option>
                }
            
            })
            
            }
            </select>
        )  : (
            day2==='Fri' ? (
                <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.fri && doctors.fri.map(rev => {
    if(rev===`Doctor Isn't Available`)
    {
        return <option disabled value={rev} >

 
{ unavailableday = rev }
    
    
    
    
        </option>


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }

})

}
</select>
            )  : (
                day2==='Sat'?(
                    <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.sat && doctors.sat.map(rev => {
    if(rev===`Doctor Isn't Available`)
    {
        return <option disabled value={rev} >

 
{ unavailableday = rev }
    
    
    
    
        </option>


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }

})

}
</select>
                ) : (
                    day2==='Sun' ? (
                        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.sun && doctors.sun.map(rev => {
  
    if(rev===`Doctor Isn't Available`)
    {

        return <option disabled value={rev} >

 
        {/* {rev  }  */}
    
    
        { unavailableday = rev }
    
        </option>
    


    }
    else
    {
        return <option value={rev} >

 
        {rev  } 
    
    
    
    
        </option>
    }
        

})

}
</select>
                    ) : (
                        <p> </p>
                    )
                )
            )
        )
    )
   )
)

}
















{ShowAvailabilityEnglish()}







</div>





<input  

placeholder="Patient's Name" type='text'

value={name}
required

onChange={ (e)=>setname(e.target.value) }

style={{width:'90%', marginLeft:'5%'  }}

/>


<br/>
<input 
style={{width:'90%', marginLeft:'5%'}}
type='Number' value={contactnumber} placeholder="Patient's/Guardians Contact Number  "

required
onChange={ (e)=>{ setcontactnumber(e.target.value) } }  />




<br/><br/><br/><br/><br/><br/><br/><br/><br/>

<button 
value='submit' 
//onClick={bookappointment}

className='docdes-box1' style={{backgroundColor:'#0EB9B8' , color:'white' }}  > Book Appointment</button>


<h4  >OR</h4>
<br/>

<span  className='docdes-box1' style={{backgroundColor:'white' , border:'1px solid black'  }} 

onClick={ showcontact }


>

<i class="fa fa-phone" aria-hidden="true"></i>  
&nbsp;  Contact Clinic   </span>





</form>


<br/>




<p id="show-number" ></p>
<p id="show-date" ></p>

<br/><br/>

         </div>
 )
}       


              </p>
            ) : (
                <p>



                {loading ? (<Loader/>) : error ? ( <p> There's an error </p> ) :
                (
                    <div>
               
               <form onSubmit={bookappointment} >
               
               <div id='calendar-position' >
               <Calendar onChange={onChange} value={bookingdate}
               
               dateFormat = 'dd/MM/yyyy'
               
               minDate =  { new Date(yyyy,mm-1,dd)  }
               
               maxDate = { new Date( yyyy , mm-1 , dd2 ) }
               maxDetail = 'month'
               minDetail = 'month'
               
               
               />
               
               
               
               
               
               <br/>
               
               
               <p>
               <span style={{ 
                   fontSize:'large' ,
                   fontWeight:'bolder'
                }} > Available Slots  :  </span>
               
               </p>
               
               
               
               
               {
               
               day2==='Mon'?(
                   <p>
                       <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >
               
               {
                
               doctors.mon && doctors.mon.map(rev => {
               
                   // if( rev==`Doctor Isn't Available` ) { alert('Hello') }
                   // return <option disabled value={rev} >
               
                      
                   
                   if(rev===`Doctor Isn't Available`)
                   {
                       return <option disabled value={rev} >
               
                
               { unavailableday = rev }
                   
                   
                   
                   
                       </option>
               
               
                   }
                   else
                   {
                       return <option value={rev} >
               
                
                       {rev  } 
                   
                   
                   
                   
                       </option>
                   }
               
               })
               
               }
               </select>
                       </p>
               
               ):(
                  day2==='Tue' ? (
                   <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  
                   
                   
                   
                   >
                        
               
                   {
                    
                   doctors.tue && doctors.tue.map(rev => {
                       if(rev===`Doctor Isn't Available`)
                       {
                           return <option disabled value={rev} >
                   
                    
                   { unavailableday = rev }
                       
                       
                       
                       
                           </option>
                   
                   
                       }
                       else
                       {
                           return <option value={rev} >
                   
                    
                           {rev  } 
                       
                       
                       
                       
                           </option>
                       }
                   
                   })
                   
                   }
                   </select>
                  ) : (
                      day2==='Wed' ? (
                       <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >
               
               {
                
               doctors.wed && doctors.wed.map(rev => {
                   if(rev===`Doctor Isn't Available`)
                   {
                       return <option disabled value={rev} >
               
                
               { unavailableday = rev }
                   
                   
                   
                   
                       </option>
               
               
                   }
                   else
                   {
                       return <option value={rev} >
               
                
                       {rev  } 
                   
                   
                   
                   
                       </option>
                   }
               
               })
               
               }
               </select>
                   ) : (
                       day2==='Thu' ? (
                           <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >
               
                           {
                            
                           doctors.thu && doctors.thu.map(rev => {
                               if(rev===`Doctor Isn't Available`)
                               {
                                   return <option disabled value={rev} >
                           
                            
                           { unavailableday = rev }
                               
                               
                               
                               
                                   </option>
                           
                           
                               }
                               else
                               {
                                   return <option value={rev} >
                           
                            
                                   {rev  } 
                               
                               
                               
                               
                                   </option>
                               }
                           
                           })
                           
                           }
                           </select>
                       )  : (
                           day2==='Fri' ? (
                               <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >
               
               {
                
               doctors.fri && doctors.fri.map(rev => {
                   if(rev===`Doctor Isn't Available`)
                   {
                       return <option disabled value={rev} >
               
                
               { unavailableday = rev }
                   
                   
                   
                   
                       </option>
               
               
                   }
                   else
                   {
                       return <option value={rev} >
               
                
                       {rev  } 
                   
                   
                   
                   
                       </option>
                   }
               
               })
               
               }
               </select>
                           )  : (
                               day2==='Sat'?(
                                   <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >
               
               {
                
               doctors.sat && doctors.sat.map(rev => {
                   if(rev===`Doctor Isn't Available`)
                   {
                       return <option disabled value={rev} >
               
                
               { unavailableday = rev }
                   
                   
                   
                   
                       </option>
               
               
                   }
                   else
                   {
                       return <option value={rev} >
               
                
                       {rev  } 
                   
                   
                   
                   
                       </option>
                   }
               
               })
               
               }
               </select>
                               ) : (
                                   day2==='Sun' ? (
                                       <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >
               
               {
                
               doctors.sun && doctors.sun.map(rev => {
                 
                   if(rev===`Doctor Isn't Available`)
                   {
               
                       return <option disabled value={rev} >
               
                
                       {/* {rev  }  */}
                   
                   
                       { unavailableday = rev }
                   
                       </option>
                   
               
               
                   }
                   else
                   {
                       return <option value={rev} >
               
                
                       {rev  } 
                   
                   
                   
                   
                       </option>
                   }
                       
               
               })
               
               }
               </select>
                                   ) : (
                                       <p> </p>
                                   )
                               )
                           )
                       )
                   )
                  )
               )
               
               }
               
               
               
               
               
               
               
               {ShowAvailabilityEnglish()}

               
               
               
               
               
               
               
               
               
               
               
               
               
               </div>
               
               
               
               
               
               <input  
               
               placeholder="Patient's Name" type='text'
               
               value={name}
               required
               onChange={ (e)=>setname(e.target.value) }
               
               style={{width:'90%', marginLeft:'5%'  }}
               
               />
               
               
               
<br/>
<input 
style={{width:'90%', marginLeft:'5%'}}
type='Number' value={contactnumber} placeholder='Enter Contact Number'

required
onChange={ (e)=>{ setcontactnumber(e.target.value) } }  />
               
               
               
               <br/><br/><br/><br/><br/><br/><br/><br/><br/>
               
               <button 
               value='submit' 
               //onClick={bookappointment}
               
               className='docdes-box1' style={{backgroundColor:'#0EB9B8' , color:'white' }}  > Book Appointment</button>
               
               
               <h4  >OR</h4>
               <br/>
               
               <span  className='docdes-box1' style={{backgroundColor:'white' , border:'1px solid black'  }} 
               
               onClick={ showcontact }
               
               
               >
               
               <i class="fa fa-phone" aria-hidden="true"></i>  
               &nbsp;  Contact Clinic   </span>
               
               
               
               
               
               </form>
               
               
               <br/>
               
               
               
               
               <p id="show-number" ></p>
               <p id="show-date" ></p>
               
               <br/><br/>
               
                        </div>
                )
               }       
               

</p>
            )
          }
        </p> )
      }





                          


        </div>
    )

}

export default DrBooking;
