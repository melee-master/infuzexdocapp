import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import './coming.css'
const ComingSoon = ()=>{
    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')


    return(
        <div>

            {
                bengali ? ( <p>

<img 
           
           src='https://cdn.dribbble.com/users/508543/screenshots/7122590/media/7b5c4f53467d3f586a06ec39f821b084.gif'
      
           id='coming-soon'

           />

<h1 style={{marginTop:'-8%' , color:'#0EB9B8' }} >শীঘ্রই আসছে
</h1>
                </p> ) : ( <p> 


                    <img 
           
           src='https://cdn.dribbble.com/users/508543/screenshots/7122590/media/7b5c4f53467d3f586a06ec39f821b084.gif'
      
           id='coming-soon'

           />

           <h1 style={{marginTop:'-8%' , color:'#0EB9B8' }} >Coming Soon</h1>

                </p> )
            }
           
        

        </div>
    )

}
export default ComingSoon;