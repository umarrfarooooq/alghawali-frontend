import React from "react";
// import { useNavigate } from "react-router-dom";
import ServiceCard from "./Service-Card";
import First_Image from "./images/first.png"
import Second_Image from "./images/second.png"
import Third_Image from "./images/third.png"
import Forth_Image from "./images/forth.png"
import { useTranslation } from 'react-i18next';

const AllServices = () =>{
    const { t } = useTranslation();

        return(
            <> 
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 container my-12">
                <ServiceCard address={"/all-profiles"} catName={t('services.categories.fCatNam')} image={First_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.sCatNam')} image={Second_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.tCatNam')} image={Third_Image}/>
                    <ServiceCard address={"/on-demand"} catName={t('services.categories.forthCatNam')} image={Forth_Image}/>
                </div>
            
            </>
        )
    
}

export default AllServices;