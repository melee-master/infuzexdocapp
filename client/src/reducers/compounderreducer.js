import axios from "axios"

export const RegisterCompounderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'Compounder_Register_Request': return {
            ...state,
            loading: true
        }

        case 'Compounder_Register_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'Compounder_Register_Failed': return {
            ...state,
            loading: false,
            error: true ,
            
        }


        default: return state



    }
}


export const LoginCompounderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'Compounder_Login_Request': return {
            ...state,
            loading: true
        }

        case 'Compounder_Login_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'Compounder_Login_Failed': return {
            ...state,
            loading: false,
            error: 'Invalid Credentials'
        }

        case 'Compounder_LogOut': return {
            ...state
        }


        default: return state



    }
}



export  const GetCompounderByIdReducer = ( state ={compounders:[]} , action )=>{

   
    switch(action.type)
    {
        case 'GET_Compounder_BY_ID_REQUEST' : return {
            loading : true 
        }

        case 'GET_Compounder_BY_ID_SUCCESS' : return {
            compounders : action.payload ,
            loading : false 

        }

        case 'GET_Compounder_BY_ID_FAILED' : return {
            compounders : action.payload ,
            loading : false  ,
            error:true
           
        }

        default : return  state
    }

}




export const CompounderDeleteReducer=( state={} , action )=>{
    switch(action.type)
    {
        case 'DELETE_Compounder_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'DELETE_Compounder_SUCCESS' : return {
            ...state ,
            loading : false ,
            success : true 
        }

        case 'DELETE_Compounder_FAILED' : return {
            ...state ,
            loading : false ,
            error : action.payload
        }

        default : return  state
    }
}
