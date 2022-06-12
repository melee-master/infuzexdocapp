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
import './doctorgrid.css'
import FilterSearch from "../Header/Filter";

const AllDoctorSearch=()=>{

const alldoctos = useSelector(state=>state.GetAllDoctorReducer)
const {loading , doctors , error} = alldoctos



const dispatch = useDispatch()

useEffect( ()=>{


    dispatch(GetAllDoctorAction())
}  ,[])






    return(
        <div>
<br/>
           

<FilterSearch/>
<br/>
<br/><br/>

<br/>
          

            <div className="gridcontain1"  >
            {loading ? <h1> <Loader/> </h1> :error ? (<h1>Something Went Wrong</h1>) :
            
            
    (

        
        
        doctors.map(prod=>{
         

return <div className="card" id="content" >
                <DoctorGrid prod={prod}  />
                
                </div>




         

          
              
                
        })


    ) }



</div>


        </div>
    )


}

export default AllDoctorSearch;