import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import { UserForgotPasswordAction } from "../actions/useraction";
import Loader from "../component/loader";
import { wind } from "fontawesome";
import firebase from "../firebase";

const ForgotPassword = () => {

  const bengali = localStorage.getItem('bengali')
  const english = localStorage.getItem('english')





  const dispatch = useDispatch()

  const [email, setemail] = useState('')

  const [otp, setotp] = useState()

  const [contactnumber, setcontactnumber] = useState();
  const [verify, setverify] = useState()



  const configureCaptcha = () => {
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

  const onSignInSubmit = (e) => {
    e.preventDefault()
    configureCaptcha()

    const phoneNumber = "+91" + contactnumber

    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {

        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent")

      }).catch((error) => {

        console.log("SMS not sent", error)
      });


  }


  const onSubmitOTP = (e) => {
    e.preventDefault()
    const code = otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {

      const user = result.user;
      console.log(JSON.stringify(user))
      setverify(1)
      alert("OTP verified")
      dispatch(UserForgotPasswordAction(contactnumber))
      // window.location.href='/resetpassword'
      setverify(1)

    }).catch((error) => {
      alert('Invalid OTP')
      setverify(0)
      window.location.reload()
      setverify(0)
    });
  }



  const sendmail = (e) => {
    e.preventDefault()

    if (verify == 1) {

      // alert(email)
      //dispatch(UserForgotPasswordAction(contactnumber))

      window.location.href = '/resetpassword'

    }
    else {
      alert('Something went wrong')
      window.href.reload()
    }


    //dispatch(UserForgotPasswordAction(contactnumber))

  }





  return (
    <div>




      {
        bengali ? (<p>



          <br /><br /><br /><br /><br />
          <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
            <br />
            <h2>পাসওয়ার্ড ভুলে গেছেন ?
            </h2>
            <h4 style={{ color: 'gray' }} >আপনার নিবন্ধিত যোগাযোগ নম্বর লিখুন</h4>

            <form onSubmit={sendmail}  >



              <div id='otp-screen' style={{ marginTop: '5%' }} >
                <input type="number"

                  value={contactnumber}
                  required
                  onChange={(e) => { setcontactnumber(e.target.value) }}

                  style={{ marginLeft: '3%' }}

                  placeholder='যোগাযোগের নম্বর' />


                <div>
                  <button

                    className='docdes-box1'

                    style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}
                    id='gen-otp'

                    onClick={onSignInSubmit}

                  >
                    তৈরি করুন OTP
                  </button>
                </div>






                <input type="number"

                  value={otp}
                  required
                  onChange={(e) => { setotp(e.target.value) }}
                  name='otp'
                  style={{ marginLeft: '3%' }}
                  placeholder='Enter OTP' />


                <div>
                  <button
                    className='docdes-box1'
                    style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}
                    id='gen-otp'
                    onClick={onSubmitOTP}

                  >
                    যাচাই করুন
                    OTP
                  </button>

                </div>




                <div id="sign-in-button"></div>




              </div>



              <br /><br />


              <div>
                <button

                  className='docdes-box1'
                  // style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
                  style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}


                  //style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

                  value='submit'

                >
                  পরবর্তী<i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>

            <br /><br /><br /><br /><br />
          </div>






        </p>) : (<p>
          {
            english ? (
              <p>



                <br /><br /><br /><br /><br />
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
                  <br />
                  <h2>Forgot Password ?</h2>
                  <h4 style={{ color: 'gray' }} >Enter Your Registered Contact Number</h4>

                  <form onSubmit={sendmail}  >



                    <div id='otp-screen' style={{ marginTop: '5%' }} >
                      <input type="number"

                        value={contactnumber}
                        required
                        onChange={(e) => { setcontactnumber(e.target.value) }}

                        style={{ marginLeft: '3%' }}

                        placeholder='Contact Number' />


                      <div>
                        <button

                          className='docdes-box1'

                          style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}
                          id='gen-otp'

                          onClick={onSignInSubmit}

                        >
                          Generate OTP
                        </button>
                      </div>






                      <input type="number"

                        value={otp}
                        required
                        onChange={(e) => { setotp(e.target.value) }}
                        name='otp'
                        style={{ marginLeft: '3%' }}
                        placeholder='Enter OTP' />


                      <div>
                        <button
                          className='docdes-box1'
                          style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}
                          id='gen-otp'
                          onClick={onSubmitOTP}

                        >
                          Verify OTP
                        </button>

                      </div>




                      <div id="sign-in-button"></div>




                    </div>



                    <br /><br />


                    <div>
                      <button

                        className='docdes-box1'
                        // style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
                        style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}


                        //style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

                        value='submit'

                      >
                        Next<i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>

                  <br /><br /><br /><br /><br />
                </div>






              </p>
            ) : (
              <p>


                <br /><br /><br /><br /><br />
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
                  <br />
                  <h2>Forgot Password ?</h2>
                  <h4 style={{ color: 'gray' }} >Enter Your Registered Contact Number</h4>

                  <form onSubmit={sendmail}  >



                    <div id='otp-screen' style={{ marginTop: '5%' }} >
                      <input type="number"

                        value={contactnumber}
                        required
                        onChange={(e) => { setcontactnumber(e.target.value) }}

                        style={{ marginLeft: '3%' }}

                        placeholder='Contact Number' />


                      <div>
                        <button

                          className='docdes-box1'

                          style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}
                          id='gen-otp'

                          onClick={onSignInSubmit}

                        >
                          Generate OTP
                        </button>
                      </div>






                      <input type="number"

                        value={otp}
                        required
                        onChange={(e) => { setotp(e.target.value) }}
                        name='otp'
                        style={{ marginLeft: '3%' }}
                        placeholder='Enter OTP' />


                      <div>
                        <button
                          className='docdes-box1'
                          style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}
                          id='gen-otp'
                          onClick={onSubmitOTP}

                        >
                          Verify OTP
                        </button>

                      </div>




                      <div id="sign-in-button"></div>




                    </div>



                    <br /><br />


                    <div>
                      <button

                        className='docdes-box1'
                        // style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
                        style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}


                        //style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

                        value='submit'

                      >
                        Next<i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>

                  <br /><br /><br /><br /><br />
                </div>





              </p>
            )
          }
        </p>)
      }





    </div>
  )

}

export default ForgotPassword