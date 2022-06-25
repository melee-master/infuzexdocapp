import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import './login.css'
import Loader from "../component/loader";
import { LoginUser } from "../actions/useraction";
import { LoginUserReducer } from "../reducers/userreducer";

const LoginScreen = () => {

  const loginreducer = useSelector(state => state.LoginUserReducer)

  const { loading, error } = loginreducer

  const [name, setname] = useState()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const dispatch = useDispatch()

  const login = (e) => {

    e.preventDefault()

    const user = {
      name: name,
      email: email,
      password: password
    }


    dispatch(LoginUser(user))
    document.getElementById('Message').innerHTML = error
  }


  useEffect(() => {

    if ((localStorage.getItem('currentuser')) || (localStorage.getItem('doctor')) || (localStorage.getItem('compounder')) || (localStorage.getItem('admin'))) {
      window.location.href = '/'
    }


  }, [])


  const bengali = localStorage.getItem('bengali')
  const english = localStorage.getItem('english')




  return (
    <div>

      {
        bengali ? (<p>


          <div className="boxgrid-notinuse" >






            <br /> <br /> <br />


            <div id="loginbox" >
              <form onSubmit={login}   >
                <h1> প্রবেশ করুন </h1>
                <h5> এখানে নতুন ? <a href="/signup"> এখানে নিবন্ধন করুন </a>  </h5>
                <hr />

                <label className="formtext" >যোগাযোগের নম্বর লিখুন
</label>
                <input type="Number"

                  value={email}
                  required

                  onChange={(e) => { setemail(e.target.value) }}
                  placeholder='যোগাযোগের নম্বর লিখুন' />



                <label className="formtext" >পাসওয়ার্ড লিখুন</label>
                <input type="password"
                  value={password}

                  required

                  onChange={(e) => { setpassword(e.target.value) }}


                  placeholder='পাসওয়ার্ড লিখুন' />




                <button type='submit'
                  className='box1'


                  id="signupbtn"

                  style={{ marginTop: '10px', marginLeft: '40%', marginRight: '40%' }}


                >প্রবেশ করুন</button>

                {loading && <Loader />}
                <p id='Message'   ></p>


              </form>
              <br />
              <h6>পাসওয়ার্ড ভুলে গেছেন

                <a href='/forgotpass'>এখানে ক্লিক করুন
                </a> </h6>

            </div>








          </div>



        </p>) : (<p>
          {
            english ? (

              <div className="boxgrid-notinuse" >






                <br /> <br /> <br />


                <div id="loginbox" >
                  <form onSubmit={login}   >
                    <h1> Login </h1>
                    <h5> New Here ? <a href="/signup"> Registere Here </a>  </h5>
                    <hr />

                    <label className="formtext" >Enter Contact Number</label>
                    <input type="Number"

                      value={email}
                      required

                      onChange={(e) => { setemail(e.target.value) }}
                      placeholder='Contact Number' />



                    <label className="formtext" >Enter Password</label>
                    <input type="password"
                      value={password}

                      required

                      onChange={(e) => { setpassword(e.target.value) }}


                      placeholder='Enter Password' />




                    <button type='submit'
                      className='box1'


                      id="signupbtn"

                      style={{ marginTop: '10px', marginLeft: '40%', marginRight: '40%' }}


                    >Login</button>

                    {loading && <Loader />}
                    <p id='Message'   ></p>


                  </form>


                  <h5>Forgot Password? <a href='/forgotpass'>Click Here</a> </h5>

                </div>








              </div>

            ) : (

              <div className="boxgrid-notinuse" >






                <br /> <br /> <br />


                <div id="loginbox" >
                  <form onSubmit={login}   >
                    <h1> Login </h1>
                    <h5> New Here ? <a href="/signup"> Registere Here </a>  </h5>
                    <hr />

                    <label className="formtext" >Enter Contact Number</label>
                    <input type="Number"

                      value={email}
                      required

                      onChange={(e) => { setemail(e.target.value) }}
                      placeholder='Contact Number' />



                    <label className="formtext" >Enter Password</label>
                    <input type="password"
                      value={password}

                      required

                      onChange={(e) => { setpassword(e.target.value) }}


                      placeholder='Enter Password' />




                    <button type='submit'
                      className='box1'


                      id="signupbtn"

                      style={{ marginTop: '10px', marginLeft: '40%', marginRight: '40%' }}


                    >Login</button>

                    {loading && <Loader />}
                    <p id='Message'   ></p>


                  </form>


                  <h5>Forgot Password? <a href='/forgotpass'>Click Here</a> </h5>

                </div>








              </div>

            )
          }
        </p>)
      }








    </div>
  )


}


export default LoginScreen;