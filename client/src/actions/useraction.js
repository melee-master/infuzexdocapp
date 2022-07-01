import axios from 'axios'
import { wind } from 'fontawesome';
import { useHistory } from "react-router-dom";





export const RegisterNewUser = (user) => dispatch => {



    dispatch({ type: 'User_Register_Request' })




    axios.post('/api/users/register', user).then((res) => {
        dispatch({ type: 'User_Register_Success' })



        //localStorage.setItem('currentuser', JSON.stringify(res.data))
        window.location.href = '/login'








    }).catch(err => {
        dispatch({ type: 'User_Register_Failed', payload: err });


    })


}





export const RegisterNewUserAdmin = (user) => dispatch => {



    dispatch({ type: 'User_Register_Request' })




    axios.post('/api/users/register', user).then((res) => {
        dispatch({ type: 'User_Register_Success' })



       // localStorage.setItem('currentuser', JSON.stringify(res.data))
    

      
        window.location.href = '/admin/userlist'
       

      
        








    }).catch(err => {
        dispatch({ type: 'User_Register_Failed', payload: err });


    })


}





export const RegisterNewUserCompounder = (user) => dispatch => {



    dispatch({ type: 'User_Register_Request' })




    axios.post('/api/users/register', user).then((res) => {
        dispatch({ type: 'User_Register_Success' })



       // localStorage.setItem('currentuser', JSON.stringify(res.data))
    

      
        window.location.href = '/compounder/makebooking'
       

      
        








    }).catch(err => {
        dispatch({ type: 'User_Register_Failed', payload: err });


    })


}







export const LoginUser = (user) => dispatch => {



    dispatch({ type: 'User_Login_Request' })

    axios.post('/api/users/login', user).then(res => {
        dispatch({ type: 'User_Login_Success' })
        localStorage.setItem('currentuser', JSON.stringify(res.data))
        window.location.href = '/'

    }).catch(err => {
        dispatch({ type: 'User_Login_Failed', payload: err })

    })


}




export const LogOutUser = () => dispatch => {


    localStorage.removeItem('currentuser')
    
    dispatch({ type: 'User_LogOut' })
    window.location.href = '/'


}






export const UpdateUserAction = (userupdate, userid) => dispatch => {



    dispatch({ type: 'User_update_Request' })



    axios.post('/api/users/update', { userupdate, userid }).then((res) => {
        dispatch({ type: 'User_Update_Success' })





    }).catch(err => {
        dispatch({ type: 'User_Update_Failed', payload: err })
        console.log(err)
    })


}





export const GetAllUserAction = () => dispatch => {

    dispatch({ type: 'GET_ALL_REQUEST' })

    axios.get('/api/users/getalluser').then(res => {
        dispatch({ type: 'GET_ALL_SUCCESS', payload: res.data })

    }).catch(err => {
        dispatch({ type: 'GET_ALL_FAILED', payload: err })

    })

}



export const DeleteUserAction = (userid) => dispatch => {

    dispatch({ type: 'DELETE_USER_REQUEST' })

    axios.post('/api/users/deleteuser', { userid }).then(res => {
        dispatch({ type: 'DELETE_USER_SUCCESS', payload: res.data })



        window.location.reload()

    }).catch(err => {
        dispatch({ type: 'DELETE_USER_FAILED', payload: err })

    })

}



export const UserForgotPasswordAction=(contactnumber)=>dispatch=>{
    dispatch({ type: 'USER_ForgotPassword_REQUEST' })

    axios.post('/api/users/forgetpassword' , {contactnumber} ).then(res=>{
        dispatch({ type: 'USER_ForgotPassword_SUCESS' })
        console.log('Successfully recieved data ')
        sessionStorage.setItem('passdetails', JSON.stringify(res.data))

    }).catch(err=>{
        dispatch({ type: 'USER_ForgotPassword_Failed' , payload:err })
        console.log('There is an error')
        console.log(err)
    })

}


export const UserResetPasswordAction=(userid,password)=>dispatch=>{

    dispatch({ type: 'User_ResetPass_Request' })



    axios.post('/api/users/resetpassword', { password, userid }).then((res) => {
        dispatch({ type: 'User_ResetPass_Success' })





    }).catch(err => {
        dispatch({ type: 'User_ResetPass_Failed', payload: err })
        console.log(err)
    })



}






export const GetUserByIdAction=({userid})=>dispatch=>{

    dispatch({type:'GET_User_BY_ID_REQUEST'})

    axios.post('/api/users/getuserbyid' , {userid} ).then(res=>{
       
      

        dispatch({type:'GET_User_BY_ID_SUCCESS' , payload:res.data })

    }).catch(err=>{

       
        
        dispatch({type:'GET_User_BY_ID_FAILED' , payload:err.response.data })
    })

}