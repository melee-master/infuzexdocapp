import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import '../screen/doctorgrid.css'
import {useDispatch ,  useSelector } from 'react-redux';
import './testing.css'

export default function DoctorGrid({prod})
{

   

    // window.onload = function() {
    //     if(!window.location.hash) {
    //         window.location = window.location + '#loaded';
    //         window.location.reload();
    //     }
    // }


   



    return(
        <div   >



{/* 

<div  className="iii" style={{border:'none'}} >

<Link to={`doctors/${prod._id}`} style={{textDecoration:'none' , color:'black' }}



>
             <div className="griditemm"   >



<div className='doc-grid' >
    <p  >
        <img  src={prod.image} id="img-docgrid" 
       

       
       />


        </p>

    <p style={{marginLeft:'15px'}} >  
    <h2 className='doc-name' >Dr. {prod.name} </h2>

<p className='doc-field' >{prod.field}   </p>


<p className='doc-exp' > {prod.experience} Years Exp</p>
<br/>
<p className='doc-field' > Fees : ₹{prod.fees} </p>


    </p>





</div>



</div>

</Link>


</div> */}





<div id='test-item' >
{/* <Link to={`doctors/${prod._id}`} style={{textDecoration:'none' , color:'black' }}



> */}

< a href= {`doctors/${prod._id}`} style={{textDecoration:'none' , color:'black' }}  >

    

<img  src={prod.image} 

//id="img-docgrid"

id="testing-image"

/>
<h2 className='doc-name' >Dr. {prod.name} </h2>

<p className='doc-field' >{prod.field}   </p>


<p className='doc-exp' > {prod.experience} Years Exp</p>
<br/>
<p className='doc-fees' > Fees : ₹{prod.fees} </p>

{/* </Link> */}

</a>


</div>
 


        </div>
    )


}