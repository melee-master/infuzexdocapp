import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import Loader from "../component/loader";
import './general.css'
import './doctorgrid.css'
import { FilterProducts2 } from "../actions/doctoraction";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DoctorBySpecialization=()=>{

   



    

    return(
        <div>

            <br/><br/>

            <h2 className='h2-header'  >SPECIALIZATION</h2>

           {/* <select className='Doc-by-Spec' value={category} onChange={ (e)=>{ setval(e.target.value) } }  >

               
                <button value='physician'  type='submit' > Physician </button>
                <option value='cardiologist'  > Cardiologist </option>
                <option value='neurologist' type='submit' > Neurologist </option>
                <option value='gynecologist' > Gynecologist </option>
                <option value='orthopedist' style={{marginTop:'10px'}} > Orthopedist </option>
                

               


           </select>
           <button  onClick={searchas} >Submit</button> */}
 
<a href="/dr-by-specialization" style={{textDecoration:'none' , color:'black' }} >

            <div className='Doc-by-Spec'  >
          

                <p>
                    <img src='https://cdn-icons-png.flaticon.com/512/3467/3467794.png'  id="img-docgrid1" />
                    <br/>
                    <h2 className='doc-name' >Cardiologist </h2>
                </p>
           

                <p>
                <img src='https://www.nicepng.com/png/detail/867-8678512_doctor-icon-physician.png'  id="img-docgrid1" />
                    <br/>
                    <h2 className='doc-name' >General Physician </h2>
                </p>

                <p>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOQipLO9pNuSYGYsbjY5maxyohlj4WClMTaz2SI_5LTzJ82YJUhoH9rE2Yc1TVIpNQ-c&usqp=CAU'  id="img-docgrid1" />
                    <br/>
                    <h2 className='doc-name' >Orthopaedic</h2>
                </p>
                <p>
                <img src='https://cdn2.iconfinder.com/data/icons/medical-professions-innovicons-color/128/Neurologist-brain-doctor-consultation-512.png'  id="img-docgrid1" />
                    <br/>
                    <h2 className='doc-name' >Neurologist</h2>
                </p>
               

               
               

            </div>


           

            <div className="gridcontain1"  >


   





{/* <p className='docdes-box1' style={{backgroundColor:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left'  }} > View All Specialization </p> */}

<a href="/dr-by-specialization" style={{textDecoration:'none' , color:'black' }} >
<p className='docdes-box1' 

//id="navigationbutton"
style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 

> View All Specialization </p>
</a>

</div>
</a>


{/* <a href="/dr-by-specialization" style={{textDecoration:'none' , color:'black' }} >
<p className='docdes-box1' style={{backgroundColor:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left'  }} > View All Specialization </p>
</a> */}

           
        </div>
    )



}

export default DoctorBySpecialization;