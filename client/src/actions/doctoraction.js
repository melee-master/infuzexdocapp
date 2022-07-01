import axios from 'axios'
import { wind } from 'fontawesome';
import { useHistory } from "react-router-dom";





export const RegisterNewDoctor = (user) => dispatch => {



    dispatch({ type: 'Doctor_Register_Request' })




    axios.post('/api/doctor/register', user).then((res) => {
        dispatch({ type: 'Doctor_Register_Success' })



        localStorage.setItem('doctor', JSON.stringify(res.data))
        window.location.href = '/drpage'








    }).catch(err => {
        dispatch({ type: 'Doctor_Register_Failed', payload: err });


    })


}





export const RegisterNewDoctorAdmin = (user) => dispatch => {



    dispatch({ type: 'Doctor_Register_Request' })




    axios.post('/api/doctor/register', user).then((res) => {
        dispatch({ type: 'Doctor_Register_Success' })



       // localStorage.setItem('currentuser', JSON.stringify(res.data))
        window.location.href = '/admin/doctorlist'








    }).catch(err => {
        dispatch({ type: 'Doctor_Register_Failed', payload: err });


    })


}




export const LoginUser = (user) => dispatch => {



    dispatch({ type: 'Doctor_Login_Request' })

    axios.post('/api/doctor/login', user).then(res => {
        dispatch({ type: 'Doctor_Login_Success' })
        localStorage.setItem('doctor', JSON.stringify(res.data))
        window.location.href = '/drpage'

    }).catch(err => {
        dispatch({ type: 'Doctor_Login_Failed', payload: err })

    })


}




export const LogOutUserDoc = () => dispatch => {


    localStorage.removeItem('doctor')
    
    dispatch({ type: 'Admin_LogOut' })
    window.location.href = '/'


}



export const GetAllDoctorAction = () => dispatch => {

    dispatch({ type: 'DRGET_ALL_REQUEST' })

    axios.get('/api/doctor/getalldoctors').then(res => {
        dispatch({ type: 'DRGET_ALL_SUCCESS', payload: res.data })

    }).catch(err => {
       
        dispatch({ type: 'DRGET_ALL_FAILED', payload: err })

    })

}


export const GetAllDoctorReqAction = () => dispatch => {

    dispatch({ type: 'ReqDRGET_ALL_REQUEST' })

    axios.get('/api/doctor/getalldoctorsreq').then(res => {
        dispatch({ type: 'ReqDRGET_ALL_SUCCESS', payload: res.data })

    }).catch(err => {
       
        dispatch({ type: 'ReqDRGET_ALL_FAILED', payload: err })

    })

}


export const ApproveDr = ({doctorid}) => dispatch => {

    dispatch({ type: 'ApproveDr_REQUEST' })
var value=true
    {console.log('Value of val' , value )}

    axios.post('/api/doctor/approvedr' , {doctorid} ).then(res => {
      
        console.log('Passes Because of' , res )
        dispatch({ type: 'ApproveDr_SUCCESS', payload: res.data })

        // window.location.reload()

    }).catch(err => {
        console.log('Failed Because of' , err )
        dispatch({ type: 'ApproveDr_FAILED', payload: err })

    })

}


export const GetDoctorById=({doctorid})=>dispatch=>{

    dispatch({type:'GET_DR_BY_ID_REQUEST'})

    axios.post('/api/doctor/getdoctorbyid' , {doctorid} ).then(res=>{
       
      

        dispatch({type:'GET_DR_BY_ID_SUCCESS' , payload:res.data })

    }).catch(err=>{

       
        
        dispatch({type:'GET_DR_BY_ID_FAILED' , payload:err.response.data })
    })

}



export const FilterProducts=(searchkey)=>dispatch=>{

    let filterproduct ;

    dispatch({type:'DRGET_ALL_REQUEST'})

    axios.get( '/api/doctor/getalldoctors' ).then(res=>{
        filterproduct = res.data
        if(searchkey)
        {
            filterproduct = res.data.filter(product=> {
                return product.name.toLowerCase().includes(searchkey.toLowerCase())
            } )
        }

    
        dispatch({ type:'DRGET_ALL_SUCCESS' , payload:filterproduct })



    }).catch(
        err=>{
            dispatch({type:'DRGET_ALL_FAILED' , payload:err })
        }
    )

}



export const FilterProducts2=(searchkey)=>dispatch=>{

    let filterproduct ;

    dispatch({type:'DRGET_ALL_REQUEST'})

    axios.get( '/api/doctor/getalldoctors' ).then(res=>{
        filterproduct = res.data
        
     

        if(searchkey!=='all')
        {
            filterproduct = res.data.filter( product=> {
                return product.field.toLowerCase().includes(searchkey.toLowerCase())
            } )
        }

        dispatch({ type:'DRGET_ALL_SUCCESS' , payload:filterproduct })



    }).catch(
        err=>{
            dispatch({type:'DRGET_ALL_FAILED' , payload:err })
        }
    )

}




