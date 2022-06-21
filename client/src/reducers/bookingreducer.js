import fa from "fontawesome"

export const BookPatientsReducer=( state={} , action )=>{
    switch(action.type)
    {
        case 'Book_Patients_Request' : return {
            ...state ,
            loading:true
        }

        case 'Book_Patients_Success' : return {
            ...state ,
            loading : false ,
            success:true
        }

        case 'Book_Patients_Failed' : return {
            ...state ,
            loading : false ,
            error:true
        }




        default : return state
    }
}




export const GetPatientsByUserIdReducer = ( state={} , action )=>{


    switch(action.type)
    {
        case 'GET_PatientsBYID_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'GET_PatientsBYID_SUCCESS' : return{
            ...state ,
            loading:false  ,
            orders : action.payload 
        }

        case 'GET_PatientsBYID_FAILED' : return{
            ...state ,
            loading:true  ,
            error : true 
        }

        default : return state
    }



}




export const GetBookingsByUserIdReducer = ( state={} , action )=>{


    switch(action.type)
    {
        case 'GET_BookingsBYID_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'GET_BookingsBYID_SUCCESS' : return{
            ...state ,
            loading:false  ,
            orders : action.payload 
        }

        case 'GET_BookingsBYID_FAILED' : return{
            ...state ,
            loading:true  ,
            error : true 
        }

        default : return state
    }



}







export const GetBookingsByBookingIdReducer = ( state={} , action )=>{


    switch(action.type)
    {
        case 'GET_BookingsBYBookingID_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'GET_BookingsBYBookingID_SUCCESS' : return{
            ...state ,
            loading:false  ,
            bookings : action.payload 
        }

        case 'GET_BookingsBYBookingID_FAILED' : return{
            ...state ,
            loading:false  ,
            error : true 
        }

        default : return state
    }



}





export const UpdateBookingReducer=( state={} , action )=>{
    switch(action.type)
    {
        case 'Update_Booking_REQUEST' : return {
            ...state ,
            uploading : true 
        }

        case 'Update_Booking_SUCCESS' : return {
            ...state ,
            uploading : false ,
            success : true 
        }

        case 'Update_Booking_FAILED' : return {
            ...state ,
            uploading : false ,
            update_error : action.payload
        }

        default : return  state
    }
}







export const GetPatientsByOnlyIdReducer = ( state={} , action )=>{


    switch(action.type)
    {
        case 'GET_PatientsBYONLYID_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'GET_PatientsBY_ONLYID_SUCCESS' : return{
            ...state ,
            loading:false  ,
            order: action.payload 
        }

        case 'GET_PatientsBY_ONLYID_FAILED' : return{
            ...state ,
            loading:false  ,
            success : true 
        }

        default : return state
    }



}





export const GetAllPatientsReducer = ( state={orders:[]} , action )=>{


    switch(action.type)
    {
        case 'GET_ALLORDER_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'GET_ALL_ORDERSUCCESS' : return{
            ...state ,
            loading:false  ,
            order: action.payload 
        }

        case 'GET_ALL_ORDER_FAILED' : return{
            ...state ,
            loading:true  ,
            error : false 
        }

        default : return state
    }



}