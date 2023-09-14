import React from "react";
import './Why-Choose-Us.css'
import { useTranslation } from 'react-i18next';

const WhyChooseUs = ()=>{
    const { t } = useTranslation();
    return (
        <div>
          <section
            id="features"
            className="container relative block px-6 py-10 md:py-20 md:px-10"
          >
            <div className="relative mx-auto max-w-5xl text-center">
              <h2 className="block w-full bg-gradient-to-b bg-clip-text font-bold  text-3xl sm:text-4xl">
              
              {t('chooseUsSection.subTitle')}
              </h2>
              <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
              {t('chooseUsSection.mainText')}
              </p>
            </div>
    
            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
              {/* Customizable */}
              <div style={{backgroundColor:"#253061"}} className="rounded-md border border-neutral-800 p-8 text-center shadow">
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ background:"white" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                        <line x1="17" y1="17" x2="17" y2="17.01"></line>
                    </svg>
                </div>

                <h3 className="mt-6 text-gray-400">{t('chooseUsSection.features.feature1.title')}</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                {t('chooseUsSection.features.feature1.detail')}                </p>
              </div>
    
              {/* Fast Performance */}
              <div style={{backgroundColor:"#249D64"}} className="rounded-md border p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ background:"white" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                  </svg>
                </div>
                <h3 className="mt-6 text-white">{t('chooseUsSection.features.feature2.title')}</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                {t('chooseUsSection.features.feature2.detail')}                </p>
              </div>
    
              {/* Fully Featured */}
              <div style={{backgroundColor:"#253061"}} className="rounded-md border bg-slate-900 p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ background:"white" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                    <polyline points="12 8 7 3 3 7 8 12"></polyline>
                    <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                    <polyline points="16 12 21 17 17 21 12 16"></polyline>
                    <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-400">{t('chooseUsSection.features.feature3.title')}</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                {t('chooseUsSection.features.feature3.detail')}                </p>
              </div>
            </div>
    
            
          </section>
        </div>
      );
}
export default WhyChooseUs;


//     <div className="why-choose-us-box">
    //     <div className="container why-choose-us-container">
    //         <div className="main-circle text-start text-white text-2xl p-4 relative">
    //             <p className="w-2/3 ml-auto">{t('chooseUsSection.mainText')}</p>
    //         </div>
    //         <div className="sub-box relative text-center text-white font-semibold text-4xl " style={{right:"55%"}}>{t('chooseUsSection.subTitle')}</div>
            
    //             <div className="features">
    //                 <div className="feature-box">{t('chooseUsSection.features.feature1')}</div>
    //                 <div className="feature-box">{t('chooseUsSection.features.feature2')}</div>
    //                 <div className="feature-box">{t('chooseUsSection.features.feature3')}</div>
    //             </div>
    //         </div>
            
    // </div>