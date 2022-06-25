import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import '../screen/doctorgrid.css'
import {useDispatch ,  useSelector } from 'react-redux';
import './testing.css'

export default function DoctorGrid({prod})
{

   


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    
   



    return(
        <div   >


{
        bengali ? ( <p>


< a href= {`doctors/${prod._id}`} style={{textDecoration:'none' , color:'black' }}  >
<div id='test-item' >



    

<img  src={prod.image} 



id="testing-image"

/>
<h2 className='doc-name' >
ডাঃ {prod.name} </h2>

<p className='doc-field' >{prod.field}   </p>


<p className='doc-exp' > {prod.experience} বছর মেয়াদ</p>

<p className='doc-fees' >  ফি: ₹{prod.fees} </p>
<br/>
<p className='consult-now-1'  >দেখা হবে
</p>






</div>
</a>

        </p> ) : ( <p>
          {
            english ? (
              <p>
 
< a href= {`doctors/${prod._id}`} style={{textDecoration:'none' , color:'black' }}  >
<div id='test-item' >



    

<img  src={prod.image} 



id="testing-image"

/>
<h2 className='doc-name' >
Dr. {prod.name} </h2>

<p className='doc-field' >{prod.field}   </p>


<p className='doc-exp' > {prod.experience} Years Exp</p>

<p className='doc-fees' > Fees: ₹{prod.fees} </p>
<br/>
<p className='consult-now-1'  >Consult Now</p>






</div>
</a>

              </p>
            ) : (
              <p>
      
< a href= {`doctors/${prod._id}`} style={{textDecoration:'none' , color:'black' }}  >
<div id='test-item' >



    

<img  src={prod.image} 



id="testing-image"

/>
<h2 className='doc-name' >
Dr. {prod.name} </h2>

<p className='doc-field' >{prod.field}   </p>


<p className='doc-exp' > {prod.experience} Years Exp</p>

<p className='doc-fees' > Fees: ₹{prod.fees} </p>
<br/>
<p className='consult-now-1'  >Consult Now</p>






</div>
</a>

                </p>
            )
          }
        </p> )
      }





 


        </div>
    )


}








// import React , {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import Rating from 'react-rating'
// import '../screen/doctorgrid.css'
// import {useDispatch ,  useSelector } from 'react-redux';
// import './testing.css'

// export default function DoctorGrid({prod})
// {

   

  


   



//     return(
//         <div   >

// < a href= {`doctors/${prod._id}`} style={{textDecoration:'none' , color:'black' }}  >
// <div id='test-item' >



    

// <img  src={prod.image} 



// id="testing-image"

// />
// <h2 className='doc-name' >
// Dr. {prod.name} </h2>

// <p className='doc-field' >{prod.field}   </p>


// <p className='doc-exp' > {prod.experience} Years Exp</p>

// <p className='doc-fees' > Fees: ₹{prod.fees} </p>
// <br/>
// <p className='consult-now-1'  >Consult Now</p>






// </div>
// </a>


//         </div>
//     )


// }