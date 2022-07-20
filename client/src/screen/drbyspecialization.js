import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import Loader from "../component/loader";
import { GetAllDoctorAction } from "../actions/doctoraction";
import { GetAllDoctorReducer } from "../reducers/doctorreducer";
import { ad, satellite } from "fontawesome";
import DoctorGrid from "../Header/doctorgrid";
import $ from 'jquery';
import { FilterProducts } from "../actions/doctoraction";
import DoctorByCategory from "./drbycategory";
import dr from '../component/drsearch.json'

import '../component/loader.css'
import '../Header/filter.css'

import SpecializationGrid from "../Header/specializationgrid";










const IndividualDrSpecialization=()=>{
    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    
    const [SearchTerm , setSearchTerm] = useState('')

    return(
        <div>

{
        bengali ? ( <p>


<input type='text' onChange={ (e)=>{ setSearchTerm( e.target.value) } } 

style={{width:'90%' , marginLeft:'5%' , marginRight:'auto' }}

placeholder='বিশেষীকরণ দ্বারা অনুসন্ধান করুন...'  
        id="search-style-filter"

></input>
<br/><br/><br/><br/><br/>

<div className='Doc-by-Spec1'>

{
    dr.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.search_tags.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ) .map( ( val ,key  )=>{

       
        return <div   >
            
            <SpecializationGrid val={val} /> 
          
          </div>

          
    } )
}
</div>

        </p> ) : ( <p>
          {
            english ? (
              <p>


<input type='text' onChange={ (e)=>{ setSearchTerm( e.target.value) } } 

style={{width:'90%' , marginLeft:'5%' , marginRight:'auto' }}

placeholder='Search By Specialization....'  
        id="search-style-filter"

></input>
<br/><br/><br/><br/><br/>

<div className='Doc-by-Spec1'>

{
    dr.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.search_tags.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ) .map( ( val ,key  )=>{

       
        return <div   >
            
            <SpecializationGrid val={val} /> 
          
          </div>

          
    } )
}
</div>



              </p>
            ) : (
              <p>

<input type='text' onChange={ (e)=>{ setSearchTerm( e.target.value) } } 

style={{width:'90%' , marginLeft:'5%' , marginRight:'auto' }}

placeholder='Search By Specialization....'  
        id="search-style-filter"

></input>
<br/><br/><br/><br/><br/>

<div className='Doc-by-Spec1'>

{
    dr.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.search_tags.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ) .map( ( val ,key  )=>{

       
        return <div   >
            
            <SpecializationGrid val={val} /> 
          
          </div>

          
    } )
}
</div>



                </p>
            )
          }
        </p> )
      }

           



        </div>
    )


}






export default  IndividualDrSpecialization;