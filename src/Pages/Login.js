import React from "react";
import Navbar from "../components/Header/Navbar";
import LoginComponents from "../components/Authentication-components/Login-Component"
import { Helmet } from "react-helmet";

const LoginPage = () =>{
    return(
        <>
            <Helmet>
            <link rel="canonical" href="https:// https://www.alghawalimanpower.com/maids-login" />
            <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Al Ghawali offers professional housekeeping services in Oman. Our services include cleaning, dusting, mopping, and more." />
                <title>Best maid in Muscat,Oman | Al Ghawali</title>
            </Helmet>
            <Navbar />
            <LoginComponents />
        </>
    )
}

export default LoginPage;