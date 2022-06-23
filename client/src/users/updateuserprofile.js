
import React , {useState}  from "react";
import { useDispatch, useSelector } from 'react-redux'
import { UpdateUserAction } from "../actions/useraction";
import { UpdateUserReducer } from "../reducers/userreducer";
import style from './update.css'

const UpdateUserProfile=()=>{


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    



    const updatereducer = useSelector(state=>state.UpdateUserReducer)
    const {loading , success , error } = updatereducer

    const curuser = JSON.parse(localStorage.getItem('currentuser'))

    const [name, setname] = useState('')
    const [lname, setlname] = useState(curuser.name)

    const [email, setemail] = useState('')
    const [newmail, setnewmail] = useState(curuser.email)

    const [password, setnewpass] = useState('')

    const [cnewpass, setcnewpass] = useState('')

    const dispatch = useDispatch()

    const updateuser = (e) => {

        e.preventDefault()
        if (password == cnewpass) {
            const upuser = {
                name: name,
                email: email,
                password: password
            }

            console.log(upuser)

            dispatch(UpdateUserAction(upuser, curuser._id))


        }
        else {
            document.getElementById('message').innerHTML = `Passwords didn't match`

        }





    }


    return(
        <div>

{
        bengali ? ( <p>

<div 
            style={{width:'80%' , marginLeft:'auto' , marginRight:'auto'  }} 
            
            //className="forminput" 
            
            >

            <form onSubmit={updateuser} >
                     

                            <input type="text" value={lname} placeholder='নামের প্রথম অংশ' 
                            
                            //style={{ width:'110%' , marginLeft:'auto' , marginRight:'80px' }}

                            //style={{fontSize:'25px'}}

                            id='formtext'
                            
                            />

                            <input type="text" value={name} 
                            placeholder='নতুন নাম লিখুন'

                                onChange={(e) => { setname(e.target.value) }} required

                                id='formtext'

                            />

                      

                        <br />

                        

                            <input type="text" value={newmail} placeholder='ইমেইল আইডি' 
                             id='formtext'
                            />

                            <input type="text" value={email} placeholder='নতুন ইমেইল লিখুন'

                                onChange={(e) => { setemail(e.target.value) }}

                                id='formtext'

                                required

                            />

                      


                        <br />

                       

                            <input type="password" value={password} placeholder='নতুন পাসওয়ার্ড'

                                onChange={(e) => { setnewpass(e.target.value) }}

                                id='formtext'
                                required

                            />

                            <input type="password" value={cnewpass} placeholder='পাসওয়ার্ড নিশ্চিত করুন'

                                onChange={(e) => { setcnewpass(e.target.value) }}

                                id='formtext'

                                required
                            />

                     



                        <br /> <br />



                        <button  value='submit' 
                        
                        id='formbutton'
                        //className='boxb'
                        
                        style={{color:'white' , backgroundColor:'black' , fontSize:'23px' }}>
                            {/* <i class="fa fa-refresh" aria-hidden="true"></i> */}
                            হালনাগাদ</button>

                        <br />

                        <span id="message" style={{ fontSize: "25px", color: '#023047' }} ></span>
                        { success && ( <span  style={{ fontSize: "25px", color: '#023047' }} >সফলভাবে আপডেট করা হয়েছে</span>  ) }
                        { error && ( <span  style={{ fontSize: "25px", color: '#023047' }} >কিছু ভুল হয়েছে</span>  ) }
                    </form>


            </div>


        </p> ) : ( <p>
          {
            english ? (
              <p>


            <div 
            style={{width:'80%' , marginLeft:'auto' , marginRight:'auto'  }} 
            
            //className="forminput" 
            
            >

            <form onSubmit={updateuser} >
                     

                            <input type="text" value={lname} placeholder='First Name' 
                            
                            //style={{ width:'110%' , marginLeft:'auto' , marginRight:'80px' }}

                            //style={{fontSize:'25px'}}

                            id='formtext'
                            
                            ></input>

                            <input type="text" value={name} placeholder='Enter New Name'

                                onChange={(e) => { setname(e.target.value) }} required

                                id='formtext'

                            />

                      

                        <br />

                        

                            <input type="text" value={newmail} placeholder='Email Id' 
                             id='formtext'
                            />

                            <input type="text" value={email} placeholder='Enter New Email'

                                onChange={(e) => { setemail(e.target.value) }}

                                id='formtext'

                                required

                            />

                      


                        <br />

                       

                            <input type="password" value={password} placeholder='New Password'

                                onChange={(e) => { setnewpass(e.target.value) }}

                                id='formtext'
                                required

                            />

                            <input type="password" value={cnewpass} placeholder='Confirm Password'

                                onChange={(e) => { setcnewpass(e.target.value) }}

                                id='formtext'

                                required
                            />

                     



                        <br /> <br />



                        <button  value='submit' 
                        
                        id='formbutton'
                        //className='boxb'
                        
                        style={{color:'white' , backgroundColor:'black' , fontSize:'23px' }}>
                            {/* <i class="fa fa-refresh" aria-hidden="true"></i> */}
                            Update</button>

                        <br />

                        <span id="message" style={{ fontSize: "25px", color: '#023047' }} ></span>
                        { success && ( <span  style={{ fontSize: "25px", color: '#023047' }} >Updated Successfully</span>  ) }
                        { error && ( <span  style={{ fontSize: "25px", color: '#023047' }} >Something Went Wrong</span>  ) }
                    </form>


            </div>


              </p>
            ) : (
              <p>


            <div 
            style={{width:'80%' , marginLeft:'auto' , marginRight:'auto'  }} 
            
            //className="forminput" 
            
            >

            <form onSubmit={updateuser} >
                     

                            <input type="text" value={lname} placeholder='First Name' 
                            
                            //style={{ width:'110%' , marginLeft:'auto' , marginRight:'80px' }}

                            //style={{fontSize:'25px'}}

                            id='formtext'
                            
                            ></input>

                            <input type="text" value={name} placeholder='Enter New Name'

                                onChange={(e) => { setname(e.target.value) }} required

                                id='formtext'

                            />

                      

                        <br />

                        

                            <input type="text" value={newmail} placeholder='Email Id' 
                             id='formtext'
                            />

                            <input type="text" value={email} placeholder='Enter New Email'

                                onChange={(e) => { setemail(e.target.value) }}

                                id='formtext'

                                required

                            />

                      


                        <br />

                       

                            <input type="password" value={password} placeholder='New Password'

                                onChange={(e) => { setnewpass(e.target.value) }}

                                id='formtext'
                                required

                            />

                            <input type="password" value={cnewpass} placeholder='Confirm Password'

                                onChange={(e) => { setcnewpass(e.target.value) }}

                                id='formtext'

                                required
                            />

                     



                        <br /> <br />



                        <button  value='submit' 
                        
                        id='formbutton'
                        //className='boxb'
                        
                        style={{color:'white' , backgroundColor:'black' , fontSize:'23px' }}>
                            {/* <i class="fa fa-refresh" aria-hidden="true"></i> */}
                            Update</button>

                        <br />

                        <span id="message" style={{ fontSize: "25px", color: '#023047' }} ></span>
                        { success && ( <span  style={{ fontSize: "25px", color: '#023047' }} >Updated Successfully</span>  ) }
                        { error && ( <span  style={{ fontSize: "25px", color: '#023047' }} >Something Went Wrong</span>  ) }
                    </form>


            </div>


                </p>
            )
          }
        </p> )
      }



           
           



        </div>
    )
}

export default UpdateUserProfile
