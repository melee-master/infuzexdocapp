import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';

import Loader from "../component/loader";
import { UserResetPasswordAction } from "../actions/useraction";


const ResetPassword = () => {


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')







    const dispatch = useDispatch()

    const [userid, setuserid] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const resetpassword = (e) => {
        e.preventDefault()
        if (password == cpassword) {
            dispatch(UserResetPasswordAction(userid, password))
            document.getElementById('right-password').innerHTML = "Your Password has been Updated! Please Login"
            setTimeout(function () { window.location.href = '/login' }, 2000);
        }
        else {

            document.getElementById('wrong-password').innerHTML = "Passwords Didn't Match"
        }
    }


    return (
        <div>



            {
                bengali ? (<p>








                    <br /><br /><br /><br /><br />
                    <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
                        <br />
                        <h2>
                            পাসওয়ার্ড রিসেট</h2>
                        <h4 style={{ color: 'gray' }} >আপনার নিবন্ধিত ইমেল আইডিতে আপনাকে পাঠানো বিশদ বিবরণ লিখুন
                        </h4>

                        <form onSubmit={resetpassword}  >


                            <input type='text' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                value={userid}
                                placeholder='ইউজার আইডি দিন'
                                onChange={(e) => { setuserid(e.target.value) }}
                            ></input>

                            <input type='password' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                value={password}
                                placeholder='নতুন পাসস্বরদ দিন'
                                onChange={(e) => { setpassword(e.target.value) }}
                            ></input>



                            <input type='password' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                value={cpassword}
                                placeholder='
                নিশ্চিত কর নতুন গোপননম্বর'
                                onChange={(e) => { setcpassword(e.target.value) }}
                            ></input>



                            <div>
                                <button

                                    className='docdes-box1'
                                    // style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
                                    style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}


                                    //style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

                                    value='submit'

                                >
                                   পাসওয়ার্ড রিসেট করুন
 <i class="fas fa-undo"></i>

                                </button>
                            </div>
                        </form>

                        <p id='wrong-password' style={{ color: 'red' }} ></p>
                        <p id='right-password' style={{ color: 'green' }} ></p>

                        <br />
                    </div>








                </p>) : (<p>
                    {
                        english ? (
                            <p>






                                <br /><br /><br /><br /><br />
                                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
                                    <br />
                                    <h2>Password Reset</h2>
                                    <h4 style={{ color: 'gray' }} >Enter details sent to you on your registered Email Id</h4>

                                    <form onSubmit={resetpassword}  >


                                        <input type='text' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                            value={userid}
                                            placeholder='Enter the User ID'
                                            onChange={(e) => { setuserid(e.target.value) }}
                                        ></input>

                                        <input type='password' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                            value={password}
                                            placeholder='Enter New Password'
                                            onChange={(e) => { setpassword(e.target.value) }}
                                        ></input>



                                        <input type='password' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                            value={cpassword}
                                            placeholder='Confirm New Password'
                                            onChange={(e) => { setcpassword(e.target.value) }}
                                        ></input>



                                        <div>
                                            <button

                                                className='docdes-box1'
                                                // style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
                                                style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}


                                                //style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

                                                value='submit'

                                            >
                                                Reset Password <i class="fas fa-undo"></i>

                                            </button>
                                        </div>
                                    </form>

                                    <p id='wrong-password' style={{ color: 'red' }} ></p>
                                    <p id='right-password' style={{ color: 'green' }} ></p>

                                    <br />
                                </div>






                            </p>
                        ) : (
                            <p>






                                <br /><br /><br /><br /><br />
                                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
                                    <br />
                                    <h2>Password Reset</h2>
                                    <h4 style={{ color: 'gray' }} >Enter details sent to you on your registered Email Id</h4>

                                    <form onSubmit={resetpassword}  >


                                        <input type='text' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                            value={userid}
                                            placeholder='Enter the User ID'
                                            onChange={(e) => { setuserid(e.target.value) }}
                                        ></input>

                                        <input type='password' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                            value={password}
                                            placeholder='Enter New Password'
                                            onChange={(e) => { setpassword(e.target.value) }}
                                        ></input>



                                        <input type='password' style={{ width: '80%', marginLeft: '10%', marginRight: 'auto' }}

                                            value={cpassword}
                                            placeholder='Confirm New Password'
                                            onChange={(e) => { setcpassword(e.target.value) }}
                                        ></input>



                                        <div>
                                            <button

                                                className='docdes-box1'
                                                // style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}
                                                style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', marginRight: 'auto', marginLeft: 'left', marginTop: '3%' }}


                                                //style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

                                                value='submit'

                                            >
                                                Reset Password <i class="fas fa-undo"></i>

                                            </button>
                                        </div>
                                    </form>

                                    <p id='wrong-password' style={{ color: 'red' }} ></p>
                                    <p id='right-password' style={{ color: 'green' }} ></p>

                                    <br />
                                </div>





                            </p>
                        )
                    }
                </p>)
            }




        </div>

    )

}


export default ResetPassword;