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
{/* <Link to={`doctors/${prod._id}`} style={{textDecoration:'none' , color:'black' }}
> */}



    

<img  src={prod.image} 

//id="img-docgrid"

id="testing-image"

/>
<h2 className='doc-name' >
ডাঃ {prod.name} </h2>

<p className='docdes-sub' style={{fontWeight:'bolder' , fontSize:'large' ,  marginTop:'-5%'}} >{prod.field}   </p>


<p className='docdes-sub' style={{fontWeight:'bold' ,  marginTop:'-3%'}} > {prod.experience} বছর মেয়াদ</p>
<br/>
<p className='docdes-sub' style={{   marginTop:'-2%' }} > ফি: ₹{prod.fees} </p>

{/* </Link> */}




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

<h3 className='docdes-name'  > Dr. {prod.name}    </h3>
        <p className='docdes-sub' style={{fontWeight:'bolder' , fontSize:'large' ,  marginTop:'-5%'}} > {prod.field} </p>
       
        <p className='docdes-sub' style={{fontWeight:'bold' ,  marginTop:'-3%'}}  > {prod.experience} Years Exp </p>
       
  
       <p className='docdes-sub' style={{   marginTop:'-2%' }} > Fees : ₹{prod.fees} </p>





<br/>
<p className='consult-now' >Consult Now</p>
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
{/* <h2 className='doc-name' >Dr. {prod.name} </h2>

<p className='doc-field' >{prod.field}   </p>


<p className='doc-exp' > {prod.experience} Years Exp</p>
<br/>
<p className='doc-fees' > Fees : ₹{prod.fees} </p> */}


<h3 className='docdes-name'  > Dr. {prod.name}    </h3>
        <p className='docdes-sub' style={{fontWeight:'bolder' , fontSize:'large' ,  marginTop:'-5%'}} > {prod.field} </p>
       
        <p className='docdes-sub' style={{fontWeight:'bold' ,  marginTop:'-3%'}}  > {prod.experience} Years Exp </p>
       
  
       <p className='docdes-sub' style={{   marginTop:'-2%' }} > Fees : ₹{prod.fees} </p>



<br/>

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