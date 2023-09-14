import React from "react";
import about from "../Services/images/first.png";
import "./About.css"
import { useTranslation } from 'react-i18next';

const AboutUsMain = () =>{
    const { t } = useTranslation();

    return(
        <>
            <div className="container">
            <section className="relative md:py-24 py-16" id="about">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <img src={about} className="rounded-lg shadow-lg relative" alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="lg:ms-7">
                                <h3 className="mb-4 md:text-2xl text-xl font-medium">{t('aboutUs.sectionTitle')}</h3>

                                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">{t('aboutUs.paragraph')}
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default AboutUsMain;