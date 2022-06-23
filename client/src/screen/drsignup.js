import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import './login.css'
import axios from 'axios'
import Loader from "../component/loader";
import { RegisterNewDoctor } from "../actions/doctoraction";
import { RegisterDoctorReducer } from "../reducers/doctorreducer";
import { ad } from "fontawesome";
import AddTiming from "../component/addtiming";
import firebase from "../firebase";

async function postImage({image}) {
  const formData = new FormData();
  formData.append("image", image)
 // formData.append("description", description)

  const result = await axios.post('/api/doctor/uploadimage', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}



const DrSignUp=()=>{

   
 


    const registreducer = useSelector(state => state.RegisterDoctorReducer)

    const dispatch = useDispatch()
    const { loading, error, success } = registreducer

    const [name, setname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [contactnumber, setcontactnumber] = useState();
    const [otp,setotp] = useState()
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [fees,setfees]=useState()
    const [experience,setexperience] = useState()
    const [college,setcollege]=useState()
    const [address,setaddress] = useState('')
    const [field , setfield] = useState('')
    const [image , setimage]=useState('')
    const [description,setdescription]=useState('')
    const [checked, setChecked] = useState([]);
    const [checked1, setChecked1] = useState([]);
    const [wed, setwed] = useState([]);
    const [thu, setthu] = useState([]);
    const [fri, setfri] = useState([]);
    const [sat, setsat] = useState([]);
    const [sun, setsun] = useState([]);

    const [verify,setverify] = useState()


    //aws
    const [file, setFile] = useState()
    const [images, setImages] = useState([])
   

    const checkList = ["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM" , "4:00 AM" , "5:00 AM" , "6:00 AM" , "7:00 AM" , "8:00 AM" , "9:00 AM" , "10:00 AM" , "11:00 AM" ,
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM" , "4:00 PM" , "5:00 PM" , "6:00 PM" , "7:00 PM" , "8:00 PM" , "9:00 PM" , "10:00 PM" , "11:00 PM" , "Doctor Isn't Available"
];
  


const uploadphoto = async event => {
  //alert('hi')
  event.preventDefault()
  const result = await postImage({image: file, description})
  setImages([result.image, ...images])
}

const fileSelected = event => {
  const file = event.target.files[0]
  setFile(file)
}







//For Monday
const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
        
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
 
 
  };

  
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";


 

//For Tuesday

const handleCheck1 = (event) => {
    var updatedList1 = [...checked1];
    
    if (event.target.checked) {
        
      updatedList1 = [...checked1, event.target.value];
     
    } else {
      updatedList1.splice(checked1.indexOf(event.target.value), 1);
    }
    setChecked1(updatedList1);
 
  };

  
  const checkedItems1 = checked1.length
    ? checked1.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  
  var isChecked1 = (item) =>
    checked1.includes(item) ? "checked-item" : "not-checked-item";

 
   
//For Wednesday
const handleCheckWed = (event) => {
    var UpdateListWed = [...wed];
    
    if (event.target.checked) {
        
      UpdateListWed = [...wed, event.target.value];
     
    } else {
      UpdateListWed.splice(wed.indexOf(event.target.value), 1);
    }
    setwed(UpdateListWed);
 
  };

  
  const checkedItemsWed = wed.length
    ? wed.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  
  var isCheckedWed = (item) =>
    wed.includes(item) ? "checked-item" : "not-checked-item";



//For Thursday
const handleCheckThu = (event) => {
    var UpdateListThu = [...thu];
    
    if (event.target.checked) {
        
      UpdateListThu = [...thu, event.target.value];
     
    } else {
      UpdateListThu.splice(thu.indexOf(event.target.value), 1);
    }
    setthu(UpdateListThu);
 
  };

  
  const checkedItemsThu = thu.length
    ? thu.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  
  var isCheckedThu = (item) =>
    thu.includes(item) ? "checked-item" : "not-checked-item";    





//For Friday
const handleCheckFri = (event) => {
    var UpdateListFri = [...fri];
    
    if (event.target.checked) {
        
      UpdateListFri = [...fri, event.target.value];
     
    } else {
      UpdateListFri.splice(fri.indexOf(event.target.value), 1);
    }
    setfri(UpdateListFri);
 
  };

  
  const checkedItemsFri = fri.length
    ? fri.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  
  var isCheckedFri = (item) =>
    fri.includes(item) ? "checked-item" : "not-checked-item";  



// For Saturday

const handleCheckSat = (event) => {
    var UpdateListSat = [...sat];
    
    if (event.target.checked) {
        
      UpdateListSat = [...sat, event.target.value];
     
    } else {
      UpdateListSat.splice(sat.indexOf(event.target.value), 1);
    }
    setsat(UpdateListSat);
 
  };

  
  const checkedItemsSat = sat.length
    ? sat.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  
  var isCheckedSat = (item) =>
    sat.includes(item) ? "checked-item" : "not-checked-item";  




// For Sunday

const handleCheckSun = (event) => {
    var UpdateListSun = [...sun];
    
    if (event.target.checked) {
        
      UpdateListSun = [...sun, event.target.value];
     
    } else {
      UpdateListSun.splice(sun.indexOf(event.target.value), 1);
    }
    setsun(UpdateListSun);
 
  };

  
  const checkedItemsSun = sun.length
    ? sun.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  
  var isCheckedSun = (item) =>
    sun.includes(item) ? "checked-item" : "not-checked-item";  




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
            password: password ,
            fees:fees ,
            experience:experience ,
            address :address ,
            field:field ,
            image:image ,
            college:college ,
            description:description ,
            checked:checked ,
            checked1:checked1 ,
            wed:wed ,
            thu:thu ,
            fri:fri ,
            sat:sat ,
            sun:sun

            

        }

        


        if (password === cpassword) {
            dispatch(RegisterNewDoctor(user))
        }
        else {
            document.getElementById('Message').innerHTML = 'Passwords Not Matched'
            
        }

        }

      else{
        alert('Error')
      }

      



    }
    const meta = {
        title: 'Doctrap',
        description: 'Doctor Signup ',
        canonical: '',
        meta: {
            charset: 'utf-8',
            name: {
                keywords:  `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness
                ${name} , ${address} , ${email} , ${fees} , ${experience} , ${description}
                
                `
            }
        }
    };


    useEffect( ()=>{

        if(localStorage.getItem('doctor'))
        {
            window.location.href='/drpage'
        }


    } ,[])







    return(
        <div>

<form onSubmit={register} enctype="multipart/form-data" >


<div id="loginbox" >


    <h1> Register Here </h1>

    <p> Already have an account ?  <a href="/drlogin"> Login Here </a>  </p>

    <hr />


    <div className="boxgrid">

        <p  >
            <label className="formtext" > Name</label>
            <input type="text"

                value={name}
                required
                onChange={(e) => { setname(e.target.value) }}

                placeholder='Enter Name' />
        </p>

        <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Last Name</label>


            <input type="text" placeholder='Last Name'

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
            <label className="formtext">Fees</label>
            <input type="text"

                value={fees}
                required
                onChange={(e) => { setfees(e.target.value) }}


                placeholder='Enter Fees' />

        </p>


      
  

        <p style={{ marginLeft: '5px' }} >
            <label className="formtext">College Name</label>
            <input type="text" placeholder='Enter College Name'

                value={college}
                required
                onChange={(e) => { setcollege(e.target.value) }}



            />

        </p>





        <p>
<br/>
        <label className="formtext">Field</label>

        
<select value={field} onChange={ (e)=>{ setfield(e.target.value) } }  id='select-doc' style={{marginTop:'50px' , float:'left' }}  >

<option value='Physician'  >Field</option>
<option value='Physician'  >Physician</option>
<option value='Cardiologist' >Cardiologist</option>
<option value='Orthopaedic' >Orthopaedic</option>
<option value='Gynecologist' >Gynecologist</option>
<option value='Pummonologist' >Pummonologist</option>
<option value='Neurologist' >Neurologist</option>
<option value='Endocrinologist' >Endocrinologist</option>
<option value='Dermatologist' >Dermatologist</option>
<option value='Paediatrician' >Paediatrician</option>
<option value='Dentist' >Dentist</option>
<option value='Diabetologist' >Diabetologist</option>
<option value='Ophthalmologist' >Ophthalmologist</option>
<option value='Sexologist' >Sexologist</option>
<option value='Ophthalmologist' >Ophthalmologist</option>
<option value='Nutrition' >Nutritionist</option>
<option value='ENT-Specialist' >ENT Specialist</option>
<option value='Psychiatrist' >Psychiatrist</option>
<option value='Nephrologist' >Nephrologist</option>
<option value='Oncologist' >Oncologist</option>
<option value='Urologist' >Urologist</option>
<option value='Gastroenterologists' >Gastroenterologists</option>
<option value='Obstetricians' >Obstetricians</option>


</select> 


        
         

        </p>


        <p  >

<label className="formtext">Contact Number</label>
<input type="number"

    value={contactnumber}
    required
    onChange={(e) => { setcontactnumber(e.target.value) }}


    placeholder='Contact Number' />


</p>


<button className='box1' id="signupbtn" style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}  

