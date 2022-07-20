
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateUserAction } from "../actions/useraction";
import { UpdateUserReducer } from "../reducers/userreducer";
import { GetUserByIdReducer } from "../reducers/userreducer";
import { GetUserByIdAction } from "../actions/useraction";
import style from './update.css'

const UpdateUserProfile = () => {


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')





    const useridstate = useSelector(state => state.GetUserByIdReducer)
    const { loading, users, error } = useridstate




    const updatereducer = useSelector(state => state.UpdateUserReducer)
    const { success, update_error, uploading } = updatereducer

    const curuser = JSON.parse(localStorage.getItem('currentuser'))

    const userid = curuser._id

    console.log('Users retr are', users)

    const [name, setname] = useState('')
    const [lname, setlname] = useState('')

    const [contactnumber, setcontactnumber] = useState('')

    const [email, setemail] = useState('')
    const [newmail, setnewmail] = useState('')



    const dispatch = useDispatch()




    useEffect(() => {


        if (users) {
            if (users._id == userid) {
                setname(users.name)
                setlname(users.lname)


                setcontactnumber(users.contactnumber)

                setemail(users.email)



            }
            else {
                dispatch(GetUserByIdAction({ userid }))

            }
        }

        else {
            dispatch(GetUserByIdAction({ userid }))
        }



    }, [dispatch, users])




    const updateuser = (e) => {

        e.preventDefault()
        if (1) {
            const upuser = {
                name: name,
                email: email,
                contactnumber: contactnumber
                // password: password
            }



            dispatch(UpdateUserAction(upuser, curuser._id))


        }
        else {
            document.getElementById('message').innerHTML = `Passwords didn't match`

        }





    }


    return (
        <div>

            {
                bengali ? (<p>

                    <div
                        style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}

                    //className="forminput" 

                    >

                        <form onSubmit={updateuser} >




                            <input type="text" value={name} placeholder=''

                                onChange={(e) => { setname(e.target.value) }} required
                                style={{fontSize:'large'}}
                                id='formtext'

                            />

                            <input type="text" value={lname} placeholder=''

                                onChange={(e) => { setlname(e.target.value) }} required
                                style={{fontSize:'large'}}

                                id='formtext'

                            ></input>



                            <br />



                            <input type="text" value={email} placeholder='ইমেইল আইডি'
                                onChange={(e) => { setemail(e.target.value) }}
                                style={{fontSize:'large'}}
                                id='formtext'
                            />

                            <input type="number" value={contactnumber} placeholder=''

                                onChange={(e) => { setcontactnumber(e.target.value) }}

                                id='formtext'
                                style={{fontSize:'large'}}
                                required

                            />




                            <br />





                            <br /> <br />



                            <button value='submit'

                                id='formbutton'
                                //className='boxb'

                                style={{ color: 'white', backgroundColor: 'black', fontSize: '23px' }}>
                                {/* <i class="fa fa-refresh" aria-hidden="true"></i> */}
                                হালনাগাদ</button>

                            <br />

                            <span id="message" style={{ fontSize: "25px", color: '#023047' }} ></span>
                            {success && (<span style={{ fontSize: "25px", color: '#023047' }} >সফলভাবে আপডেট করা হয়েছে</span>)}
                            {error && (<span style={{ fontSize: "25px", color: '#FF0000' }} >কিছু ভুল হয়েছে</span>)}
                        </form>


                    </div>


                </p>) : (<p>
                    {
                        english ? (
                            <p>


                                <div
                                    style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}

                                //className="forminput" 

                                >

                                    <form onSubmit={updateuser} >




                                        <input type="text" value={name} placeholder='First Name'

                                            onChange={(e) => { setname(e.target.value) }} required

                                            style={{fontSize:'large'}}

                                            id='formtext'

                                        />

                                        <input type="text" value={lname} placeholder='Last Name'

                                            onChange={(e) => { setlname(e.target.value) }} required

                                            style={{fontSize:'large'}}
                                            id='formtext'

                                        ></input>



                                        <br />



                                        <input type="text" value={email} placeholder='Email Id'
                                            onChange={(e) => { setemail(e.target.value) }}
                                            style={{fontSize:'large'}}
                                            id='formtext'
                                        />

                                        <input type="number" value={contactnumber} placeholder='Contact Number'

                                            onChange={(e) => { setcontactnumber(e.target.value) }}
                                            style={{fontSize:'large'}}
                                            id='formtext'
                                           
                                            required

                                        />




                                        <br />







                                        <br /> <br />



                                        <button value='submit'

                                            id='formbutton'
                                            //className='boxb'

                                            style={{ color: 'white', backgroundColor: 'black', fontSize: '23px' }}>
                                            {/* <i class="fa fa-refresh" aria-hidden="true"></i> */}
                                            Update</button>

                                        <br />

                                        <span id="message" style={{ fontSize: "25px", color: '#023047' }} ></span>
                                        {success && (<span style={{ fontSize: "25px", color: '#023047' }} >Updated Successfully</span>)}
                                        {error && (<span style={{ fontSize: "25px", color: '#FF0000' }} >Something Went Wrong</span>)}
                                    </form>


                                </div>


                            </p>
                        ) : (
                            <p>


                                <div
                                    style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}

                                //className="forminput" 

                                >

                                    <form onSubmit={updateuser} >




                                        <input type="text" value={name} placeholder='Enter Name'

                                            onChange={(e) => { setname(e.target.value) }} required
                                            style={{fontSize:'large'}}
                                            id='formtext'

                                        />

                                        <input type="text" value={lname} placeholder='First Name'

                                            onChange={(e) => { setlname(e.target.value) }} required

                                            style={{fontSize:'large'}}
                                            id='formtext'

                                        ></input>



                                        <br />



                                        <input type="text" value={email} placeholder='Email Id'
                                            onChange={(e) => { setemail(e.target.value) }}
                                            style={{fontSize:'large'}}
                                            id='formtext'
                                        />

                                        <input type="number" value={contactnumber} placeholder='Enter New Email'

                                            onChange={(e) => { setcontactnumber(e.target.value) }}

                                            id='formtext'
                                            style={{fontSize:'large'}}
                                            required

                                        />




                                        <br />




                                        <br /> <br />



                                        <button value='submit'

                                            id='formbutton'
                                            //className='boxb'

                                            style={{ color: 'white', backgroundColor: 'black', fontSize: '23px' }}>
                                            {/* <i class="fa fa-refresh" aria-hidden="true"></i> */}
                                            Update</button>

                                        <br />

                                        <span id="message" style={{ fontSize: "25px", color: '#023047' }} ></span>
                                        {success && (<span style={{ fontSize: "25px", color: '#023047' }} >Updated Successfully</span>)}
                                        {error && (<span style={{ fontSize: "25px", color: '#FF0000' }} >Something Went Wrong</span>)}
                                    </form>


                                </div>


                            </p>
                        )
                    }
                </p>)
            }








        </div>
    )
}

export default UpdateUserProfile
