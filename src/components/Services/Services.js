import React from "react";
import "./Services.css"
import { Link } from "react-router-dom";
import ServiceCard from "./Service-Card";
import { useTranslation } from 'react-i18next';
import ButtonEl from "../UI/Button/Button";

const Services = () =>{
    const { t } = useTranslation();

    return(
        <section className="services-section text-white">
            <div className="py-8 sm:py-16 container">
                <div className=" mb-4 lg:mb-8 flex items-center justify-center flex-col sm:flex-row">
                <h2 style={{color:"#1A1A1A"}} className=" text-4xl tracking-tight font-semibold"> {t('services.sectionTitle')}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 md:space-y-0">
                    <ServiceCard imageAlt="Smiling Nepali housemaid holding cleaning equipment in her hand" address={"/nepali-srilankan-housemaids?category=Domestic Worker"} catName={t('services.categories.fCatNam')} description={t('services.descriptions.housemaids_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/o153shzrwulqyiszywfu"/>
                    <ServiceCard imageAlt="Nepali maid in a cheerful mood, ready to serve, dressed in a crisp white uniform" address={"/nepali-srilankan-housemaids?category=Barista"} catName={t('services.categories.sCatNam')} description={t('services.descriptions.baristas_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/nvfyq40ialqvudruubxg"/>
                    <ServiceCard imageAlt="Nepali housemaid in a bright yellow uniform, smiling, with a waiter's card around her neck" address={"/nepali-srilankan-housemaids?category=Waitress"} catName={t('services.categories.tCatNam')} description={t('services.descriptions.waitresses_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/eteowakhgd6xq386h1jm"/>
                    <ServiceCard imageAlt="A nurse from Nepal is in teal uniform with a stethoscope and clipboard." address={"/nepali-srilankan-housemaids?category=Nurses"} catName={t('services.categories.forthCatNam')} description={t('services.descriptions.nurses_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/reobsjvhdng7xhmrehzi"/>
                </div>
                <div className="w-full flex items-center justify-center my-4">
                <button>
                <Link to="/house-maid-services" className="flex items-center" style={{ textDecoration: "none", color: "#FFFBFA" }}>
                    <div className="flex items-center">
                        <ButtonEl bgColor="#107243" hoverBgColor="#107243" px={6} buttonTxt={t('services.seeAllButton')} />
                    </div>
                </Link>
 
                </button>

                </div>

            </div>
        </section>
    )
}

export default Services;