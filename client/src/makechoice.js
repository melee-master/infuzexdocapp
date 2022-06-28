import react from 'react';
import App from './App';
import HomeScreen from './screen/HomeScreen';
import './lang.css'
const MakeChoice=()=>{

    const bengali = localStorage.getItem('bengali')
const english = localStorage.getItem('english')

const user = JSON.parse(localStorage.getItem('currentuser'))
const admin=JSON.parse(localStorage.getItem('admin'))
const doctor = JSON.parse(localStorage.getItem('doctor'))
const compounder = JSON.parse(localStorage.getItem('compounder'))



//Some Hashing






//



    const touser=()=>{
       
        window.location.href='/user'
    }

    const todoctor=()=>{
       
        window.location.href='/doctor'
    }


    return(
        <div>

            {
                bengali ? (
                    <p>
                              {
                                        user?( <p style={{color:'white'}} >
                                            {window.location.href='/homescreen'}
                                        </p> ) : ( <p>

                                                            {
                                                                doctor ? (<p style={{color:'white'}}>
                                                                     {window.location.href='/homescreen'}
                                                                </p>) : (<p>
                                                                          {
                                                                              compounder?  (<p style={{color:'white'}}>
                                                                                  {window.location.href='/homescreen'}
                                                                              </p>) : (
                                                                                  <p>
                                                                                                                                                         <br/>
                                      <h1>হিসাবে চালিয়ে যান...</h1>
 <div className='grid-lang' >

<p id='set-bg-img-makechoice' > 

   


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
                   
                     <h4 style={{color:'gray'}} > </h4>
         
                    
                     <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'auto' , marginTop:'3%' , width:'50%' }} 
   
         onClick={todoctor}
         
         >
              <i class="fa fa-stethoscope" id="steth"   ></i>
        ডাক্তার

         </button>

<br/>
         <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'white',color:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'auto' , marginTop:'3%' , width:'50%'  }} 
   onClick={touser}
         
         >
              <i class="fa fa-user" aria-hidden="true" id="steth" ></i>
      ব্যবহারকারী  
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
                                                                </p>)
                                                            }
                                        </p> )
                                    }

                    </p>
                ) : (
                    
                    <div>

                        {
                            english ? (
                                <div>
                                    {
                                        user?( <p>
                                            {window.location.href='/homescreen'}
                                        </p> ) : ( <p>

                                                            {
                                                                doctor ? (<p>
                                                                     {window.location.href='/homescreen'}
                                                                </p>) : (<p>
                                                                          {
                                                                              compounder?  (<p>
                                                                                  {window.location.href='/homescreen'}
                                                                              </p>) : (
                                                                                  <p>
                                                                                         <br/>
                                      <h1>Continue As...</h1>
 <div className='grid-lang' >

<p id='set-bg-img-makechoice' > 

   


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
                   
                     <h4 style={{color:'gray'}} > </h4>
         
                    
                     <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'auto' , marginTop:'3%' , width:'50%' }} 
   
         onClick={todoctor}
         
         >
              <i class="fa fa-stethoscope" id="steth"   ></i>
         Doctor
         </button>

<br/>
         <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'white',color:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'auto' , marginTop:'3%' , width:'50%' }} 
   onClick={touser}
         
         >
              <i class="fa fa-user" aria-hidden="true" id="steth" ></i>
      &nbsp;  User  &nbsp;
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
                                                                </p>)
                                                            }
                                        </p> )
                                    }
                     
                                    </div>
                            ) : (
                                
                                <p>
                                    <br/>
                                      <h1>Continue As...</h1>
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
                   
                     <h4 style={{color:'gray'}} > </h4>
         
                    
                     <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'black',color:'white' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , marginTop:'3%' ,  width:'50%' }} 
   
         onClick={todoctor}
         
         >
              <i class="fa fa-stethoscope" id="steth"   ></i>
         Doctor
         </button>

<br/>
         <button  
         
         className='docdes-box1'
        
         style={{backgroundColor:'white',color:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , marginTop:'3%' , width:'50%' }} 
   onClick={touser}
         
         >
              <i class="fa fa-user" aria-hidden="true" id="steth" ></i>
        User
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

export default MakeChoice;