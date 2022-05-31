import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import img1 from '../Images/docap.png'
import './navbar.css'
import { LogOutUser } from "../actions/useraction";
import AdminNavBar from "../admin/adminnavbar";
import { LogOutUserDoc } from "../actions/doctoraction";
import { LogOutUserCompounder } from "../actions/compounderaction";
import UpdateUser from "../screen/updateuser";
import { Link } from "react-router-dom";
import { BrowserRouter , Route } from "react-router-dom";

const Navbar = () => {

  const currentuser = JSON.parse(localStorage.getItem('currentuser'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  const doctor = JSON.parse(localStorage.getItem('doctor'))
  const compounder = JSON.parse(localStorage.getItem('compounder'))
  const dispatch = useDispatch()



  return (
    <div>





{ 

currentuser ? ( <div>

  <ul  >

    <a href="/">
      <li> <img src={img1} id="topimg" />  </li>
    </a>





    <li className="box1" style={{ float: 'right' }}

      onClick={() => { dispatch(LogOutUser()) }}

    >

      Logout
    </li>


<a href='/updateuser'>

    <li className="box2" style={{ float: 'right', color: 'black' }}  >

      Hello  {currentuser.name}
    </li>
 
</a>








  </ul>



</div> ) : (

  doctor ? ( <div>

    <ul  >

      <a href="/">
        <li> <img src={img1} id="topimg" />  </li>
      </a>





      <li className="box1" style={{ float: 'right' }}

        onClick={() => { dispatch(LogOutUserDoc()) }}

      >

        Logout
      </li>



      <a href='/drpage'>
        <li className="box2" style={{ float: 'right', color: 'black' }}  >

          Hello  {doctor.name}
        </li>
      </a>









    </ul>



  </div> ) : (
    compounder ? (


      <div>


              <ul  >

                <a href="/">
                  <li> <img src={img1} id="topimg" />  </li>
                </a>

         


                <li className="box1" style={{ float: 'right' }}

onClick={() => { dispatch(LogOutUserCompounder()) }}

>
Logout
</li>


       <a href='/compounder'>
        <li className="box2" style={{ float: 'right', color: 'black' }}  >
        <i class="fa fa-user" aria-hidden="true" id="steth" ></i>
           &nbsp; {compounder.name}
        </li>
      </a>


              </ul>

            </div>




    ) : (
     admin ? ( <p><AdminNavBar /></p> ) : (
      <div>


      <ul  >

        <a href="/">
          <li> <img src={img1} id="topimg" />  </li>
        </a>



        <a href="/user" style={{ color: 'black' }}  >
          <li className="box2" style={{ float: 'right', color: 'black' }} >

            <i class="fa fa-user" aria-hidden="true" id="steth" ></i>
            Users

          </li>
        </a>




        <a href="/doctor">
          <li className="box1" style={{ float: 'right' }}  >
            <i class="fa fa-stethoscope" id="steth"   ></i>
             Doctors
          </li>
        </a>





      </ul>

    </div>
     )
    )
  )


)

} 





    </div>
  )

}

export default Navbar;