import React from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import './docs.css'

const ChooseLanguage=()=>{


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    

    
    const tobengali=()=>{
        var bengali
        localStorage.removeItem('english')
        localStorage.setItem('bengali',bengali)
        window.location.reload()
    }


    const toenglish=()=>{
        var english
        localStorage.removeItem('bengali')
        localStorage.setItem('english',english)
        window.location.reload()
    }




    const langaugeenglish=()=>{
        var english
        localStorage.setItem('english',english)
        window.location.reload()
    }

    const languageBengali=()=>{
        var bengali
        localStorage.setItem('bengali',bengali)
        window.location.reload()
    }



    return(
        <div>

        














{
        bengali ? ( <p>









<div className='grid-lang' >

<p id='set-bg-img-1' > 

  


</p>



<p  >


<div 
id="boxcontain21"
 >


<br/><br/><br/>
                     <div  id='lang-box'>
                 <br/>
                   
                     <h4 style={{color:'gray'}} >আপনার বর্তমান ভাষা বাংলা</h4>
                     <h4 style={{color:'gray'}} >আপনি এটি পরিবর্তন করতে পারেন</h4>
         
                    
                     <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , marginTop:'3%'  }} 
   
        onClick={toenglish}
         
         >
         English
         </button>

<br/>
  
         
         
         <div>
   
         </div>
                   
         
         <br/><br/><br/>
                         </div>
       
    
    
    
    </div>
    </p>


</div>





              







        </p> ) : ( <p>
          {
            english ? (
              <p>





<div className='grid-lang' >

<p id='set-bg-img-1' > 

  


</p>



<p  >


<div 
id="boxcontain21"
 >


<br/><br/><br/>
                     <div  id='lang-box'>
                 <br/>
                   
                     <h4 style={{color:'gray'}} >Your current Language is English .</h4>
                     <h4 style={{color:'gray'}} >You can change it to</h4>
                    
    
         <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'white',color:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , marginTop:'3%'  }} 
  
         
         onClick={tobengali}

         >
        Bengali
         </button>
         
         
         <div>
   
         </div>
                   
         
         <br/><br/><br/>
                         </div>
       
    
    
    
    </div>
    </p>


</div>









              </p>
            ) : (
              <p>






<div className='grid-lang' >

<p id='set-bg-img-1' > 

  


</p>



<p  >


<div 
id="boxcontain21"
 >


<br/><br/><br/>
                     <div  id='lang-box'>
                 <br/>
                   
                     <h4 style={{color:'gray'}} >Please Choose Your Language </h4>
         
                    
                     <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , marginTop:'3%'  }} 
   
        onClick={langaugeenglish}
         
         >
         English
         </button>

<br/>
         <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'white',color:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , marginTop:'3%'  }} 
  
         onClick={languageBengali}
         >
        Bengali
         </button>
         
         
         <div>
   
         </div>
                   
         
         <br/><br/><br/>
                         </div>
       
    
    
    
    </div>
    </p>


</div>





              


                </p>
            )
          }
        </p> )
      }



        </div>
    )


}
export default ChooseLanguage;