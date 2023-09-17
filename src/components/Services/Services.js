import React from "react";
import "./Services.css"
import { Link } from "react-router-dom";
import ServiceCard from "./Service-Card";
import First_Image from "./images/first.png"
import Second_Image from "./images/second.png"
import Third_Image from "./images/third.png"
import Forth_Image from "./images/forth.png"
import { useTranslation } from 'react-i18next';

const Services = () =>{
    const { t } = useTranslation();

    

    return(
        <section className="services-section text-white mt-4">
            <div className="py-8 sm:py-16 container">
                <div className=" mb-4 lg:mb-8 flex items-center justify-between">
                <h2 className=" text-4xl tracking-tight font-extrabold text-white dark:text-white"> {t('services.sectionTitle')}</h2>
                <Link to="/services" style={{textDecoration:"none", color:"#253061"}} className="bg-white rounded-md py-2 px-6 sm:text-xl dark:text-gray-400">{t('services.seeAllButton')}</Link>
                </div>
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                    <ServiceCard address={"/all-profiles"} catName={t('services.categories.fCatNam')} image={First_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.sCatNam')} image={Second_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.tCatNam')} image={Third_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.forthCatNam')} image={Forth_Image}/>
                </div>
            </div>
        </section>
    )
}

export default Services;