import React from "react";
import MaidDetailPageNavbar from "../components/Maid-Detail/Maid-Detail-Header/Maid-Detail-Header";
import MaidDetailMainSection from "../components/Maid-Detail/Main-Section/Maid-Detail--Main";
import { Helmet } from "react-helmet";

const MaidDetail = () =>{
    return(
        <>
            <Helmet>
            <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Al Ghawali provides housekeeping services in Oman for household.For profesional housemaids contact us." />
                <title>Your Trusted Housekeeping Partner in Muscat | Al Ghawali</title>
            </Helmet>
            <MaidDetailPageNavbar />
            <MaidDetailMainSection />
        </>
    )
}

export default MaidDetail;