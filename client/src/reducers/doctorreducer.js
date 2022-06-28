import axios from "axios"

export const RegisterDoctorReducer = (state = {}, action) => {
    switch (action.type) {
        case 'Doctor_Register_Request': return {
            ...state,
            loading: true
        }

        case 'Doctor_Register_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'Doctor_Register_Failed': return {
            ...state,
            loading: false,
            error: true ,
            
        }


        default: return state



    }
}


export const LoginDocUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'Doctor_Login_Request': return {
            ...state,
            loading: true
        }

        case 'Doctor_Login_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'Doctor_Login_Failed': return {
            ...state,
            loading: false,
            error: 'Invalid Credentials'
        }

        case 'User_LogOut': return {
            ...state
        }


        default: return state



    }
}




export const GetAllDoctorReducer = (state = {doctors: []}, action) => {





    switch (action.type) {
        case 'DRGET_ALL_REQUEST': return {
           
            loading: true
        }

        case 'DRGET_ALL_SUCCESS': return {
            doctors: action.payload ,
            loading: false,
            
        }

        case 'DRGET_ALL_FAILED': return {
           
            loading: false,
            doctors: action.payload
        }


        default: return state



    }


}


export const GetAllReqDoctorReducer = (state = {doctors: []}, action) => {





    switch (action.type) {
        case 'ReqDRGET_ALL_REQUEST': return {
           
            loading: true
        }

        case 'ReqDRGET_ALL_SUCCESS': return {
            doctors: action.payload ,
            loading: false,
            
        }

        case 'ReqDRGET_ALL_FAILED': return {
           
            loading: false,
            doctors: action.payload
        }


        default: return state



    }


}



export  const GetDoctorByIdReducer = ( state ={doctors:[]} , action )=>{

   
    switch(action.type)
    {
        case 'GET_DR_BY_ID_REQUEST' : return {
            loading : true 
        }

        case 'GET_DR_BY_ID_SUCCESS' : return {
            doctors : action.payload ,
            loading : false 

        }

        case 'GET_DR_BY_ID_FAILED' : return {
            doctors : action.payload ,
            loading : false 
           
        }

        default : return  state
    }

}






export const ReviewReducer=( state={} ,  action)=>{
    switch(action.type)
    {
        case 'GET_DR_REVIEW' : return {
            loading : true 
        }

        case 'GET_DR_SUCCESS' : return {
            loading : true  , 
            success : true 
        }

        case 'GET_DR_FAILED' : return {
            loading : false ,
            error : true  
        }

        default : return  state



    }
}


export const DoctorTimingReducer=( state={} ,  action)=>{
    switch(action.type)
    {
        case 'GET_DR_TIMING' : return {
            loading : true 
        }

        case 'GET_DR_TIMING_SUCCESS' : return {
            loading : true  , 
            success : true 
        }

        case 'GET_DR_TIMING_FAILED' : return {
            loading : false ,
            error : true  
        }

        default : return  state



    }
}





export const ApproveDrReducer=( state={} , action )=>{
    switch(action.type)
    {
        case 'ApproveDr_REQUEST' : return {
            ...state ,
            uploading : true 
        }

        case 'ApproveDr_SUCCESS' : return {
            ...state ,
            uploading : false ,
            success : true 
        }

        case 'ApproveDr_FAILED' : return {
            ...state ,
            uploading : false ,
            update_error : action.payload
        }

        default : return  state
    }
}



export const UpdateDoctorReducer=( state={} , action )=>{
    switch(action.type)
    {
        case 'UPDATE_Doctor_REQUEST' : return {
            ...state ,
            uploading : true 
        }

        case 'UPDATE_Doctor_SUCCESS' : return {
            ...state ,
            uploading : false ,
            success : true 
        }

        case 'UPDATE_Doctor_FAILED' : return {
            ...state ,
            uploading : false ,
            update_error : action.payload
        }

        default : return  state
    }
}










export const DoctorForgotPasswordReducer=(state = {  }, action) => {

    switch (action.type) {
        case 'DR_ForgotPassword_REQUEST': return {
            ...state,
            loading: true
        }

        case 'DR_ForgotPassword_SUCESS': return {
            ...state,
            loading: false,
            success: true
        }

        case 'DR_ForgotPassword_Failed': return {
            ...state,
            loading: true,
            error: true
        }


        default: return state



    }



}














export const DoctorResetPasswordReducer=(state = {  }, action) => {

    switch (action.type) {
        case 'DR_ResetPass_Request': return {
            ...state,
            loading: true
        }

        case 'DR_ResetPass_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'DR_ResetPass_Failed': return {
            ...state,
            loading: true,
            error: true
        }


        default: return state



    }



}
