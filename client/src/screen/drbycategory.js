import React , {useState} from "react";
import { FilterProducts2 } from "../actions/doctoraction";
import {useDispatch , useSelector  } from 'react-redux'

import { fontAwesome, search } from "fontawesome";

const DoctorByCategory=()=>{

    const [searchkey , setsearchkey] = useState('all')
    const dispatch=useDispatch()
    
    const searchas=()=>{
        dispatch(FilterProducts2(searchkey))
    }


    return(
        <div>
<h2>Search Doctors By Specialization</h2>



<select value={searchkey} onChange={ (e)=>{ setsearchkey(e.target.value) } }  id='select-doc'  >

<option value='all'  >All</option>
<option value='physician'  >

    Physician</option>
    <option value='cardiologist' >Cardiologist</option>
    <option value='ortho' >Orthopaedic</option>
    <option value='gynecologist' >Gynecologist</option>
    <option value='pummonologist' >Pummonologist</option>
    <option value='neurologist' >Neurologist</option>
    <option value='endocrenologist' >Endocrinologist</option>
    <option value='dermatologist' >Dermatologist</option>
    <option value='paediatrician' >Paediatrician</option>
    <option value='dentist' >Dentist</option>
    <option value='diabetologist' >Diabetologist</option>
    <option value='ophthalmologist' >Ophthalmologist</option>
    <option value='sexologist' >Sexologist</option>
    {/* <option value='ophthalmologist' >Ophthalmologist</option> */}
    <option value='nutrition' >Nutritionist</option>
    <option value='ent-special' >ENT Specialist</option>
    <option value='psychiatrist' >Psychiatrist</option>
    <option value='nephrologist' >Nephrologist</option>
    

 </select>   

<button 

 id='additional-change-doccat'
onClick={ ()=>{ dispatch(FilterProducts2(searchkey)) } } > SEARCH </button>

        </div>
    )


}
export default DoctorByCategory;