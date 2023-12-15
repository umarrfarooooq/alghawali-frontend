import React from "react";
// import { useNavigate } from "react-router-dom";
import ServiceCard from "./Service-Card";
import { useTranslation } from 'react-i18next';

const AllServices = () =>{
    const { t } = useTranslation();

        return(
            <> 
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 container my-12">
                    <ServiceCard address={"/nepali-srilankan-housemaids"} catName={t('services.categories.fCatNam')} description={t('services.descriptions.housemaids_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/o153shzrwulqyiszywfu"/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.sCatNam')} description={t('services.descriptions.baristas_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/nvfyq40ialqvudruubxg"/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.tCatNam')} description={t('services.descriptions.waitresses_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/eteowakhgd6xq386h1jm"/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.forthCatNam')} description={t('services.descriptions.nurses_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/reobsjvhdng7xhmrehzi"/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.fifthCatNam')} description={t('services.descriptions.driver_description')} image="https://res.cloudinary.com/dtcz2zuev/image/upload/w_500,q_auto/alghawalimanpower/c0q23b7tcfpixbcssrrh"/>
               </div>
            
            </>
        )
    
}

export default AllServices;