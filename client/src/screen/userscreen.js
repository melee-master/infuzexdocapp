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
                <p>

                    <div id="boxcontain" >
                        <a href="/login" style={{color:'black'}}>
                    <div className="box2" id="bxx" >
                        Login
                    </div>
                    </a>

                   
                    <a href="/signup"  >
                    <div className="box1" id="bxx"  >
                        Register
                    </div>
                    </a>
                        </div>
                    
                    
                    
                    
                    </p>


            </div>






        </div>
    )


}


export default UserWelcomeScreen;