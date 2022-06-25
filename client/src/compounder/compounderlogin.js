import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import Loader from "../component/loader";
import { LoginCompounder } from "../actions/compounderaction";
import { LoginCompounderReducer } from "../reducers/compounderreducer";

const CompounderLogin = () => {


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')





    const loginreducer = useSelector(state => state.LoginCompounderReducer)

    const { loading, error } = loginreducer

    const [name, setname] = useState('')
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


        dispatch(LoginCompounder(user))
        document.getElementById('Message').innerHTML = error
    }

    const meta = {
        title: 'Doctrap',
        description: 'Doctor Signup ',
        canonical: 'http://example.com/path/to/page',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness
                
                
                `
            }
        }
    };


    useEffect(() => {

        if (localStorage.getItem('compounder')) {
            window.location.href = '/compounder'
        }
        else if (localStorage.getItem('currentuser') || localStorage.getItem('doctor') || localStorage.getItem('admin')) {

            window.location.href = '/homescreen'
        }


    }, [])







    return (
        <div>


            {
                bengali ? (<p>






                    <DocumentMeta>

                        <div id="loginbox" >
                            <form onSubmit={login}   >
                                <h1> কম্পাউন্ডার লগইন
                                </h1>

                                <hr />

                                <label className="formtext" >ইমেইল প্রদান করুন
                                </label>
                                <input type="text"

                                    value={email}
                                    required

                                    onChange={(e) => { setemail(e.target.value) }}
                                    placeholder='ইমেইল প্রদান করুন' />



                                <label className="formtext" >পাসওয়ার্ড লিখুন</label>
                                <input type="password"
                                    value={password}

                                    required

                                    onChange={(e) => { setpassword(e.target.value) }}


                                    placeholder='পাসওয়ার্ড লিখুন' />




                                <button type='submit' className='box1' id="signupbtn"

                                    style={{ marginTop: '10px', marginLeft: '40%', marginRight: '40%' }}


                                >প্রবেশ করুন</button>

                                {loading && <Loader />}
                                <p id='Message'   ></p>



                            </form>

                        </div>








                    </DocumentMeta>








                </p>) : (<p>
                    {
                        english ? (
                            <p>








                                <DocumentMeta>
                                    <br />   <br />
                                    <div id="loginbox" >

                                        <form onSubmit={login}   >
                                            <h1> Compounder Login </h1>

                                            <hr />

                                            <label className="formtext" >Enter Number</label>
                                            <input type="text"

                                                value={email}
                                                required

                                                onChange={(e) => { setemail(e.target.value) }}
                                                placeholder='Enter Number' />



                                            <label className="formtext" >Enter Password</label>
                                            <input type="password"
                                                value={password}

                                                required

                                                onChange={(e) => { setpassword(e.target.value) }}


                                                placeholder='Enter Password' />




                                            <button type='submit' className='box1' id="signupbtn"

                                                style={{ marginTop: '10px', marginLeft: '40%', marginRight: '40%' }}


                                            >LOGIN</button>

                                            {loading && <Loader />}
                                            <p id='Message'   ></p>



                                        </form>

                                    </div>








                                </DocumentMeta>





                            </p>
                        ) : (
                            <p>








                                <DocumentMeta>
                                    <br />   <br />
                                    <div id="loginbox" >

                                        <form onSubmit={login}   >
                                            <h1> Compounder Login </h1>

                                            <hr />

                                            <label className="formtext" >Enter User Id</label>
                                            <input type="text"

                                                value={email}
                                                required

                                                onChange={(e) => { setemail(e.target.value) }}
                                                placeholder='Enter User Id' />



                                            <label className="formtext" >Enter Password</label>
                                            <input type="password"
                                                value={password}

                                                required

                                                onChange={(e) => { setpassword(e.target.value) }}


                                                placeholder='Enter Password' />




                                            <button type='submit' className='box1' id="signupbtn"

                                                style={{ marginTop: '10px', marginLeft: '40%', marginRight: '40%' }}


                                            >LOGIN</button>

                                            {loading && <Loader />}
                                            <p id='Message'   ></p>



                                        </form>

                                    </div>








                                </DocumentMeta>





                            </p>
                        )
                    }
                </p>)
            }





        </div>
    )


}

export default CompounderLogin;