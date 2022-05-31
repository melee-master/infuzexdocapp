import React from "react";
import UserProfile from "../users/userprofile";


const UpdateUser=()=>{
    const user = JSON.parse(localStorage.getItem('currentuser'))

    return(
        <div>
           {
                user ? (
                    <p>
                            <UserProfile/>
                    </p>
                ) : (
                    <p>
                            Please Login
                    </p>
                )
           }
        </div>
    )


}

export default UpdateUser