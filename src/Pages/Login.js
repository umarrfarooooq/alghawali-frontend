import React from "react";
import Navbar from "../components/Header/Navbar";
import LoginComponents from "../components/Authentication-components/Login-Component"

const LoginPage = () =>{
    return(
        <>
            <Navbar />
            <LoginComponents />
        </>
    )
}

export default LoginPage;