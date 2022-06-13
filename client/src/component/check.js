import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'
import { createBrowserHistory } from 'history'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import './check.css'

const CheckPage=()=>{


    return(
        <div>
<div class="confirm" style={{marginLeft:'auto' , marginRight:'auto' , marginTop:'5%' }} >
  <svg class="confirm__progress">
    <circle class="confirm__value" cx="50%" cy="50%" r="54"  />
  </svg>
  <div class="confirm__inner" style={{color:'white'}} />
</div>


        </div>
    )


}

export default CheckPage