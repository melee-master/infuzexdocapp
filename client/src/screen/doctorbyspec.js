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

   
var sizecheck = false 

const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 430) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})


    

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



{isMobile? (<p>

<Carousel

infiniteLoop={true}

autoPlay={true}

interval={5000}

>

<p>
<a href='/physician' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://i.pinimg.com/736x/b5/75/7a/b5757a2eed2300820433e4083ae635c2.jpg' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Physician</h4>

                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>
</p>

<p>
<a href='/dermatologist' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://media.istockphoto.com/vectors/dermatology-and-skin-health-care-concept-vector-flat-modern-doctor-vector-id1304919796?k=20&m=1304919796&s=612x612&w=0&h=Qp8bPxPspSilMqF5KCss99fPOkQyANj10o12-7T1pew=' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Dermatologist </h4>
                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>

</p>

<p>
<a href='/paediatrician' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://img.freepik.com/free-vector/visiting-pediatrician-semi-flat-rgb-color-vector-illustration-mother-with-toddler-female-doctor-isolated-cartoon-characters-white-background_106317-17504.jpg?w=2000' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Paediatrician</h4>
                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>

</p>


<p>
<a href='/psychiatrist' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://us.123rf.com/450wm/happyvector071/happyvector0711601/happyvector071160100426/51469380-abstract-creative-concept-vector-silhouette-head-for-web-and-mobile-applications-isolated-on-white-b.jpg?ver=6' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Psychiatrist</h4>
                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>

    </p>




    <p>
<a href='/dentist' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://img.freepik.com/free-vector/dental-care-concept-illustration_52683-65383.jpg?w=2000' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Dentist</h4>
                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>

    </p>








  




</Carousel>


</p>):(
   <div className='Doc-by-Spec' 
   
   
   
   >

   <a href='/physician' style={{ textDecoration: 'none' }} >
                       <p>
                           <img src='https://i.pinimg.com/736x/b5/75/7a/b5757a2eed2300820433e4083ae635c2.jpg' id="img-docgrid1" />
                           <br />
                           <h4 style={{ color: 'black' }} >Physician</h4>
   
                           <h5 className='consult-now' >Consult Now</h5>
                       </p>
                   </a>
              
   
                  
                   <a href='/dermatologist' style={{ textDecoration: 'none' }} >
                       <p>
                           <img src='https://media.istockphoto.com/vectors/dermatology-and-skin-health-care-concept-vector-flat-modern-doctor-vector-id1304919796?k=20&m=1304919796&s=612x612&w=0&h=Qp8bPxPspSilMqF5KCss99fPOkQyANj10o12-7T1pew=' id="img-docgrid1" />
                           <br />
                           <h4 style={{ color: 'black' }} >Dermatologist </h4>
                           <h5 className='consult-now' >Consult Now</h5>
                       </p>
                   </a>
   
   
                   <a href='/paediatrician' style={{ textDecoration: 'none' }} >
                       <p>
                           <img src='https://img.freepik.com/free-vector/visiting-pediatrician-semi-flat-rgb-color-vector-illustration-mother-with-toddler-female-doctor-isolated-cartoon-characters-white-background_106317-17504.jpg?w=2000' id="img-docgrid1" />
                           <br />
                           <h4 style={{ color: 'black' }} >Paediatrician</h4>
                           <h5 className='consult-now' >Consult Now</h5>
                       </p>
                   </a>
   
   
   
                   <a href='/psychiatrist' style={{ textDecoration: 'none' }} >
                       <p>
                           <img src="https://us.123rf.com/450wm/happyvector071/happyvector0711601/happyvector071160100426/51469380-abstract-creative-concept-vector-silhouette-head-for-web-and-mobile-applications-isolated-on-white-b.jpg?ver=6" id="img-docgrid1" />
                           <br />
                           <h4 style={{ color: 'black' }} >Psychiatrist</h4>
                           <h5 className='consult-now' >Consult Now</h5>
                       </p>
                   </a>
   
                   
                  
   
               </div>
   
   
      
) }





    
           

            <div className="gridcontain1"  >


   





{/* <p className='docdes-box1' style={{backgroundColor:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left'  }} > View All Specialization </p> */}

<a href="/dr-by-specialization" style={{textDecoration:'none' , color:'black' }} >
<p className='docdes-box1' 

//id="navigationbutton"
style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 

>View All Specialization </p>
</a>

</div>



{/* <a href="/dr-by-specialization" style={{textDecoration:'none' , color:'black' }} >
<p className='docdes-box1' style={{backgroundColor:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left'  }} > View All Specialization </p>
</a> */}

           
        </div>
    )



}

export default DoctorBySpecialization;