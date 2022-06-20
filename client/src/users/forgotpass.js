import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import { UserForgotPasswordAction } from "../actions/useraction";
import Loader from "../component/loader";
import { wind } from "fontawesome";


const ForgotPassword=()=>{

    const dispatch = useDispatch()

    const [email,setemail]=useState('')

    const sendmail=(e)=>{
        e.preventDefault()
       
        alert('An Email has been sent to you')
       // alert(email)
        dispatch(UserForgotPasswordAction(email))

        window.location.href='/resetpassword'


    }

    



    return(
        <div>
           <br/><br/><br/><br/><br/>
            <div style={{  width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'12px' , boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
        <br/>
            <h2>Forgot Password ?</h2>
            <h4 style={{color:'gray'}} >Enter Your Registered Email Id</h4>

            <form onSubmit={sendmail}  >

                <input type='text' style={{width:'80%', marginLeft:'10%' , marginRight:'auto'}} 
                
                value={email}

                onChange={ (e)=>{ setemail(e.target.value) } }
                
                placeholder='Enter Registered Email'

                ></input>


<div>
<button  

className='docdes-box1'
// style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , marginTop:'3%'  }} 


//style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

value='submit'

>
Next<i class="fa-solid fa-arrow-right"></i>
</button>
</div>
            </form>

<br/><br/><br/><br/><br/>
                </div>

        </div>
    )

}

export default ForgotPassword