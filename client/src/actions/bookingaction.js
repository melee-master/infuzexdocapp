import axios from 'axios'
import { get } from 'mongoose'



export const BookPatientsAction=(details)=>dispatch=>{

    dispatch({type:'Book_Patients_Request'})

    axios.post('/api/booking/booking' , details ).then(res=>{
        dispatch({type:'Book_Patients_Success'})
        sessionStorage.setItem('bookingdetails' ,  JSON.stringify(res.data) );
    }).catch(err=>{
        dispatch({type:'Book_Patients_Failed'})
        console.log(err)
    })


}


export const GetPatientsByUserIdAction=()=>(dispatch , getState )=>{

    const userid = getState().LoginDocUserReducer.doctor._id


    dispatch({type:'GET_PatientsBYID_REQUEST'})

    axios.post('/api/booking/getpatientsbyuserid' , {userid:userid} ).then( res=>{

        dispatch({type:'GET_PatientsBYID_SUCCESS' , payload:res.data })
       

    } ).catch(err=>{
        dispatch({type:'GET_PatientsBYID_FAILED' , payload:err })
        console.log(err)
    })


}


export const GetBookingsByUserIdAction=()=>(dispatch , getState )=>{

    const userid = getState().LoginUserReducer.currentuser._id


    dispatch({type:'GET_BookingsBYID_REQUEST'})

    axios.post('/api/booking/getbookingssbyuserid' , {userid:userid} ).then( res=>{

        dispatch({type:'GET_BookingsBYID_SUCCESS' , payload:res.data })
       

    } ).catch(err=>{
        dispatch({type:'GET_BookingsBYID_FAILED' , payload:err })
        console.log(err)
    })


}





export const GetPatientsByOnlyIdAction=(orderid)=>(dispatch , getState )=>{

    


    dispatch({type:'GET_PatientsONLYID_REQUEST'})

    axios.post('/api/booking/getbookingsbyonlyid' , {orderid:orderid} ).then( res=>{

        dispatch({type:'GET_PatientsRBY_ONLYID_SUCCESS' , payload:res.data })
        

    } ).catch(err=>{
        dispatch({type:'GET_PatientsBY_ONLYID_FAILED' , payload:err })
        console.log(err)
    })


}





export const GetAllOrderAction=(orderid)=>(dispatch , getState )=>{

    


    dispatch({type:'GET_ALLORDER_REQUEST'})

    axios.get('/api/orders/getallorder'  ).then( res=>{

        dispatch({type:'GET_ALL_ORDERSUCCESS' , payload:res.data })
        console.log(res.data)

    } ).catch(err=>{
        dispatch({type:'GET_ALL_ORDER_FAILED' , payload:err })
        console.log(err)
    })


}