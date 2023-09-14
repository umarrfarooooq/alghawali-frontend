import React from "react";
import Navbar from "../components/Header/Navbar";
import ContactUsComponent from "../components/Contact-Us/Contact-Us-component";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/UI/Breadcrumbs/Breadcrumb";


const ContactUs = () =>{
    return(
        <>
            <Navbar />
            <Breadcrumb url="/contact" pageName="Contact Us"/>
            <ContactUsComponent />
            <Footer />
        </>
    )
}

export default ContactUs;