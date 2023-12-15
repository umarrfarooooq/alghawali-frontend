import React from "react";
import ButtonEl from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Main = () =>{
    const { t } = useTranslation();
    

    // const elipseStyle = {
    //     width:"35rem",
    //     height:"35rem",
    //     borderRadius:"35rem",
    //     background:"#249D64"
    // }
    const imageStyle = {
        width:"44.75rem",
        borderBottomLeftRadius:"35rem",
        borderBottomRightRadius:"35rem"
    }
    return(
        <>
            <section style={{backgroundColor:'#F2F5FF'}} className="dark:bg-gray-900">
                <div className="grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 container">
                    <div className="mainCont mr-auto place-self-center lg:col-span-7">
                    <p className="max-w-2xl mb-6 font-medium lg:mb-8 md:text-xl lg:text-2xl" style={{color: "var(--neutral-700, #5F5F5F)"}}>
                    {t('section.subtitle')}
                    </p>
                    <h1 style={{color: "var(--neutral-700, #5F5F5F)", lineHeight:"1.3"}} className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {t('section.title1')} <br></br><span style={{color: "var(--Secondry-color, #28BB76)"}}>{t('section.title2')}</span><span className="font-normal " style={{color: "var(--neutral-700, #5F5F5F)"}}> {t('section.subtitle2')}</span>
                    </h1>
                    <p style={{color: "var(--maincolors-button, #031D92)"}} className="max-w-2xl mb-6 font-bold text-base lg:text-base lg:mb-8 md:text-lg xl:text-xl">
                    {t('section.subtitle3')}
                    </p>
                    <p style={{color: "var(--neutral-700, #5F5F5F)"}} className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-lg lg:text-xl">
                    {t('section.description')}
                    </p>
                    <span  className="hidden lg:inline-block">
                        <Link to="/contact" className=" font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <ButtonEl bgColor="#107243" hoverPx={20} hoverBgColor="#031D92" buttonTxt={t('section.buttonText')}  px={6} py={2}/>
                            {/* <button className={`hover:px-44 bg-[#107243] hover:bg-[#031D92] px-6 py-3 rounded transition-all`}>{t('section.buttonText')}</button> */}
                        </Link>
                    </span>
                    
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex justify-end">
                    {/* <div className="elipse absolute shadow-2xl" style={elipseStyle}>
                    </div> */}
                    <img loading="lazy" style={imageStyle} src="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/zmg02phvltmligrmxh54" alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling." />
                    <span className="inline-block lg:hidden mt-6 w-full">
                        <Link to="/contact" className=" font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <ButtonEl givenWidth={1} bgColor="#107243" hoverBgColor="#031D92" buttonTxt={t('section.buttonText')}  px={6} py={2}/>
                        </Link>
                    </span>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Main;