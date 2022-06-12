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







// const IndividualDrSpecialization=()=>{


//     const alldoctos = useSelector(state=>state.GetAllDoctorReducer)
// const {loading , doctors , error} = alldoctos


// const dispatch=useDispatch()


// const [SearchTerm , setSearchTerm] = useState('')


// useEffect( ()=>{


//     dispatch(GetAllDoctorAction())
// }  ,[])




//     return(
//         <div>
            


// {/* <DoctorByCategory/> */}


// {/* 

//             <div className="gridcontain1"  >
//             {loading ? <h1> <Loader/> </h1> :error ? (<h1>Something Went Wrong</h1>) :
            
            
//     (

        
        
//         doctors.map(prod=>{
         

// return <div 
// className="card" 
// id="content" >
//                 <DoctorGrid prod={prod}  />
                
//                 </div>




         

          
              
                
//         })


//     ) }



// </div> */}




           
//         </div>
//     )


// }










const IndividualDrSpecialization=()=>{

    const [SearchTerm , setSearchTerm] = useState('')

    return(
        <div>
           

<input type='text' onChange={ (e)=>{ setSearchTerm( e.target.value) } } 

style={{width:'90%' , marginLeft:'5%' , marginRight:'auto' }}

placeholder='Search By Specialization....'  
        id="search-style-filter"

></input>
<br/><br/><br/><br/><br/>

<div className='Doc-by-Spec'>

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



        </div>
    )


}






export default  IndividualDrSpecialization;