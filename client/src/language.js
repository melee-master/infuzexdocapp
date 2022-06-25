import react from 'react';
import App from './App';
import HomeScreen from './screen/HomeScreen';
import './lang.css'
const LanguageSelector=()=>{

    const bengali = localStorage.getItem('bengali')
const english = localStorage.getItem('english')


    const langaugeenglish=()=>{
        var english
        localStorage.setItem('english',english)
        window.location.href='/makechoice'
    }

    const languageBengali=()=>{
        var bengali
        localStorage.setItem('bengali',bengali)
        window.location.href='/makechoice'
    }


    return(
        <div>

            {
                bengali ? (
                    <p>
                       {
                           window.location.href='/makechoice'
                       }

                    </p>
                ) : (
                    
                    <div>

                        {
                            english ? (
                                <div>
                     {
                           window.location.href='/makechoice'
                       }
                                    </div>
                            ) : (
                                
                                <p>
                                    <br/>
                                      <h1>Welcome to Docap!</h1>
 <div className='grid-lang' >

<p id='set-bg-img' > 

    {/* <img src='https://res.cloudinary.com/jerrick/image/upload/v1498775933/v9pscwg2c2luotyeuk7a.png' id="img-lang"  ></img> */}


</p>



<p  >


<div 
id="boxcontain21"
 >


<br/><br/><br/>
                     <div 
                     //style={{  width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'12px' , boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                     
                     id='lang-box'
                     
                     >
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

         
         
                 </div>
                )
            }

            
        </div>
    )

}

export default LanguageSelector;