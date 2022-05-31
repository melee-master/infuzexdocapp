import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import '../screen/doctorgrid.css'
import {useDispatch ,  useSelector } from 'react-redux';


const IllnessGrid=( {val} )=>{

   

    return(
        <div className='iii' >

           
            
            <a href={`${val.link}`} style={{ textDecoration: 'none' }} >
            <h4 style={{ color: 'black' }} > {val.symptom} </h4>
                <img src={val.img} id="img-docgrid1" ></img>
                <h5 className='consult-now' >Consult Now</h5>
              </a>


              
           
        </div>
    )


}

export default IllnessGrid