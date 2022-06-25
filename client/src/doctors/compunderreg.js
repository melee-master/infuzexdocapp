import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import { RegisterNewCompounder } from "../actions/compounderaction";
import { RegisterCompounderReducer } from "../reducers/compounderreducer";
import Loader from "../component/loader";


const CompounderRegister=({docid})=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    




    const registreducer = useSelector(state => state.RegisterCompounderReducer)

    const dispatch = useDispatch()
    const { loading, error, success } = registreducer

    const [name, setname] = useState('')
    const [drid, setdrid] = useState(docid)
    const [email, setemail] = useState('')
    const [contactnumber, setcontactnumber] = useState();
    const [password, setpassword] = useState('')


    const setbot=(e)=>{

        setcontactnumber(e.target.value)
        setemail(e.target.value)
    }


    const register = (e) => {

        e.preventDefault()

        const user = {
            name: name,
            
            contactnumber: contactnumber,
            email: email,
            password: password ,
            docid:drid
           
        }


       dispatch(RegisterNewCompounder(user))



    }
    const meta = {
        title: 'Doctrap',
        description: 'Doctor Signup ',
        canonical: '',
        meta: {
            charset: 'utf-8',
            name: {
                keywords:  `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness
                ${name} 
                
                `
            }
        }
    };


    useEffect( ()=>{

        if(localStorage.getItem('currentuser') || localStorage.getItem('admin') || localStorage.getItem('compounder')  )
        {
            window.location.href='/drpage'
        }


    } ,[])


    


    return(
        <div>



{
        bengali ? ( <p>







<form onSubmit={register} >

<div id="loginbox" >


    <h1> রেজিস্টার কম্পাউন্ডার </h1>

  

    <hr />


    <div className="boxgrid" >

        <p style={{margin:'2%'}}  >
            <label className="formtext"   > নাম</label>
            <input type="text"

                value={name}
                required
                onChange={(e) => { setname(e.target.value) }}

                placeholder='রত' />
        </p>

   


{/* 
        <p style={{margin:'2%'}}>
            <label className="formtext"




            >ইমেইল আইডি</label>
            <input type="text"

                value={email}
                required
                onChange={(e) => { setemail(e.target.value) }}

                placeholder='ইমেইল আইডি দিন' />

        </p> */}


        <p style={{margin:'2%'}} >

            <label className="formtext">যোগাযোগের নম্বর</label>
            <input type="Number"

                value={contactnumber}
                required
                onChange={(e) => { setcontactnumber(e.target.value) }}


                placeholder='যোগাযোগের নম্বর' />


        </p>




    


   








        <p style={{margin:'2%'}}>
            <label className="formtext">
পাসওয়ার্ড</label>
            <input type="password"

                value={password}
                required
                onChange={(e) => { setpassword(e.target.value) }}


                placeholder='পাসওয়ার্ড লিখুন' />

        </p>

    

        




    </div>


    <br/> <br/> <br/><br/> <br/><br/>
    <button type='submit' className='box1' id="signupbtn" style={{


    }}  >নিবন্ধন</button>



    {loading && ( <Loader/> ) }

    <br/><br/>


    {error && ( <p  id="message" >ইমেলটি ইতিমধ্যেই নিবন্ধন</p> )  }

{success && ( <p  id="message" >সাফল্যের সাথে নিবন্ধিত</p> ) }








</div>


</form>







        </p> ) : ( <p>
          {
            english ? (
              <p>






<form onSubmit={register} >

<div id="loginbox" >


    <h1> Register Compounder </h1>

  

    <hr />


    <div className="boxgrid" >

        <p style={{margin:'2%'}}  >
            <label className="formtext"   > Name</label>
            <input type="text"

                value={name}
                required
                onChange={(e) => { setname(e.target.value) }}

                placeholder='Enter Name' />
        </p>

   




        <p style={{margin:'2%'}} >

            <label className="formtext">Contact Number</label>
            <input type="Number"

                value={contactnumber}
                required
                onChange={setbot}


                placeholder='Contact Number' />


        </p>

 <p style={{margin:'2%'}}>
            <label className="formtext">Password</label>
            <input type="password"

                value={password}
                required
                onChange={(e) => { setpassword(e.target.value) }}


                placeholder='Enter Password' />

        </p>

     </div>


    <br/> <br/> <br/><br/> <br/><br/>
    <button type='submit' className='box1' id="signupbtn" 
    style={{marginTop:'10px' , marginLeft:'40%' , marginRight:'40%'  }} 
     >Register</button>



    {loading && ( <Loader/> ) }

    <br/><br/>


    {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }

</div>


</form>






              </p>
            ) : (
              <p>






<form onSubmit={register} >

<div id="loginbox" >


    <h1> Register Compounder </h1>

  

    <hr />


    <div className="boxgrid" >

        <p style={{margin:'2%'}}  >
            <label className="formtext"   > Name</label>
            <input type="text"

                value={name}
                required
                onChange={(e) => { setname(e.target.value) }}

                placeholder='Enter Name' />
        </p>

   




        <p style={{margin:'2%'}} >

            <label className="formtext">Contact Number</label>
            <input type="Number"

                value={contactnumber}
                required
                onChange={setbot}


                placeholder='Contact Number' />


        </p>

 <p style={{margin:'2%'}}>
            <label className="formtext">Password</label>
            <input type="password"

                value={password}
                required
                onChange={(e) => { setpassword(e.target.value) }}


                placeholder='Enter Password' />

        </p>

     </div>


    <br/> <br/> <br/><br/> <br/><br/>
    <button type='submit' className='box1' id="signupbtn" 
    style={{marginTop:'10px' , marginLeft:'40%' , marginRight:'40%'  }} 
     >Register</button>



    {loading && ( <Loader/> ) }

    <br/><br/>


    {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }

</div>


</form>



              


                </p>
            )
          }
        </p> )
      }



  </div>
    )


}

export default CompounderRegister;