export const GetDoctorByCategory=({category})=>dispatch=>{

    dispatch({type:'GET_DR_BY_CATEGORY_REQUEST'})

    axios.post('/api/doctor/getdoctorbycategory' , {category} ).then(res=>{
       
      

        dispatch({type:'GET_DR_BY_CATEGORY_SUCCESS' , payload:res.data })

    }).catch(err=>{

        console.log('error is ' , err )
        
        dispatch({type:'GET_DR_BY_CATEGORY_FAILED' , payload:err.response.data })
    })

}




export const FilterProductsTest=(searchkey,sortkey,category)=>dispatch=>{

    let filterproduct ;

    dispatch({type:'DRGET_ALL_REQUEST'})

    axios.get( '/api/doctor/getalldoctors' ).then(res=>{
        filterproduct = res.data
        if(searchkey)
        {
            filterproduct = res.data.filter(product=> {
                return product.name.toLowerCase().includes(searchkey)
            } )
        }

        if(sortkey!=='popular')
        {
            if(sortkey=='htl')
            {
                filterproduct = res.data.sort( (a,b)=>{
                    return -a.price + b.price
                } )
            }
            else{
                filterproduct = res.data.sort( (a,b)=>{
                    return a.price - b.price
                } )
            }
        }

        if(category!=='all')
        {
            filterproduct = res.data.filter( product=> {
                return product.field.toLowerCase().includes(category)
            } )
        }

        dispatch({ type:'DRGET_ALL_SUCCESS' , payload:filterproduct })



    }).catch(
        err=>{
            dispatch({type:'DRGET_ALL_FAILED' , payload:err })
        }
    )

}



export const AddProductReviewAction=(review , doctorid , userid , curname)=>(dispatch , getState )=> {

    dispatch({type:'GET_DR_REVIEW' })

    const nowuser = getState().LoginUserReducer.currentuser

    axios.post('/api/doctor/addreview' , {review , doctorid ,  userid , curname}  ).then(res=>{

        
        dispatch({type:'GET_DR_SUCCESS' })

        window.location.reload()



    }).catch(err=>{
        dispatch({type:'GET_DR_FAILED' })

    })


 
}





export const AddDoctorTimingAction=(review , doctorid )=>(dispatch , getState )=> {

    dispatch({type:'GET_DR_TIMING' })

   alert(doctorid)
    const nowuser = getState().LoginDocUserReducer.doctor
    axios.post('/api/doctor/addtiming' , {review , doctorid , nowuser }  ).then(res=>{

        
        dispatch({type:'GET_DR_TIMING_SUCCESS' })

        window.location.href='/drpage'



    }).catch(err=>{
        dispatch({type:'GET_DR_TIMING_FAILED' })

    })


 
}







export const UpdateDoctorAction= (doctorid , updatedproduct )=> dispatch=>{
    dispatch({type:'UPDATE_Doctor_REQUEST' })

    axios.post('/api/doctor/updatedoctor' , {doctorid , updatedproduct } ).then(res=>{
        dispatch({type:'UPDATE_Doctor_SUCCESS' })
      window.location.reload()
       
       
    }).catch(err=>{
        dispatch({type:'UPDATE_Doctor_FAILED' })
    })

}





// export const DoctorForgotPasswordAction=(email)=>dispatch=>{
//     dispatch({ type: 'DR_ForgotPassword_REQUEST' })

//     axios.post('/api/doctor/forgetpassword' , {email} ).then(res=>{
//         dispatch({ type: 'DR_ForgotPassword_SUCESS' })
//         alert(`Email rec is ${email} `)

//     }).catch(err=>{
//         dispatch({ type: 'DR_ForgotPassword_Failed' , payload:err })
//         console.log(err)
//     })

// }


// export const DoctorResetPasswordAction=(userid,password)=>dispatch=>{

//     dispatch({ type: 'DR_ResetPass_Request' })



//     axios.post('/api/doctor/resetpassword', { password, userid }).then((res) => {
//         dispatch({ type: 'DR_ResetPass_Success' })





//     }).catch(err => {
//         dispatch({ type: 'DR_ResetPass_Failed', payload: err })
//         console.log(err)
//     })



// }




export const DoctorForgotPasswordAction=(contactnumber)=>dispatch=>{
    dispatch({ type: 'DR_ForgotPassword_REQUEST' })

    axios.post('/api/doctor/forgetpassword' , {contactnumber} ).then(res=>{
        dispatch({ type: 'DR_ForgotPassword_SUCESS' })
        console.log('Successfully recieved data ')
        sessionStorage.setItem('passdetails', JSON.stringify(res.data))

    }).catch(err=>{
        dispatch({ type: 'USER_ForgotPassword_Failed' , payload:err })
        console.log('There is an error')
        console.log(err)
    })

}


export const DoctorResetPasswordAction=(userid,password)=>dispatch=>{

    dispatch({ type: 'DR_ResetPass_Request' })



    axios.post('/api/doctor/resetpassword', { password, userid }).then((res) => {
        dispatch({ type: 'User_ResetPass_Success' })





    }).catch(err => {
        dispatch({ type: 'User_ResetPass_Failed', payload: err })
        console.log(err)
    })



}

