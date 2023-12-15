import React from "react";
import "./Services.css"
import { Link } from "react-router-dom";
import ServiceCard from "./Service-Card";
import { useTranslation } from 'react-i18next';

const Services = () =>{
    const { t } = useTranslation();

    return(
        <section className="services-section text-white">
            <div className="py-8 sm:py-16 container">
                <div className=" mb-4 lg:mb-8 flex items-center justify-between flex-col sm:flex-row">
                <h2 style={{color:"#1A1A1A"}} className=" text-4xl tracking-tight font-semibold"> {t('services.sectionTitle')}</h2>
                <Link to="/house-maid-services" style={{textDecoration:"none", color:"#253061"}} className="bg-white rounded-md py-2 px-6 sm:text-xl dark:text-gray-400">{t('services.seeAllButton')}</Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 md:space-y-0">
                    <ServiceCard imageAlt="Smiling Nepali housemaid holding cleaning equipment in her hand" address={"/nepali-srilankan-housemaids"} catName={t('services.categories.fCatNam')} description={t('services.descriptions.housemaids_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/o153shzrwulqyiszywfu"/>
                    <ServiceCard imageAlt="Nepali maid in a cheerful mood, ready to serve, dressed in a crisp white uniform" address={"/on-demand"} catName={t('services.categories.sCatNam')} description={t('services.descriptions.baristas_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/nvfyq40ialqvudruubxg"/>
                    <ServiceCard imageAlt="Nepali housemaid in a bright yellow uniform, smiling, with a waiter's card around her neck" address={"/on-demand"} catName={t('services.categories.tCatNam')} description={t('services.descriptions.waitresses_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/eteowakhgd6xq386h1jm"/>
                    <ServiceCard imageAlt="A nurse from Nepal is in teal uniform with a stethoscope and clipboard." address={"/on-demand"} catName={t('services.categories.forthCatNam')} description={t('services.descriptions.nurses_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/reobsjvhdng7xhmrehzi"/>
                </div>

            </div>
        </section>
    )
}

export default Services;