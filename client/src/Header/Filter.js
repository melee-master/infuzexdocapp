import React , {useState} from "react";
import { FilterProducts } from "../actions/doctoraction";
import {useDispatch , useSelector  } from 'react-redux'
import './filter.css';
import { fontAwesome } from "fontawesome";


const FilterSearch=()=>{
    const [searchkey , setsearchkey] = useState('')
const dispatch=useDispatch()

const searchas=()=>{
    dispatch(FilterProducts(searchkey))
}

    return(
        <div>




<div className='grid-box' >



<p>

<input type='text' placeholder=' &#xF002; Search Doctors....'  
        id="search-style-filter"
        
        value={searchkey} 
        onChange={ (e)=>{ setsearchkey(e.target.value) }  }
       
        className='fontAwesome'

                  


        

        
        ></input>


    </p>


<p>

<button onClick={searchas} 
        
         className='docdes-box1' 
        //style={{
        //     backgroundColor: 'black',

        //     color: 'white',
        //     width: '75%',
        //     marginLeft: '20%'



        // }} 
        id='post-button'
        
        >Search</button>


    </p>
       





</div>

       


<br/><br/>

        </div>
    )



}



export default FilterSearch;