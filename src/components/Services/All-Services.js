import React from "react";
// import { useNavigate } from "react-router-dom";
import ServiceCard from "./Service-Card";
import First_Image from "./images/first.png"
import Second_Image from "./images/second.png"
import Third_Image from "./images/third.png"
import Forth_Image from "./images/forth.png"
import Fifth_Image from "./images/fifthImg.jpg"
import { useTranslation } from 'react-i18next';

const AllServices = () =>{
    const { t } = useTranslation();

        return(
            <> 
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 container my-12">
                    <ServiceCard address={"/all-profiles"} catName={t('services.categories.fCatNam')} description={t('services.descriptions.housemaids_description')} image={First_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.sCatNam')} description={t('services.descriptions.baristas_description')} image={Second_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.tCatNam')} description={t('services.descriptions.waitresses_description')} image={Third_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.forthCatNam')} description={t('services.descriptions.nurses_description')} image={Forth_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.fifthCatNam')} description={t('services.descriptions.driver_description')} image={Fifth_Image}/>
               </div>
            
            </>
        )
    
}

export default AllServices;