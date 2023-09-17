import React from "react";
import ButtonEl from "../UI/Button/Button";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const ServiceCard = (props) =>{
    const { t } = useTranslation();

    return(
        <>
            <div className=" rounded-2xl relative overflow-hidden">
                <img className="w-full " src={props.image} alt="HouseMaids" />
                <div style={{backgroundColor:"#D9D9D9"}} className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center">
                    <h3 style={{color:"#253061"}} className="mb-2 text-xl font-bold dark:text-white">{props.catName}</h3>
                    <Link to={props.address}>
                        <ButtonEl bgColor="#253061" hoverBgColor="#1c2b4d" buttonTxt={t('services.showProfileBtn')} px={2}/>
                    </Link>
                </div>
            </div>
            
        </>
    )
}

export default ServiceCard;