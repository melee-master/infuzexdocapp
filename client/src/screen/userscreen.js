import React from "react";
import './userscreen.css';
import img1 from  '../Images/userpic.png';

const UserWelcomeScreen=()=>{

    return(
        <div>

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






        </div>
    )


}


export default UserWelcomeScreen;