onClick={onSignInSubmit}

>
Generate OTP
</button>


<p  >

<label className="formtext">Enter OTP</label>
<input type="number"

value={otp}
required
onChange={(e) => { setotp(e.target.value) }}
name='otp'

placeholder='Enter OTP' />


</p>


<button className='box1' id="signupbtn" style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}

onClick={onSubmitOTP}

>
Verify OTP
</button>






<div id="sign-in-button"></div>

<p></p>

        <p style={{ marginLeft: '5px' }}>
            <br/>
            <label className="formtext">Image Link</label>
<br/>
<br/>

            <input type="file" placeholder='Enter Image Link'

                value={image}
                required
                name='image'
                onChange={(e) => { setimage(e.target.value) }}

            />


{/* <input onChange={fileSelected} type="file" accept="image/*"></input>

      

<div className='box1' onClick={ uploadphoto } 

id="signupbtn" style={{width:'30%' , height:'55%' , marginTop:'7%' , marginLeft:'auto' , marginRight:'auto'  }}

> Upload </div> */}




</p>


        








        <p  >
            <label className="formtext">Clinic Address</label>
            <input type="text" placeholder='Enter Address'

                value={address}
                required
                onChange={(e) => { setaddress(e.target.value) }}



            />

        </p>



        <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Years of Experience</label>


            <input type="Number" placeholder='Years of Experience'

                value={experience}
                required
                onChange={(e) => { setexperience(e.target.value) }}

            />

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

