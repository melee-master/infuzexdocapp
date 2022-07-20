import React from "react";
import './userscreen.css';
import img1 from  '../Images/userpic.png';

const DoctorWelcomeScreen=()=>{


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')



    return(
        <div>

{
        bengali ? ( <p>

<div id="containerbox" >

<p> 

    <img src='https://static.vecteezy.com/system/resources/thumbnails/001/811/682/small_2x/online-medicine-with-doctor-and-smartphone-free-vector.jpg' id="img"  ></img>


</p>







<p  >


<div 
id="boxcontain2"
>

<a href="/drlogin" style={{color:'black'}}>
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
প্রবেশ করুন</p>
</a>


<a href="/drsignup"  >
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'black' }} 
>
নিবন্ধন করুন </p>
</a>




</div>
</p>


</div>

        </p> ) : ( <p>
          {
            english ? (
              <p>

<div id="containerbox" >

<p> 

    <img src='https://static.vecteezy.com/system/resources/thumbnails/001/811/682/small_2x/online-medicine-with-doctor-and-smartphone-free-vector.jpg' id="img"  ></img>


</p>







<p  >


<div 
id="boxcontain2"
>

<a href="/drlogin" style={{color:'black'}}>
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
Login </p>
</a>


<a href="/drsignup"  >
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'black' }} 
>
Signup  </p>
</a>




</div>
</p>


</div>
              </p>
            ) : (
              <p>
     <div id="containerbox" >

<p> 

    <img src='https://static.vecteezy.com/system/resources/thumbnails/001/811/682/small_2x/online-medicine-with-doctor-and-smartphone-free-vector.jpg' id="img"  ></img>


</p>







<p  >


<div 
id="boxcontain2"
>

<a href="/drlogin" style={{color:'black'}}>
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
Login </p>
</a>


<a href="/drsignup"  >
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'black' }} 
>
Signup  </p>
</a>




</div>
</p>


</div>

                </p>
            )
          }
        </p> )
      }


       






        </div>
    )


}


export default DoctorWelcomeScreen;