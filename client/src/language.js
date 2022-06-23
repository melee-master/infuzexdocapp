import react from 'react';
import App from './App';
import HomeScreen from './screen/HomeScreen';

const LanguageSelector=()=>{

    const bengali = localStorage.getItem('bengali')
const english = localStorage.getItem('english')


    const langaugeenglish=()=>{
        var english
        localStorage.setItem('english',english)
        window.location.href='/homescreen'
    }

    const languageBengali=()=>{
        var bengali
        localStorage.setItem('bengali',bengali)
        window.location.href='/homescreen'
    }


    return(
        <div>

            {
                bengali ? (
                    <p>
                       {
                           window.location.href='/homescreen'
                       }

                    </p>
                ) : (
                    
                    <div>

                        {
                            english ? (
                                <div>
                     {
                           window.location.href='/homescreen'
                       }
                                    </div>
                            ) : (
                                <p>

<br/><br/><br/><br/><br/>
                     <div style={{  width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'12px' , boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
                 <br/>
                     <h1>Welcome to Docap!</h1>
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
    <p>You can change this in User's Settings</p>
         </div>
                   
         
         <br/><br/><br/><br/><br/>
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