<label className="formtext">Enter Description</label>
    <input value={description} 
    
    required  placeholder='Enter Description....' 
    onChange={ (e)=>{setdescription(e.target.value)} } 
    
    className='doc-descroption-input'
    
    />


<br/><br/><br/>
<br/><br/><br/>

<h3 style={{float:'left' , marginLeft:'5%' }} > Select Time Intervals : </h3>
<br/><br/><br/> <br/> 


<div className="checkList" id='timingboxnew'  value={checked}  >

        <div className="title"  > For Monday </div>
        <div className="list-container" id='checkboxgrid' >
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
        </div>

       

  
        <br/>
<div>
        {`Selected Time Slots are: ${checkedItems}`  }
      </div>


{/* 
      For Monday  */}


<br/><br/><br/> <br/> 


<div className="checkList" id='timingbox1'  value={checked1}  >
 
        <div className="title"> For Tuesday </div>
        <div className="list-container" id='checkboxgrid' >
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck1} />
              <span className={isChecked1(item)}>{item}</span>
            </div>
          ))}
        </div>
        </div>

       

  
        <br/>
<div>
        {`Selected Time Slots are: ${checkedItems1}`  }
      </div>




      <br/><br/><br/> <br/> 


<div className="checkList" id='timingbox1'  value={wed}  >
 
        <div className="title"> For Wednesday </div>
        <div className="list-container" id='checkboxgrid' >
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheckWed} />
              <span className={isCheckedWed(item)}>{item}</span>
            </div>
          ))}
        </div>
        </div>

       

  
        <br/>
<div>
        {`Selected Time Slots are: ${checkedItemsWed}`  }
      </div>



      <br/><br/><br/> <br/> 

      <div className="checkList" id='timingbox1'  value={thu}  >
 
 <div className="title"> For Thursday </div>
 <div className="list-container" id='checkboxgrid' >
   {checkList.map((item, index) => (
     <div key={index}>
       <input value={item} type="checkbox" onChange={handleCheckThu} />
       <span className={isCheckedThu(item)}>{item}</span>
     </div>
   ))}
 </div>
 </div>




 <br/>
<div>
 {`Selected Time Slots are: ${checkedItemsThu}`  }
</div>





<br/><br/><br/> <br/> 

<div className="checkList" id='timingbox1'  value={fri}  >

<div className="title"> For Friday </div>
<div className="list-container" id='checkboxgrid' >
{checkList.map((item, index) => (
<div key={index}>
 <input value={item} type="checkbox" onChange={handleCheckFri} />
 <span className={isCheckedFri(item)}>{item}</span>
</div>
))}
</div>
</div>




<br/>
<div>
{`Selected Time Slots are: ${checkedItemsFri}`  }
</div>



<br/><br/><br/> <br/> 

<div className="checkList" id='timingbox1'  value={sat}  >

<div className="title"> For Saturday </div>
<div className="list-container" id='checkboxgrid' >
{checkList.map((item, index) => (
<div key={index}>
 <input value={item} type="checkbox" onChange={handleCheckSat} />
 <span className={isCheckedSat(item)}>{item}</span>
</div>
))}
</div>
</div>




<br/>
<div>
{`Selected Time Slots are: ${checkedItemsSat}`  }
</div>


<br/><br/><br/> <br/> 

<div className="checkList" id='timingbox1'  value={sun}  >

<div className="title"> For Sunday </div>
<div className="list-container" id='checkboxgrid' >
{checkList.map((item, index) => (
<div key={index}>
 <input value={item} type="checkbox" onChange={handleCheckSun} />
 <span className={isCheckedSun(item)}>{item}</span>
</div>
))}
</div>
</div>




<br/>
<div>
{`Selected Time Slots are: ${checkedItemsSun}`  }
</div>
      


    <br/> <br/> <br/><br/> <br/><br/>
    <button type='submit' className='box1' id="signupbtn" style={{


    }}  >SignUp</button>



    {loading && ( <Loader/> ) }

    <br/><br/>


    {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }








</div>


</form>








        </div>
    )
}

export default DrSignUp;