import React from "react";
import Navbar from "../components/Header/Navbar";
import SignUp from "../components/Authentication-components/Signup-Component";
import { Helmet } from "react-helmet";
import GoogleAdsConversionTracking from "../components/GoogleAdsConversionTracker/GoogleAdsConversionTracker";

const SignUpPage = () =>{
    return(
        <>
            <Helmet>
            <link rel="canonical" href="https:// https://www.alghawalimanpower.com/nepali-housekeeper" />
            <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Are you searching for trusted manpower services in Oman? Al Ghawali is providing professional maids." />
                <title>Housekeeping Services for Homes in Muscat | Al Ghawali</title>
                <GoogleAdsConversionTracking />
            </Helmet>
            <Navbar />
            <SignUp />
        </>
    )
}

export default SignUpPage;