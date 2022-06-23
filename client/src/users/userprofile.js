import React from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import BookingList from "./bookingslist";
import UpdateUserProfile from "./updateuserprofile";
import './user.css'

const UserProfile=()=>{


    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')
    
    const user = JSON.parse(localStorage.getItem('currentuser'))

   

    return(
        <div>

{
        bengali ? ( <p>











<div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<h2 className='user-name' >{user.name} {user.lname} </h2>
<p className='user-exp'style={{color:'black'}} > {user.email}  </p>
<p className='user-id' >ব্যবহারকারী আইডি: {user._id} </p>

<hr/>
<div id='containerbox' >

<Link to='/updateuser/update' style={{textDecoration:'none' , color:'black' }} > 
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' }}  >

আমার অ্যাকাউন্ট
    
</div>
</Link>

<Link to='/updateuser/bookinglist' >
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' }}  >

আমার বুকিং
    
</div>
</Link>

</div>



<br/><br/>

          </div>

          <Switch>

<Route path="/updateuser/update" component={UpdateUserProfile}   ></Route>

<Route path="/updateuser/bookinglist"    ><BookingList userid={user._id} /></Route>
</Switch>








        </p> ) : ( <p>
          {
            english ? (
              <p>









<div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<h2 className='user-name' >{user.name} {user.lname} </h2>
<p className='user-exp'style={{color:'black'}} > {user.email}  </p>
<p className='user-id' >User Id: {user._id} </p>

<hr/>
<div id='containerbox' >

<Link to='/updateuser/update' style={{textDecoration:'none' , color:'black' }} > 
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' }}  >

    Update My Account
    
</div>
</Link>

<Link to='/updateuser/bookinglist' >
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' }}  >

    My Bookings
    
</div>
</Link>

</div>



<br/><br/>

          </div>

          <Switch>

<Route path="/updateuser/update" component={UpdateUserProfile}   ></Route>

<Route path="/updateuser/bookinglist"    ><BookingList userid={user._id} /></Route>
</Switch>







              </p>
            ) : (
              <p>











<div class="card card-1" style={{width:'80%' , marginLeft:'auto' , marginRight:'auto' , borderRadius:'20px' , backgroundColor:'#f3f1f1' }} >

         
<h2 className='user-name' >{user.name} {user.lname} </h2>
<p className='user-exp'style={{color:'black'}} > {user.email}  </p>
<p className='user-id' >User Id: {user._id} </p>

<hr/>
<div id='containerbox' >

<Link to='/updateuser/update' style={{textDecoration:'none' , color:'black' }} > 
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' }}  >

    Update My Account
    
</div>
</Link>

<Link to='/updateuser/bookinglist' >
<div className='boxb' style={{width:'80%' , color:'white' , backgroundColor:'black' }}  >

    My Bookings
    
</div>
</Link>

</div>



<br/><br/>

          </div>

          <Switch>

<Route path="/updateuser/update" component={UpdateUserProfile}   ></Route>

<Route path="/updateuser/bookinglist"    ><BookingList userid={user._id} /></Route>
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