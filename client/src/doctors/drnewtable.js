
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';

import { useEffect } from 'react';
import Loader from '../component/loader'


const DoctorTableStyle=({i})=>{

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')

return(
    <div>
     {
         bengali ? ( <p>


{
            i.checkif==='false'?(<p >



<div>

<p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



  
</p>


<div id='bookingbox'  >

    <h4 id='heading' style={{backgroundColor:'#7C0A02'}}  >  {i.slot} &nbsp; চালু &nbsp;  {i.date} </h4>


    <div id='containerbox' style={{ textAlign: 'justify' }} >
       
       
      
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > 
নাম: </span>{i.name} {i.lname} </p>



                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > যোগাযোগের ঠিকানা
 : </span> {i.contactnumber} </p>



                                    <p
                                    
                                    style={{color:'#7C0A02'}}
                                    
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > স্ট্যাটাস : </span> বিচারাধীন </p>
                                    <p>
                                    <a href={`/bookings/${i._id}`} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > বিস্তারিত দেখুন
 :  </span>
                                    
                                    
                                                           
                                    &nbsp;   <i class="fas fa-file-invoice" style={{ color: 'black', border: 'none' }} ></i>
                                                            
                                                        </a>
                                    
                                    </p>

                                  



     


    </div>






</div>

<br />





</div>
                
               
                
                
                
                </p>):( <p >



<div>

<p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



  
</p>


<div id='bookingbox'  >

    <h4 id='heading' style={{backgroundColor:'#008000'}}  >  {i.slot} &nbsp; চালু  {i.date}  </h4>


    <div id='containerbox' style={{ textAlign: 'justify' }} >
       
       
      
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > নাম: </span>{i.name} {i.lname} </p>



                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > যোগাযোগের ঠিকানা : </span> {i.contactnumber} </p>



                                    <p
                                    
                                    style={{color:'#008000'}}
                                    
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > স্ট্যাটাস : </span> সম্পন্ন </p>
                                 <p>
                                    <a href={`/bookings/${i._id}`} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > বিস্তারিত দেখুন
 :  </span>
                                    
                                    
                                                           
                                    &nbsp;   <i class="fas fa-file-invoice" style={{ color: 'black', border: 'none' }} ></i>
                                                            
                                                        </a>
                                    
                                    </p>

                                  



     


    </div>






</div>

<br />





</div>
                
               
                
                
                
                </p> )
        }




         </p> ) : ( <p >
             
        {
            i.checkif==='false'?(<p >



<div>

<p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



  
</p>


<div id='bookingbox'  >

    <h4 id='heading' style={{backgroundColor:'#7C0A02'}}  >  {i.slot} &nbsp; on &nbsp;  {i.date} </h4>


    <div id='containerbox' style={{ textAlign: 'justify' }} >
       
       
      
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Name : </span>{i.name} {i.lname} </p>



                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Contact Details : </span> {i.contactnumber} </p>



                                    <p
                                    
                                    style={{color:'#7C0A02'}}
                                    
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Status : </span> Pending </p>
                                    <p>
                                    <a href={`/bookings/${i._id}`} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > View Details :  </span>
                                    
                                    
                                                           
                                    &nbsp;   <i class="fas fa-file-invoice" style={{ color: 'black', border: 'none' }} ></i>
                                                            
                                                        </a>
                                    
                                    </p>

                                  



     


    </div>






</div>

<br />





</div>
                
               
                
                
                
                </p>):( <p >



<div>

<p style={{ marginLeft: 'auto', marginRight: 'auto' }} >



  
</p>


<div id='bookingbox'  >

    <h4 id='heading' style={{backgroundColor:'#008000'}}  >  {i.slot} &nbsp; on  {i.date}  </h4>


    <div id='containerbox' style={{ textAlign: 'justify' }} >
       
       
      
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Name : </span>{i.name} {i.lname} </p>



                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Contact Details : </span> {i.contactnumber} </p>



                                    <p
                                    
                                    style={{color:'#008000'}}
                                    
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > Status : </span> Completed </p>
                                         <p>
                                    <a href={`/bookings/${i._id}`} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='heading-content' > View Details :  </span>
                                    
                                    
                                                           
                                    &nbsp;   <i class="fas fa-file-invoice" style={{ color: 'black', border: 'none' }} ></i>
                                                            
                                                        </a>
                                    
                                    </p>


                                  



     


    </div>






</div>

<br />





</div>
                
               
                
                
                
                </p> )
        }    
             
             
             </p> )
     }
    </div>
)

}
export default DoctorTableStyle;