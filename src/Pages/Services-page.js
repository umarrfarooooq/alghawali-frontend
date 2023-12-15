import React from "react";
import Navbar from "../components/Header/Navbar"
import Breadcrumb from "../components/UI/Breadcrumbs/Breadcrumb";
import AllServices from "../components/Services/All-Services";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";

const ServicesPage = () =>{
    return(
        <>
            <Helmet>
            <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Are you finding a housemaid,nannies and housekeeper at an affordable price?Al Ghawali is providing trained Maids in all over Oman." />
                <title>Professional House Maid Services in Muscat | Al Ghawali</title>
            </Helmet>
            <Navbar />
            <Breadcrumb url="/house-maid-services" pageName="Services"/>
            <AllServices />
            <Footer />
        </>
    )
}

export default ServicesPage;