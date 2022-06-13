import React from "react";
import './userscreen.css';
import img1 from  '../Images/userpic.png';

const DoctorWelcomeScreen=()=>{

    return(
        <div>

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






        </div>
    )


}


export default DoctorWelcomeScreen;