import React from "react";
import logo from "../Footer/img/logo.svg"
const Loading = () =>{
    return(
        <>
            <div className="flex items-center justify-center h-screen animate-pulse">
                <img src={logo} alt="Company Logo"/>
            </div>
        </>
    )
}

export default Loading;