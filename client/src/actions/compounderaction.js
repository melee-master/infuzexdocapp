import axios from 'axios'
import { wind } from 'fontawesome';
import { useHistory } from "react-router-dom";




export const RegisterNewCompounder = (user) => dispatch => {



    dispatch({ type: 'Compounder_Register_Request' })




    axios.post('/api/compounder/register', user).then((res) => {
        dispatch({ type: 'Compounder_Register_Success' })


        window.location.href='/drpage/compounderinfo'
       // localStorage.setItem('currentuser', JSON.stringify(res.data))
        








    }).catch(err => {
        dispatch({ type: 'Compounder_Register_Failed', payload: err });


    })


}




export const LoginCompounder = (user) => dispatch => {



    dispatch({ type: 'Compounder_Login_Request' })

    axios.post('/api/compounder/login', user).then(res => {
        dispatch({ type: 'Compounder_Login_Success' })
        localStorage.setItem('compounder', JSON.stringify(res.data))
        window.location.href = '/compounder'

    }).catch(err => {
        dispatch({ type: 'Compounder_Login_Failed', payload: err })

    })


}




export const LogOutUserCompounder = () => dispatch => {


    localStorage.removeItem('compounder')
    
    dispatch({ type: 'Compounder_LogOut' })
    window.location.href = '/'


}


export const GetCompounderById=({docid})=>dispatch=>{

    dispatch({type:'GET_Compounder_BY_ID_REQUEST'})

    axios.post('/api/compounder/getcompounderbyid' , {docid} ).then(res=>{
       
      

        dispatch({type:'GET_Compounder_BY_ID_SUCCESS' , payload:res.data })

    }).catch(err=>{

       
        
        dispatch({type:'GET_Compounder_BY_ID_FAILED' , payload:err.response.data })
    })


}







export const DeleteCompounderAction = (compid)=>dispatch=>{

    dispatch({type:'DELETE_Compounder_REQUEST' })

    axios.post('/api/compounder/deletecompounder' , {compid} ).then( res=>{
        dispatch({type:'DELETE_Compounder_SUCCESS' , payload : res.data })
   
        window.location.reload()

    } ).catch(err=>{
        dispatch({type:'DELETE_Compounder_FAILED' , payload : err })


    })



}



export const GetCompounderPatientsByUserIdAction=()=>(dispatch , getState ) =>{

    
    const userid = getState().LoginCompounderReducer.compounder.docid

    dispatch({type:'GET_PatientsBYID_REQUEST'})

    axios.post('/api/booking/getpatientsbyuserid' , {userid:userid} ).then( res=>{

        dispatch({type:'GET_PatientsBYID_SUCCESS' , payload:res.data })
       

    } ).catch(err=>{
        dispatch({type:'GET_PatientsBYID_FAILED' , payload:err })
        console.log(err)
    })


}
