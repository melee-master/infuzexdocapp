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

                
                <p>

                    <div id="boxcontain" >
                        <a href="/drlogin" style={{color:'black'}}>
                    <div className="box2" id="bxx" >
                        Login
                    </div>
                    </a>

                   
                    <a href="/drsignup">
                    <div className="box1" id="bxx"
                    
                    
                    
                    >
                        Register
                    </div>
                    </a>
                        </div>
                    
                    
                    
                    
                    </p>


            </div>






        </div>
    )


}


export default DoctorWelcomeScreen;