import React from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import EditDoctor from "../admin/editdoc";
import GetCompounder from "../compounder/allcompounder";
import ChooseLanguage from "./chooselanguage";
import CompounderRegister from "./compunderreg";
import DailySchedule from "./dailyschedule";
import CheckSchedule from "./drcheckschedule";
import PatientsList from "./patientslist";
import UpdateProfile from "./updateprofile";


const DoctorWelcomeScreen=()=>{



    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')




    const doctor = JSON.parse(localStorage.getItem('doctor'))
console.log(doctor)
  var anyobject = doctor.status

    return(
        <div>




{
        bengali ? ( <p>






{ anyobject ? (
          
          <p>
          
   {
       anyobject==='false'?(  <div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
       <p> সাইন আপ করার জন্য ধন্যবাদ ! <i class="fa-solid fa-party-horn"></i> </p>
       
       <h6 style={{fontWeight:'normal'}} > আপনার প্রোফাইল যাচাইকরণের মধ্য দিয়ে গেছে, অ্যাডমিনের কাছ থেকে যাচাই করা হলে আপনার প্রোফাইল স্ক্রিনে দেখাবে </h6>
       
       
       
       <br/><br/>
       
                 </div> ):(<p><div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<p> ফিরে আসার জন্য স্বাগতম
 <i class="fa-solid fa-party-horn"></i> </p>
</div></p>)
   }







      </p>  
          
          
          ):(
            <div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
            <p> 
সাইন আপ করার জন্য ধন্যবাদ ! <i class="fa-solid fa-party-horn"></i> </p>
            
            <h6 style={{fontWeight:'normal'}} > আপনার প্রোফাইল যাচাইকরণের মধ্য দিয়ে গেছে, অ্যাডমিনের কাছ থেকে যাচাই করা হলে আপনার প্রোফাইল স্ক্রিনে দেখাবে  </h6>
            
            
            
            <br/><br/>
            
                      </div> 
          ) }







        </p> ) : ( <p>
          {
            english ? (
              <p>

<br/><br/>





{ anyobject ? (
          
          <p>
          
   {
       anyobject==='false'?(  <div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
       <p> Thanks For Signing Up ! <i class="fa-solid fa-party-horn"></i> </p>
       
       <h6 style={{fontWeight:'normal'}} > Your profile has undergone for verification , Your profile will show on screen once its verified from Admin  </h6>
       
       
       
       <br/><br/>
       
                 </div> ):(<p><div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<p> Welcome Back ! <i class="fa-solid fa-party-horn"></i> </p>
</div></p>)
   }







      </p>  
          
          
          ):(
            <div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
            <p> Thanks For Signing Up ! <i class="fa-solid fa-party-horn"></i> </p>
            
            <h6 style={{fontWeight:'normal'}} > Your profile has undergone for verification , Your profile will show on screen once its verified from Admin  </h6>
            
            
            
            <br/><br/>
            
                      </div> 
          ) }













              </p>
            ) : (
              <p>






{ anyobject ? (
          
          <p>
          
   {
       anyobject==='false'?(  <div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
       <p> Thanks For Signing Up ! <i class="fa-solid fa-party-horn"></i> </p>
       
       <h6 style={{fontWeight:'normal'}} > Your profile has undergone for verification , Your profile will show on screen once its verified from Admin  </h6>
       
       
       
       <br/><br/>
       
                 </div> ):(<p><div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<p> Welcome Back ! <i class="fa-solid fa-party-horn"></i> </p>
</div></p>)
   }







      </p>  
          
          
          ):(
            <div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
            <p> Thanks For Signing Up ! <i class="fa-solid fa-party-horn"></i> </p>
            
            <h6 style={{fontWeight:'normal'}} > Your profile has undergone for verification , Your profile will show on screen once its verified from Admin  </h6>
            
            
            
            <br/><br/>
            
                      </div> 
          ) }





                </p>
            )
          }
        </p> )
      }

        



       


        </div>
    )


}

export default DoctorWelcomeScreen;