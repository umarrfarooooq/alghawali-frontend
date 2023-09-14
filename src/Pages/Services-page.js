import React from "react";
import Navbar from "../components/Header/Navbar"
import Breadcrumb from "../components/UI/Breadcrumbs/Breadcrumb";
import AllServices from "../components/Services/All-Services";
import Footer from "../components/Footer/Footer";

const ServicesPage = () =>{
    return(
        <>
            <Navbar />
            <Breadcrumb url="/services" pageName="Services"/>
            <AllServices />
            <Footer />
        </>
    )
}

export default ServicesPage;