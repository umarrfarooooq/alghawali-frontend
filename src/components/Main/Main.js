import React from "react";
import Image from "./images/main-section.png"
import ButtonEl from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Main = () =>{
    const { t } = useTranslation();

    const elipseStyle = {
        width:"35rem",
        height:"35rem",
        borderRadius:"35rem",
        background:"#249D64"
    }
    const imageStyle = {
        width:"44.75rem",
        borderBottomLeftRadius:"35rem",
        borderBottomRightRadius:"35rem"
    }

    return(
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 container">
                    <div className="mainCont mr-auto place-self-center lg:col-span-7">
                    <p className="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    {t('section.subtitle')}
                    </p>
                    <h1 style={{color: "#253061"}} className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {t('section.title1')} <br></br><span style={{color: "#249D64"}}>{t('section.title2')}</span>
                    </h1>
                    <p className="max-w-2xl mb-6 font-normal text-2xl text-gray-700 lg:mb-8 md:text-4xl lg:text-4xl dark:text-gray-400">
                    {t('section.subtitle2')}
                    </p>
                    <p className="max-w-2xl mb-6 font-normal text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    {t('section.description')}                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center text-base font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <ButtonEl bgColor="#253061" hoverBgColor="#1c2b4d" buttonTxt={t('section.buttonText')} px={8} py={2}/>
                    </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-end">
                    <div className="elipse absolute shadow-2xl" style={elipseStyle}>
                    <img style={imageStyle} src={Image} alt="mockup" />
                    </div>
                    
                    </div>
                </div>
            </section>

        </>
    )
}

export default Main;