import React from "react";
import Navbar from "../components/Header/Navbar";
import SignUp from "../components/Authentication-components/Signup-Component";

const SignUpPage = () =>{
    return(
        <>
            <Navbar />
            <SignUp />
        </>
    )
}

export default SignUpPage;