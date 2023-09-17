import React from "react";
import Navbar from "../components/Header/Navbar";
import Breadcrumb from "../components/UI/Breadcrumbs/Breadcrumb";
import AboutUsMain from "../components/About/About";
import ServiceCard from "../components/Services/Service-Card";
import First_Image from "../components/Services/images/first.png"
import Second_Image from "../components/Services/images/second.png"
import Third_Image from "../components/Services/images/third.png"
import Forth_Image from "../components/Services/images/forth.png"
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();

    return(
        <>
            <Navbar />
            <Breadcrumb url="/about" pageName="About Us"/>
            <AboutUsMain />
            <div className=" mb-4 lg:mb-8 flex items-center justify-between container">
                <h2 className=" text-4xl tracking-tight font-extrabold dark:text-white" style={{color:"#253061"}}>{t('services.sectionTitle')}</h2>
                <Link to="/services" style={{textDecoration:"none", background:"#253061"}} className="text-white rounded-md py-2 px-6 sm:text-xl dark:text-gray-400">{t('services.seeAllButton')}</Link>
            </div>
            <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 container my-12">
                    <ServiceCard address={"/all-profiles"} catName={t('services.categories.fCatNam')} image={First_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.sCatNam')} image={Second_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.tCatNam')} image={Third_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.forthCatNam')} image={Forth_Image}/>
                </div>
            <Footer />
        </>
    )
}

export default AboutUs;