import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import '../screen/doctorgrid.css'
import {useDispatch ,  useSelector } from 'react-redux';


const SpecializationGrid=( {val} )=>{



    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    
   

    return(
        <div className='iii' >

{
        bengali ? ( <p>
              <a href={`${val.link2}`} style={{ textDecoration: 'none' }} >
            
                <img src={val.img2} id="img-docgrid1" ></img>
                <h4 style={{ color: 'black' }} > {val.fieldbangla} </h4>
                <h5 className='consult-now' >এখনই পরামর্শ করুন</h5>
              </a>

        </p> ) : ( <p>
          {
            english ? (
              <p>

<a href={`${val.link2}`} style={{ textDecoration: 'none' }} >
           
                <img src={val.img2} id="img-docgrid1" ></img>
                <h4 style={{ color: 'black' }} > {val.field} </h4>
                <h5 className='consult-now' >Consult Now</h5>
              </a>

              </p>
            ) : (
              <p>

<a href={`${val.link2}`} style={{ textDecoration: 'none' }} >
            
                <img src={val.img2} id="img-docgrid1" ></img>
                <h4 style={{ color: 'black' }} > {val.field} </h4>
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

export default SpecializationGrid