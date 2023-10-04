import React from "react";
// import ButtonEl from "../UI/Button/Button";
import { useTranslation } from 'react-i18next';
// import { Link } from "react-router-dom";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ServiceCard = (props) =>{
    const location = useLocation();
    const height = location.pathname === "/" ? "" : "fit-content";

    const { t } = useTranslation();

    return(
        <>
            <div style={{backgroundColor:"#F5F6FC", height}} className=" rounded-lg relative overflow-hidden p-2">
                <img loading="lazy" className="w-full rounded-md max-h-[8rem] sm:max-h-[12rem]" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top"}} src={props.image} alt="Service Detail" />
                <div className="service-detail mt-2 md:text-center">
                    <h3 className="text-xs sm:text-xl" style={{color:"#1A1A1A"}}>
                    {props.catName}
                    </h3>
                    <p style={{fontSize:"0.625rem", color:"#5F5F5F"}} className="sm:text-lg">
                    {props.description}
                    </p>
                    <div className="seeProfileBtn text-center">
                    <Link to={props.address}>
                        <button style={{border:"1px solid #28BB76" , color:"#28BB76"}} className="rounded-md py-2 w-full mx-auto md:w-3/4 text-center text-xs">{t('services.showProfileBtn')} <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ServiceCard;

// {/* <div style={{backgroundColor:"#D9D9D9"}} className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center">
//                     <h3 style={{color:"#253061"}} className="mb-2 text-xl font-bold dark:text-white">{props.catName}</h3>
//                     <Link to={props.address}>
//                         <ButtonEl bgColor="#253061" hoverBgColor="#1c2b4d" buttonTxt={t('services.showProfileBtn')} px={2}/>
//                     </Link>
//                 </div> */}