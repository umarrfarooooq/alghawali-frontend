import React from "react";
import ButtonEl from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import AboutCompany from "../About-Company/About-Company";
import "./Main.css"
const Main = () =>{
    const { t } = useTranslation();
    // const elipseStyle = {
    //     width:"29rem",
    //     height:"29rem",
    // }
    const imageStyle = {
        height:"fit-content",
        width:"100%"
    }
    return(
        <>
            <section style={{background:'linear-gradient(102deg, #062DDD 0.39%, #0727B4 58.92%, #09DA76 95.25%)'}} className="">
                <div className="grid py-8 mx-auto lg:gap-6 lg:py-16 lg:grid-cols-12 container">
                    <div className="mainCont mr-auto place-self-center lg:col-span-7">
                    <p className="max-w-2xl mb-6 font-medium lg:mb-8 md:text-xl lg:text-2xl" style={{color: "#FFFBFA"}}>
                    {t('section.subtitle')}
                    </p>
                    <h1 style={{color: "#FFFBFA", lineHeight:"1.3"}} className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {t('section.title1')} <br></br><span style={{color: "#28BB76"}}>{t('section.title2')}</span><span className="font-normal " style={{color: "var(--neutral-700, #FFFBFA)"}}> {t('section.subtitle2')}</span>
                    </h1>
                    <p style={{color: "var(--maincolors-button, #FFFBFA)"}} className="max-w-2xl mb-6 font-bold text-base lg:text-base lg:mb-8 md:text-lg xl:text-xl">
                    {t('section.subtitle3')}
                    </p>
                    <p style={{color: "var(--neutral-700, #FFFBFA)"}} className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-lg lg:text-xl">
                    {t('section.description')}
                    </p>
                    <span  className="hidden lg:inline-block">
                        <Link to="/contact" className="font-medium text-center rounded-lg">
                            <ButtonEl givenWidth="17rem" color="#262F32" bgColor="#FFFBFA" buttonTxt={t('section.buttonText')}  px={3} py={1}/>
                        </Link>
                    </span>
                    
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex justify-end">
                    {/* <img loading="lazy"  style={imageStyle} className="relative bg-opacity-10" src="https://res.cloudinary.com/dtcz2zuev/image/upload/fl_lossy,q_50/v1707745397/alghawalimanpower/ze1tnf1edbntwukrwtlb.gif" alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling." /> */}
                    {/* <div className="elipse absolute shadow-2xl rounded-xl" style={elipseStyle}>
                        <div class="gallery w-full h-full">
                            <img style={imageStyle} src="https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-housemaid-and-housewife-concept-png-image_6523108.png" alt="" />
                            <img style={imageStyle} src="https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-housemaid-and-housewife-concept-png-image_6523108.png" alt="" />
                            <img style={imageStyle} src="https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-housemaid-and-housewife-concept-png-image_6523108.png" alt="" />
                            <img style={imageStyle} src="https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-housemaid-and-housewife-concept-png-image_6523108.png" alt="" />
                        </div>
                    </div> */}

                    <img loading="lazy" style={imageStyle} src="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/zmg02phvltmligrmxh54" alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling." />
                    <span className="inline-block lg:hidden mt-6 w-full">
                        <Link to="/contact" className="font-medium text-center">
                            <ButtonEl givenWidth={1} color="#262F32" bgColor="#FFFBFA" hoverBgColor="rgba(40, 187, 118, 0.3)" buttonTxt={t('section.buttonText')}  px={3} py={1}/>
                        </Link>
                    </span>
                    </div>
                </div>
                <AboutCompany />
            </section>

        </>
    )
}

export default Main;