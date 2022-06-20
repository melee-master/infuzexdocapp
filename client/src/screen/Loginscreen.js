import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import './login.css'
import Loader from "../component/loader";
import { LoginUser } from "../actions/useraction";
import { LoginUserReducer } from "../reducers/userreducer";

const LoginScreen = () => {

    const loginreducer = useSelector(state=>state.LoginUserReducer)

    const {loading , error} = loginreducer

    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    

    const dispatch = useDispatch()

    const login=(e)=>{

        e.preventDefault()

        const user ={
            name : name , 
            email:email ,
            password:password
        }


      dispatch(LoginUser(user))
      document.getElementById('Message').innerHTML=error
    }


    useEffect( ()=>{

        if(localStorage.getItem('currentuser'))
        {
            window.location.href='/'
        }


    } ,[])






    return (
        <div>

            <div className="boxgrid-notinuse" >

               




              <br/> <br/> <br/>

             
                    <div id="loginbox" >
                    <form onSubmit={login}   >
                        <h1> Login </h1>
                        <h5> New Here ? <a href="/signup"> Registere Here </a>  </h5>
                        <hr/>

                    <label className="formtext" >Enter Email</label>
                                    <input type="text"

value={email} 
                                        required
                                      
                                        onChange={ (e)=>{ setemail(e.target.value) } }   
                                        placeholder='Enter Email' />



                    <label className="formtext" >Enter Password</label>
                                    <input type="password"
value={password}
                                       
                                        required

                                        onChange={ (e)=>{ setpassword(e.target.value) } } 
                                      

                                        placeholder='Enter Password' />   


                   

<button  type='submit' 
className='box1' 


id="signupbtn"

style={{marginTop:'10px'   }}


>Login</button>

{loading && <Loader/>}
<p id='Message'   ></p>


</form>


<h5>Forgot Password? <a href='/forgotpass'>Click Here</a> </h5>

                    </div>


                
            




            </div>





        </div>
    )


}


export default LoginScreen;