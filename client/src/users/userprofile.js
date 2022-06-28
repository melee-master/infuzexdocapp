import React from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import ChooseLanguage from "../doctors/chooselanguage";
import BookingList from "./bookingslist";
import { LogOutUser } from "../actions/useraction";
import UpdateUserProfile from "./updateuserprofile";
import './user.css'

const UserProfile=()=>{


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    
    const user = JSON.parse(localStorage.getItem('currentuser'))

    const dispatch = useDispatch()

    return(
        <div>

{
        bengali ? ( <p>











<div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<h2 className='user-name' >{user.name} {user.lname} </h2>
<p className='user-exp'style={{color:'black'}} > {user.email}  </p>
{/* <p className='user-id' >ব্যবহারকারী আইডি: {user._id} </p> */}
<br/>

<a href='/updateuser/chooselanguage' style={{textDecoration:'none' , color:'gray' , fontWeight:'bold' }}


>
<p className='user-exp' 

style={{color:'#00308F'}}

title='Change Your Language Here'


>এখানে আপনার ভাষা পরিবর্তন করুন</p>
</a>

<hr/>
<div id='containerbox-user' >



<Link to='/updateuser/bookinglist' >
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' }}  >

আমার বুকিং
    
</div>
</Link>


<Link to='/updateuser/update' style={{textDecoration:'none' , color:'black' }} > 
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' ,fontSize:'smaller'}}  >

আমার অ্যাকাউন্ট
    
</div>
</Link>


<Link  >
<div

onClick={() => { dispatch(LogOutUser()) }}

className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black'  }}  >
<i class="fas fa-sign-out-alt"></i>
&nbsp;
প্রস্থান
    
</div>
</Link>


</div>



<br/><br/>

          </div>

          <Switch>

<Route path="/updateuser/update" component={UpdateUserProfile}   ></Route>

<Route path="/updateuser/bookinglist"    ><BookingList userid={user._id} /></Route>
<Route path="/updateuser/chooselanguage"  component={ChooseLanguage}   ></Route>


</Switch>








        </p> ) : ( <p>
          {
            english ? (
              <p>









<div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<h2 className='user-name' >{user.name} {user.lname} </h2>
<p className='user-exp'style={{color:'black'}} > {user.email}  </p>
{/* <p className='user-id' >User Id: {user._id} </p> */}

<br/>
<a href='/updateuser/chooselanguage' style={{textDecoration:'none' , color:'gray' , fontWeight:'bold' }}


>
<p className='user-exp' style={{color:'#00308F'}}

title='Change Your Language Here'

>Change Your Language Here</p>
</a>

<hr/>
<div id='containerbox-user' >



<Link to='/updateuser/bookinglist' >
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black'  }}  >

    My Bookings
    
</div>
</Link>




<Link to='/updateuser/update' style={{textDecoration:'none' , color:'black' }} > 
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' , fontSize:'smaller' }}  >

    Update My Account
    
</div>
</Link>



<Link  >
<div

onClick={() => { dispatch(LogOutUser()) }}

className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black'  }}  >
<i class="fas fa-sign-out-alt"></i>
&nbsp;
    Logout
    
</div>
</Link>



{/* <Link>
<div className="boxb" 

onClick={() => { dispatch(LogOutUser()) }}
style={{width:'80%' , color:'white' , backgroundColor:'black' , fontSize:'smaller' }}
>

Logout
</div>
</Link> */}




</div>



<br/><br/>

          </div>

          <Switch>

<Route path="/updateuser/update" component={UpdateUserProfile}   ></Route>

<Route path="/updateuser/bookinglist"    ><BookingList userid={user._id} /></Route>
<Route path="/updateuser/chooselanguage"  component={ChooseLanguage}   ></Route>
</Switch>







              </p>
            ) : (
              <p>











<div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<h2 className='user-name' >{user.name} {user.lname} </h2>
<p className='user-exp'style={{color:'black'}} > {user.email}  </p>
<p className='user-id' >User Id: {user._id} </p>

<br/>
<a href='/updateuser/chooselanguage' style={{textDecoration:'none' , color:'gray' , fontWeight:'bold' }}


>
<p className='user-exp' 

style={{color:'#00308F'}}

title='Change Your Language Here'


>Change Your Language Here</p>
</a>


<hr/>
<div id='containerbox-user' >



<Link to='/updateuser/bookinglist' >
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' }}  >

    My Bookings
    
</div>
</Link>




<Link to='/updateuser/update' style={{textDecoration:'none' , color:'black' }} > 
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' ,  fontSize:'smaller'  }}  >

    Update My Account
    
</div>
</Link>




<Link  >
<div

onClick={() => { dispatch(LogOutUser()) }}

className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black'  }}  >
<i class="fas fa-sign-out-alt"></i>
&nbsp;
    Logout
    
</div>
</Link>


</div>



<br/><br/>

          </div>

          <Switch>

<Route path="/updateuser/update" component={UpdateUserProfile}   ></Route>

<Route path="/updateuser/bookinglist"    ><BookingList userid={user._id} /></Route>
<Route path="/updateuser/chooselanguage"  component={ChooseLanguage}   ></Route>
</Switch>







                </p>
            )
          }
        </p> )
      }


       

          

        </div>
    )


}

export default UserProfile