import React from "react";
// import { useNavigate } from "react-router-dom";
import ServiceCard from "./Service-Card";
import { useTranslation } from 'react-i18next';

const AllServices = () =>{
    const { t } = useTranslation();

        return(
            <>
            <div className="container my-12">
                <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
                    <div className="text-lg sm:text-xl md:text-4xl font-bold lg:text-5xl">Our Services</div>
                    <div style={{border:"1px solid #C3D0D4"}} className="flex items-center gap-2 bg-[#EBEBEB] p-3 rounded-xl">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#434146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.0002 21.4992L16.7002 17.1992" stroke="#434146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span>
                        <input type="text" placeholder="Search" className="outline-none bg-transparent"/>
                    </span>
                    </div>
                </div>
            </div>
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0 container my-12">
                    <ServiceCard imageAlt="Smiling Nepali housemaid holding cleaning equipment in her hand" address={"/nepali-srilankan-housemaids?category=Domestic Worker"} catName={t('services.categories.fCatNam')} description={t('services.descriptions.housemaids_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/o153shzrwulqyiszywfu"/>
                    <ServiceCard imageAlt="Nepali maid in a cheerful mood, ready to serve, dressed in a crisp white uniform" address={"/nepali-srilankan-housemaids?category=Barista"} catName={t('services.categories.sCatNam')} description={t('services.descriptions.baristas_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/nvfyq40ialqvudruubxg"/>
                    <ServiceCard imageAlt="Nepali housemaid in a bright yellow uniform, smiling, with a waiter's card around her neck" address={"/nepali-srilankan-housemaids?category=Waitress"} catName={t('services.categories.tCatNam')} description={t('services.descriptions.waitresses_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/eteowakhgd6xq386h1jm"/>
                    <ServiceCard imageAlt="A nurse from Nepal is in teal uniform with a stethoscope and clipboard." address={"/nepali-srilankan-housemaids?category=Nurses"} catName={t('services.categories.forthCatNam')} description={t('services.descriptions.nurses_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/reobsjvhdng7xhmrehzi"/>
                    <ServiceCard address={"/nepali-srilankan-housemaids?category=Driver"} catName={t('services.categories.fifthCatNam')} description={t('services.descriptions.driver_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/w_500,q_auto/alghawalimanpower/c0q23b7tcfpixbcssrrh"/>
               </div>
            
            </>
        )
    
}

export default AllServices;