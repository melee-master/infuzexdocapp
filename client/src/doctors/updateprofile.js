import React , {useState, useEffect} from 'react'
import {Link , useParams ,  useHistory ,useLocation  } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';
import Loader from "../component/loader";
import { UpdateDoctorReducer } from '../reducers/doctorreducer';
import { UpdateDoctorAction } from '../actions/doctoraction';
import { set } from 'mongoose';

const UpdateProfile=({match})=>{

     const params = useParams();
//const { doctorid } = useParams();
//   const doctorid=match.params.id
    //const dispatch = useDispatch()

    // const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    // const { loading, doctors ,error} = dridstate

    const [name,setname] = useState('')
    const [lname,setlname] = useState('')
    const [email,setemail] = useState('')
    const [contactnumber,setcontactnumber] = useState()
    const [fees,setfees] = useState()
    const [college,setcollege] = useState('')
    const [experience,setexperience]=useState()
    const [field,setfield] = useState('')
    const [address,setaddress]=useState('')
    const [image,setimage]=useState('')
    const [description,setdescription]=useState('')
    const [status,setstatus] = useState('false')
    const [checked, setChecked] = useState([]);
    const [checked1, setChecked1] = useState([]);
    const [wed, setwed] = useState([]);
    const [thu, setthu] = useState([]);
    const [fri, setfri] = useState([]);
    const [sat, setsat] = useState([]);
    const [sun, setsun] = useState([]);
   

    const checkList = ["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM" , "4:00 AM" , "5:00 AM" , "6:00 AM" , "7:00 AM" , "8:00 AM" , "9:00 AM" , "10:00 AM" , "11:00 AM" ,
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM" , "4:00 PM" , "5:00 PM" , "6:00 PM" , "7:00 PM" , "8:00 PM" , "9:00 PM" , "10:00 PM" , "11:00 PM" , "Doctor Isn't Available"
];
  
   

      const location = useLocation()

      var testpath = location.pathname

      var doctorid = location.pathname.substr(15,testpath.length)

    const dispatch = useDispatch()

    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate



   

  
    const updatestate = useSelector(state=> state.UpdateDoctorReducer )

    const {success , update_error , uploading } = updatestate




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



 





    useEffect(() => {
        
        
        if( doctors )
        {
            if( doctors._id==doctorid )
            {
                setname(doctors.name)
                setlname(doctors.lname)
                setimage(doctors.image)
                setaddress(doctors.address)
                setcollege(doctors.college)
                setcontactnumber(doctors.contactnumber)
                setdescription(doctors.description)
                setemail(doctors.email)
                setstatus(doctors.status)
                setfees(doctors.fees)
                setexperience(doctors.experience)
                setfield(doctors.field)
                setChecked(doctors.mon)
                setChecked1(doctors.tue)
                setwed(doctors.wed)
                setthu(doctors.thu)
                setfri(doctors.fri)
                setsat(doctors.sat)
                setsun(doctors.sun)

                
            }
            else
            {
                dispatch(GetDoctorById( {doctorid} ))

            }
        }

        else
        {
            dispatch(GetDoctorById( {doctorid} ))
        }

        

    }, [dispatch,doctors])


    const editdoctor = (e) => {
        e.preventDefault()
        const updatedproduct = {
            name: name,
            lname:lname ,
            image: image,
            description: description ,
            field:field ,
            status:status ,
            fees:fees ,
            college:college ,
            experience:experience ,
            email : email ,
            contactnumber :contactnumber  ,
            address : address ,
            checked:checked ,
            checked1:checked1 ,
            wed:wed ,
            thu:thu ,
            fri:fri ,
            sat:sat ,
            sun:sun

        }

        dispatch(UpdateDoctorAction(doctorid, updatedproduct))


    }






return(
    <div>

        {loading && <Loader/> }
        {uploading && <Loader/> }
        {update_error && alert('Something Went Wrong') }
        {error && alert('Something Went Wrong')  }
        { success && alert('Updated Successfully')  }




{/* { loading ? (<Loader/>) : error ? ( <h1>There's an error</h1> ) :
           
           (
               <div  >

                   <img src={doctors.image} id="img-docdes"/>

                  <h3 className='docdes-name' > Dr. {doctors.name}  {doctors.lname}  </h3>
                   <p className='docdes-sub' > {doctors.field} </p>
                   <br/>
                   <p className='docdes-sub' style={{fontWeight:'bold'}} > {doctors.experience} Years Exp </p>
                   <br/>
                  <h4 className='docdes-sub'> {doctors.address} </h4>

                  <hr/>

   
               
                

               
                 

                   </div>
           )
           
           
           } */}



          {
              doctors && (
                  <div>
                     

                <h1> {doctors.name} </h1>

                <form onSubmit={editdoctor} >
                <div className="boxgrid"  style={{ width:'95%' , marginLeft:'1%' }}  >

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
            <label className="formtext">Field</label>
            <input type="text"

                value={field}
                required
                onChange={(e) => { setfield(e.target.value) }}


                placeholder='Enter Field' />

        </p>

        <p style={{ marginLeft: '5px' }} >
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


        <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Image Link</label>


            <input type="text" placeholder='Enter Image Link'

                value={image}
                required
                onChange={(e) => { setimage(e.target.value) }}

            />

        </p>

        <p>

        <label className="formtext">Enter Description</label>
    <input value={description} 
    
    required  placeholder='Enter Description....' 
    onChange={ (e)=>{setdescription(e.target.value)} } 
    
    className='doc-descroption-input'
    
    />

   

            </p>

           {/* <p></p>

            <h3 style={{float:'left' , marginLeft:'5%' }} > Select Time Intervals : </h3>
<br/><br/><br/> <br/> 


<div className="checkList" id='timingbox'  value={checked}  >
 
        <div className="title"> For Monday </div>
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


   */}






</div>





                <button type="submit"  className='docdes-box1' style={{
                    marginLeft:'auto' ,
                    marginRight:'auto'
                }}    id='post-button' > UPDATE </button>

                </form>

                      </div>
              )
          } 


    </div>
)

}

export default UpdateProfile