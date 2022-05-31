import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import { AddDoctorTimingAction } from "../actions/doctoraction";
import Loader from "../component/loader";

const AddTiming = ()=>{
    const doctor = JSON.parse(localStorage.getItem('doctor'))

    const [checked, setChecked] = useState([]);
    const checkList = ["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM" , "4:00 AM" , "5:00 AM" , "6:00 AM" , "7:00 AM" , "8:00 AM" , "9:00 AM" , "10:00 AM" , "11:00 AM" ,
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM" , "4:00 PM" , "5:00 PM" , "6:00 PM" , "7:00 PM" , "8:00 PM" , "9:00 PM" , "10:00 PM" , "11:00 PM" 
];
  

const dispatch = useDispatch()

const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
 
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";


 




const senreview = () => {

    if (localStorage.getItem('doctor')) {
        const doctors = JSON.parse(localStorage.getItem('doctor'))

       

       

            const review = {
                checked: checked
            }




dispatch(AddDoctorTimingAction(review, doctors._id))

        

    }




}




    return(
        <div>
           { 
           
           doctor ? (
               <p>
                   <p className="formtext">



<div className="checkList" value={checked}  >
 
        <div className="title">Selected Time Intervals are : </div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
        </div>

        <div>
        {`Items checked are: ${checkedItems}`  }
      </div>


      <button onClick={senreview} className='docdes-box1' style={{
                    backgroundColor: '#0EB9B8',

                    color: 'white',
                    width: '75%',
                    marginLeft: '15%'



                }} id='post-button'  > Post </button>




</p>

               </p>
           ) : (
               <div>
                    Please Login As a Doctor


                   </div>
           )
           
           }
        </div>
    )

}

export default AddTiming