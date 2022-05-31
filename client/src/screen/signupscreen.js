import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import pic1 from '../Images/userpic.png'
import Loader from "../component/loader";
import { RegisterNewUser } from "../actions/useraction";
import { RegisterUserReducer } from "../reducers/userreducer";


const SignUpScreen = () => {

   



    const registreducer = useSelector(state => state.RegisterUserReducer)

    const dispatch = useDispatch()
    const { loading, error, success } = registreducer

    const [name, setname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [contactnumber, setcontactnumber] = useState();
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')


    const register = (e) => {

        e.preventDefault()

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

        if(localStorage.getItem('currentuser'))
        {
            window.location.href='/'
        }


    } ,[])




    return (

        <DocumentMeta {...meta}>
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



                                <p>
                                    <label className="formtext"




                                    >Email Id</label>
                                    <input type="text"

                                        value={email}
                                        required
                                        onChange={(e) => { setemail(e.target.value) }}

                                        placeholder='Enter Email Id' />

                                </p>


                                <p style={{ marginLeft: '5px' }} >

                                    <label className="formtext">Contact Number</label>
                                    <input type="Number"

                                        value={contactnumber}
                                        required
                                        onChange={(e) => { setcontactnumber(e.target.value) }}


                                        placeholder='Contact Number' />


                                </p>




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
                            <button type='submit' className='box1' id="signupbtn" style={{


                            }}  >SignUp</button>

                        

                            {loading && ( <Loader/> ) }

                            <br/><br/>


                            {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }








                        </div>


                    </form>




                </p>







            </div>





        </div>
        </DocumentMeta>
    )


}


export default SignUpScreen;