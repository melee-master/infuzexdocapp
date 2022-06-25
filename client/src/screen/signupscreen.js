import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import pic1 from '../Images/userpic.png'
import Loader from "../component/loader";
import { RegisterNewUser } from "../actions/useraction";
import { RegisterUserReducer } from "../reducers/userreducer";
import firebase from "../firebase";
import './userscreen.css'


const SignUpScreen = () => {

   

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    



    const registreducer = useSelector(state => state.RegisterUserReducer)

    const dispatch = useDispatch()
    const { loading, error, success } = registreducer

    const [name, setname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [contactnumber, setcontactnumber] = useState();
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [verify,setverify] = useState()



    const [otp,setotp]=useState()



    const configureCaptcha = () =>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
            console.log("Recaptca varified")
          },
          defaultCountry: "IN"
        });
      }
   
  const onSignInSubmit=(e)=>{
    e.preventDefault()
    configureCaptcha()
  
   const  phoneNumber = "+91" + contactnumber
  
   console.log(phoneNumber)
      const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
          
            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent")
            
          }).catch((error) => {
           
            console.log("SMS not sent",error)
          });
  
  
  }
  
  
  const onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      
      const user = result.user;
      console.log(JSON.stringify(user))
      setverify(1)
      alert("OTP verified")
      setverify(1)
      
    }).catch((error) => {
      alert('Invalid OTP')
      setverify(0)
      window.location.reload()
      setverify(0)
    });
  }
  
  
  

  

    const register = (e) => {

        e.preventDefault()

        if(verify==1)
        {
            const user = {
                name: name,
                lname: lname,
                contactnumber: contactnumber,
                email: email,
                password: password
            }
    
    
            if (password === cpassword) {
                dispatch(RegisterNewUser(user))
            }
            else {
                document.getElementById('Message').innerHTML = 'Passwords Not Matched'
                //alert('Passwords Not Matched')
            }
        }
        else{
            alert('Error')
        }

        



    }


    const meta = {
        title: 'Doctrap',
        description: 'Signup Page for Doctrap',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness 
            
            `
          }
        }
      };





    useEffect( ()=>{

        if((localStorage.getItem('currentuser')) || (localStorage.getItem('doctor')) ||  (localStorage.getItem('compounder')) ||  (localStorage.getItem('admin')))
        {
            window.location.href='/'
        }


    } ,[])




    return (

        <DocumentMeta {...meta}>

{
        bengali ? ( <p>


<div className="boxgrid" >

<p>

    <img src='https://i.pinimg.com/736x/8b/76/eb/8b76ebf906d93b0fee4f554c5431c5c7--clip-art-free-fair-use.jpg'
        id="sideimg" />


</p>




<p>

    <form onSubmit={register} >

        <div id="loginbox" >


        <h1> এখানে নিবন্ধন করুন </h1>

<p> ইতিমধ্যে একটি সদস্যপদ আছে ?  <a href="/login"> এখানে লগইন করুন </a>  </p>

<hr />

            <div className="boxgrid">

                <p  >
                <label className="formtext" >নামের প্রথম অংশ</label>
                                    <input type="text"

                                        value={name}
                                        required
                                        onChange={(e) => { setname(e.target.value) }}

                                        placeholder='রত' />
                </p>

                <p style={{ marginLeft: '5px' }}>
                <label className="formtext">নামের শেষাংশ</label>


<input type="text" placeholder='শেষ নাম লিখুন'

    value={lname}
    required
    onChange={(e) => { setlname(e.target.value) }}

/>


                </p>

                </div>

                

                <p>
                <label className="formtext">ইমেইল আইডি</label>
<input type="text"

    value={email}
    required
    onChange={(e) => { setemail(e.target.value) }}

    placeholder='ইমেইল আইডি দিন' />

                </p>


<div id='otp-screen' >
                <p style={{ marginLeft: '5px' }} >

               

                <label className="formtext">যোগাযোগের নম্বর</label>
                                    <input type="Number"

                                        value={contactnumber}
                                        required
                                        onChange={(e) => { setcontactnumber(e.target.value) }}


                                        placeholder='যোগাযোগের নম্বর' />


</p>

<div>
<button  

className='docdes-box1'
// style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left'  ,marginTop:'22%'  }} 


//style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

onClick={onSignInSubmit}
id='gen-otp'
>
OTP জেনারেট করুন
</button>
</div>

<p  >

<label className="formtext">OTP লিখুন
</label>
<input type="number"

value={otp}
required
onChange={(e) => { setotp(e.target.value) }}
name='otp'

placeholder='OTP লিখুন
' />


</p>

<div>
<button 
className='docdes-box1'
// style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' ,marginTop:'22%' }} 

onClick={onSubmitOTP}
id='gen-otp'
>
OTP যাচাই করুন
</button>

</div>




<div id="sign-in-button"></div>


</div>

<div>

                <p>
                <label className="formtext">পাসওয়ার্ড</label>
                                    <input type="password"

                                        value={password}
                                        required
                                        onChange={(e) => { setpassword(e.target.value) }}


                                        placeholder='পাসওয়ার্ড লিখুন' />

                </p>

                <p style={{ marginLeft: '5px' }} >
                <label className="formtext">পাসওয়ার্ড নিশ্চিত করুন</label>
                                    <input type="password" placeholder='কনফার্ম পাসওয়ার্ড দিন'

                                        value={cpassword}
                                        required
                                        onChange={(e) => { setcpassword(e.target.value) }}



                                    />

                </p>




            </div>
            <button type='submit' className='box1' id="signupbtn" 
            
            style={{marginTop:'10px' , marginLeft:'40%' , marginRight:'40%'  }}

            >নিবন্ধন করুন</button>

        

            {loading && ( <Loader/> ) }

            <br/><br/>


            {error && ( <p  id="message" >ইমেলটি ইতিমধ্যেই নিবন্ধন</p> )  }

{success && ( <p  id="message" >সাফল্যের সাথে নিবন্ধিত</p> ) }









        </div>


    </form>




</p>







</div>





        </p> ) : ( <p>
          {
            english ? (
              <p>
 <div>



<div className="boxgrid" >

    <p>

        <img src='https://i.pinimg.com/736x/8b/76/eb/8b76ebf906d93b0fee4f554c5431c5c7--clip-art-free-fair-use.jpg'
            id="sideimg" />


    </p>




    <p>

        <form onSubmit={register} >

            <div id="loginbox" >


                <h1> Register Here </h1>

                <p> Already have an account ?  <a href="/login"> Login Here </a>  </p>

                <hr />


                <div className="boxgrid">

                    <p  >
                        <label className="formtext" >First Name</label>
                        <input type="text"

                            value={name}
                            required
                            onChange={(e) => { setname(e.target.value) }}

                            placeholder='Enter Name' />
                    </p>

                    <p style={{ marginLeft: '5px' }}>
                        <label className="formtext">Last Name</label>


                        <input type="text" placeholder='Enter Last Name'

                            value={lname}
                            required
                            onChange={(e) => { setlname(e.target.value) }}

                        />

                    </p>

                    </div>

                    

                    <p>
                        <label className="formtext"




                        >Email Id</label>
                        <input type="text"

                            value={email}
                            required
                            onChange={(e) => { setemail(e.target.value) }}

                            placeholder='Enter Email Id' />

                    </p>


<div id='otp-screen' >
                    <p style={{ marginLeft: '5px' }} >

                   

<label className="formtext">Contact Number</label>
<input type="number"

value={contactnumber}
required
onChange={(e) => { setcontactnumber(e.target.value) }}


placeholder='Contact Number' />


</p>

<div>
<button  

className='docdes-box1'

style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left'   }} 
id='gen-otp'

onClick={onSignInSubmit}

>
Generate OTP
</button>
</div>

<p  >

<label className="formtext">Enter OTP</label>
<input type="number"

value={otp}
required
onChange={(e) => { setotp(e.target.value) }}
name='otp'

placeholder='Enter OTP' />


</p>

<div>
<button 
className='docdes-box1'
style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left'   }} 
id='gen-otp'
onClick={onSubmitOTP}

>
Verify OTP
</button>

</div>




<div id="sign-in-button"></div>


</div>

<div>

                    <p>
                        <label className="formtext">Password</label>
                        <input type="password"

                            value={password}
                            required
                            onChange={(e) => { setpassword(e.target.value) }}


                            placeholder='Enter Password' />

                    </p>

                    <p style={{ marginLeft: '5px' }} >
                        <label className="formtext">Confirm Password</label>
                        <input type="password" placeholder='Enter Confirm Password'

                            value={cpassword}
                            required
                            onChange={(e) => { setcpassword(e.target.value) }}



                        />

                    </p>




                </div>
                <button type='submit' className='box1' id="signupbtn"
                
                style={{marginTop:'10px' , marginLeft:'40%' , marginRight:'40%'  }}

                >SignUp</button>

            

                {loading && ( <Loader/> ) }

                <br/><br/>


                {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }








            </div>


        </form>




    </p>







</div>





</div>

              </p>
            ) : (
              <p>





<div className="boxgrid" >

    <p>

        <img src='https://i.pinimg.com/736x/8b/76/eb/8b76ebf906d93b0fee4f554c5431c5c7--clip-art-free-fair-use.jpg'
            id="sideimg" />


    </p>




    <p>

        <form onSubmit={register} >

            <div id="loginbox" >


                <h1> Register Here </h1>

                <p> Already have an account ?  <a href="/login"> Login Here </a>  </p>

                <hr />


                <div className="boxgrid">

                    <p  >
                        <label className="formtext" >First Name</label>
                        <input type="text"

                            value={name}
                            required
                            onChange={(e) => { setname(e.target.value) }}

                            placeholder='Enter Name' />
                    </p>

                    <p style={{ marginLeft: '5px' }}>
                        <label className="formtext">Last Name</label>


                        <input type="text" placeholder='Enter Last Name'

                            value={lname}
                            required
                            onChange={(e) => { setlname(e.target.value) }}

                        />

                    </p>

                    </div>

                    

                    <p>
                        <label className="formtext"




                        >Email Id</label>
                        <input type="text"

                            value={email}
                            required
                            onChange={(e) => { setemail(e.target.value) }}

                            placeholder='Enter Email Id' />

                    </p>


<div id='otp-screen' >
                    <p style={{ marginLeft: '5px' }} >

                   

<label className="formtext">Contact Number</label>
<input type="number"

value={contactnumber}
required
onChange={(e) => { setcontactnumber(e.target.value) }}


placeholder='Contact Number' />


</p>

<div>
<button  

className='docdes-box1'
// style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left'  ,marginTop:'22%'  }} 


//style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

onClick={onSignInSubmit}

>
Generate OTP
</button>
</div>

<p  >

<label className="formtext">Enter OTP</label>
<input type="number"

value={otp}
required
onChange={(e) => { setotp(e.target.value) }}
name='otp'

placeholder='Enter OTP' />


</p>

<div>
<button 
className='docdes-box1'
// style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' ,marginTop:'22%' }} 

onClick={onSubmitOTP}

>
Verify OTP
</button>

</div>




<div id="sign-in-button"></div>


</div>

<div>

                    <p>
                        <label className="formtext">Password</label>
                        <input type="password"

                            value={password}
                            required
                            onChange={(e) => { setpassword(e.target.value) }}


                            placeholder='Enter Password' />

                    </p>

                    <p style={{ marginLeft: '5px' }} >
                        <label className="formtext">Confirm Password</label>
                        <input type="password" placeholder='Enter Confirm Password'

                            value={cpassword}
                            required
                            onChange={(e) => { setcpassword(e.target.value) }}



                        />

                    </p>




                </div>
                <button type='submit' className='box1' id="signupbtn" 
                style={{marginTop:'10px' , marginLeft:'40%' , marginRight:'40%'  }}  >SignUp</button>

            

                {loading && ( <Loader/> ) }

                <br/><br/>


                {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }








            </div>


        </form>




    </p>







</div>






                </p>
            )
          }
        </p> )
      }



       
        </DocumentMeta>
    )


}


export default SignUpScreen;