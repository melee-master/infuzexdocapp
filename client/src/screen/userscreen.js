import React from "react";
import './userscreen.css';
import img1 from  '../Images/userpic.png';
import user from '../Images/user.png'

const UserWelcomeScreen=()=>{
    const bengali = localStorage.getItem('bengali')
const english = localStorage.getItem('english')



    return(

        

        <div>

{
        bengali ? ( <p>
  <div id="containerbox" >

<p> 

    <img src={user} id="img"  ></img>


</p>



<p  >


<div 
id="boxcontain2"
 >
   
        <a href="/login" style={{color:'black'}}>
        <p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
প্রবেশ করুন
</p>
    </a>

   
    <a href="/signup"  >
    <p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'black' }} 
>
নিবন্ধন করুন
</p>
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

    <img src={user} id="img"  ></img>


</p>



<p  >


<div 
id="boxcontain2"
 >
   
        <a href="/login" style={{color:'black'}}>
        <p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
Login </p>
    </a>

   
    <a href="/signup"  >
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

    <img src='https://i.pinimg.com/736x/ba/49/9f/ba499f12a35aeaf61feede588dac49c7.jpg' id="img"  ></img>


</p>



<p  >


<div 
id="boxcontain2"
 >
   
        <a href="/login" style={{color:'black'}}>
        <p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
Login </p>
    </a>

   
    <a href="/signup"  >
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


export default UserWelcomeScreen;