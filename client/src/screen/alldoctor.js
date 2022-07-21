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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const AllDoctors=()=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

    


const alldoctos = useSelector(state=>state.GetAllDoctorReducer)
const {loading , doctors , error} = alldoctos


const dispatch = useDispatch()

useEffect( ()=>{


    dispatch(GetAllDoctorAction())
}  ,[])






    return(
        <div>

{
        bengali ? ( <p>

<br/><br/><br/><br/>
<div id='book-app' >
            <h2 id='smallh2' >একটি ইন-ক্লিনিকে পরামর্শের জন্য একটি অ্যাপয়েন্টমেন্ট বুক করুন</h2>
            </div>
            <h4 style={{color:'grey'}} id='smallh6'  ></h4>

            
              
           

      


            <div className="gridcontain1"  >
             
            {loading ? <h1> <Loader/> </h1> :error ? (<h1>কিছু ভুল হয়েছে</h1>) :
            
            
    (

        
        
        doctors.slice(0, 6).map(prod=>{
         

return <div 
//className="card" 
id="content" 

>
                <DoctorGrid prod={prod}  />
                
                </div>




         

          
              
                
        })


    ) } 




<a href="/alldoctors" style={{textDecoration:'none' , color:'black' }} >
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'#0EB9B8' , border:'1px solid white' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
সবগুলো দেখ
 </p>
</a>
</div>

        </p> ) : ( <p>
          {
            english ? (
              <p>




<br/><br/><br/><br/>
<div id='book-app' >
            <h2 id='smallh2' >Book an appointment for an in-clinic consultation</h2>
            </div>
             {/*<h4 style={{color:'grey'}} id='smallh6'  >Find experienced doctors across all specialties</h4>


             */}
              
           

      


            <div className="gridcontain1"  >
             
            {loading ? <h1> <Loader/> </h1> :error ? (<h1>Something Went Wrong</h1>) :
            
            
    (

        
        
        doctors.slice(0, 6).map(prod=>{
         

return <div 
//className="card" 
id="content" 

>
                <DoctorGrid prod={prod}  />
                
                </div>




         

          
              
                
        })


    ) } 




<a href="/alldoctors" style={{textDecoration:'none' , color:'black' }} >
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'#0EB9B8' , border:'1px solid white', marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
     See All </p>
</a>
</div>


              </p>
            ) : (
              <p>




<br/><br/><br/><br/>
<div id='book-app' >
            <h2 id='smallh2' >Book an appointment for an in-clinic consultation</h2>

       </div>     
             {/*<h4 style={{color:'grey'}} id='smallh6'  >Find experienced doctors across all specialties</h4>


             */}
              
           

      


            <div className="gridcontain1"  >
             
            {loading ? <h1> <Loader/> </h1> :error ? (<h1>Something Went Wrong</h1>) :
            
            
    (

        
        
        doctors.slice(0, 6).map(prod=>{
         

return <div id="content" >
                <DoctorGrid prod={prod}  />
                
                </div>




         

          
              
                
        })


    ) } 




<a href="/alldoctors" style={{textDecoration:'none' , color:'black' }} >
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'#0EB9B8' , border:'1px solid white' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
     See All </p>
</a>
</div>


                </p>
            )
          }
        </p> )
      }



        </div>
    )


}

export default AllDoctors;