import React from "react";
import FilterSearch from "../Header/Filter";
import dr from './drsearch.json'
import { useState } from "react";
import './loader.css'
import '../Header/filter.css'
import IllnessGrid from "../Header/illnessgrid";
import ComingSoon from "../screen/comingsoon";

const FilterDoctorIllness=()=>{

    const [SearchTerm , setSearchTerm] = useState('')

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')


    return(
        <div>


{
        bengali ? ( <p>

<ComingSoon />
{/* <input type='text' onChange={ (e)=>{ setSearchTerm( e.target.value) } } 

style={{width:'90%' , marginLeft:'5%' , marginRight:'auto' }}

placeholder='অসুস্থতা অনুসন্ধান করুন...'  
        id="search-style-filter"

></input>
<br/><br/><br/><br/><br/>

<div className='Doc-by-Spec1'>

{
    dr.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.search_tags.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ) .map( ( val ,key  )=>{

       
        return <div >
            
            <IllnessGrid val={val} /> 
          
          </div>

          
    } )
}
</div> */}

        </p> ) : ( <p>
          {
            english ? (
              <p>

                  <ComingSoon />
                  {/* <input type='text' onChange={ (e)=>{ setSearchTerm( e.target.value) } } 

style={{width:'90%' , marginLeft:'5%' , marginRight:'auto' }}

placeholder='Search Illness....'  
        id="search-style-filter"

></input>
<br/><br/><br/><br/><br/>

<div className='Doc-by-Spec1'>

{
    dr.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.search_tags.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ) .map( ( val ,key  )=>{

       
        return <div   >
            
            <IllnessGrid val={val} /> 
          
          </div>

          
    } )
}
</div> */}


              </p>
            ) : (
              <p>
<input type='text' onChange={ (e)=>{ setSearchTerm( e.target.value) } } 

style={{width:'90%' , marginLeft:'5%' , marginRight:'auto'  }}

placeholder='Search Illness....'  
        id="search-style-filter"

></input>
<br/><br/><br/><br/><br/>

<div className='Doc-by-Spec1' >

{
    dr.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.search_tags.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ) .map( ( val ,key  )=>{

       
        return <div   >
            
            <IllnessGrid val={val} 
            
           

            /> 
          
          </div>

          
    } )
}
</div>

                </p>
            )
          }
        </p> )
      }

           





        </div>
    )


}

export default FilterDoctorIllness