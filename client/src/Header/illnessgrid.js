import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import '../screen/doctorgrid.css'
import {useDispatch ,  useSelector } from 'react-redux';


const IllnessGrid=( {val} )=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')


    return(
        <div className='iii'
        
       

        >

{
        bengali ? ( <p>
             <a href={`${val.link}`} style={{ textDecoration: 'none' }} >
            
                <img src={val.img} id="img-docgrid1" ></img>
                <h4 style={{ color: 'black' }} > {val.namebangla} </h4>
                <h5 className='consult-now' >এখনই পরামর্শ করুন</h5>
              </a>


        </p> ) : ( <p>
          {
            english ? (
              <p>
  <a href={`${val.link}`} style={{ textDecoration: 'none' }} >
           
                <img src={val.img} id="img-docgrid1" ></img>
                <h4 style={{ color: 'black' }} > {val.symptom} </h4>
                <h5 className='consult-now'  >Consult Now</h5>
              </a>


              </p>
            ) : (
              <p>
  <a href={`${val.link}`} style={{ textDecoration: 'none' }} >
           
                <img src={val.img} id="img-docgrid1" ></img>
                <h4 style={{ color: 'black' }} > {val.symptom} </h4>
                <h5 className='consult-now' >Consult Now</h5>
              </a>


                </p>
            )
          }
        </p> )
      }


           
            
          

              
           
        </div>
    )


}

export default IllnessGrid