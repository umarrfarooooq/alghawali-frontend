// import React from "react";
// import './NeedHelp.css'
// import { useTranslation } from 'react-i18next';

// const NeedHelp = ()=>{
//     const { t } = useTranslation();

//     return(
//         <div>
//             <div className="needHelpContainer py-6 container flex items-center justify-between">
//                 <div className="w-full">
//                     <h3>{t('needHelpSection.title')}</h3>
//                     <p>{t('needHelpSection.description')}</p>
//                 </div>
//                 <div className="emailContainer w-full ml-8">
//                     <form>
//                         <input className="border border-black rounded-md outline-none pl-2 pr-8 py-2" type="text"/>
//                         <button type="button" style={{textDecoration:"none", background:"#253061"}} className="text-white rounded-md py-2 px-6 ml-4 sm:text-xl dark:text-gray-400">{t('needHelpSection.buttonText')}</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NeedHelp;


import React from "react";
import { useTranslation } from 'react-i18next';

const NeedHelp = () => {
    const { t } = useTranslation();

  return (
    <div style={{backgroundColor:"#F2F5FF"}} className="flex flex-col items-start py-24 gap-[48px] relative">
    <div className="container relative self-stretch w-full">
    <div style={{backgroundColor:"#F2F2F2"}} className="flex items-center justify-center gap-[10px] py-8 px-1 sm:p-[88px] relative self-stretch w-full flex-[0_0_auto] rounded-[16px] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-[32px] relative flex-1 grow">
          <div className="flex flex-col items-start gap-[8px]  py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div style={{fontSize:"2rem", fontWeight:"bold"}} className="relative self-stretch mt-[-1.00px] font-32-heading-h3semibold font-[number:var(--32-heading-h3semibold-font-weight)] text-colors-neutral-800 text-[length:var(--32-heading-h3semibold-font-size)] text-center tracking-[var(--32-heading-h3semibold-letter-spacing)] leading-[var(--32-heading-h3semibold-line-height)] [font-style:var(--32-heading-h3semibold-font-style)]">
            {t('needHelpSection.title')}
            </div>
            <p className="w-full lg:w-1/2 mx-auto relative self-stretch font-16-phragraph-title3 font-[number:var(--16-phragraph-title3-font-weight)] text-colors-neutral-700 text-[length:var(--16-phragraph-title3-font-size)] text-center tracking-[var(--16-phragraph-title3-letter-spacing)] leading-[var(--16-phragraph-title3-line-height)] [font-style:var(--16-phragraph-title3-font-style)]">
            {t('needHelpSection.description')}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px]">
            <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div style={{borderTopLeftRadius:".5rem", borderBottomLeftRadius:".5rem"}} className="rtlNeedHInput flex w-full sm:w-[390px] items-center gap-[10px] p-[16px] relative self-stretch bg-colors-background-color overflow-hidden border border-solid border-colors-stroke-color shadow-[0px_30px_27px_#000c2b14]">
                <input className="w-full h-full outline-none bg-transparent" type="text" placeholder={t('contactForm.placeholderPhone')}/>
              </div>
              <div style={{borderTopRightRadius:".5rem", borderBottomRightRadius:".5rem", backgroundColor:"#107243", color:"white"}} className="rtlNeedH inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]  shadow-[0px_30px_27px_#000c2b14]">
                <button style={{paddingBlock:"1.1rem"}} className="w-full h-full outline-none px-6">{t('needHelpSection.buttonText')}</button>
              </div>
            </div>
          </div>
          <div className="absolute w-[546px] h-[546px] top-[-374px] left-[722px] rounded-[273px] border-[88px] border-solid border-colors-secondry-color opacity-20" />
          <div className="absolute w-[372px] h-[372px] top-[-315px] left-[828px] rounded-[186px] border-[46px] border-solid border-colors-secondry-color opacity-20" />
        </div>
        <div className="hidden md:inline-block top-[31px] left-[25px] absolute w-[185px] h-[214px]">
          <div className="absolute w-[18px] h-[17px] top-[130px] left-[49px] bg-colors-secondry-color rounded-[8.85px/8.6px] shadow-[0px_3.93px_7.87px_#0147263d]" />
          <div className="absolute w-[10px] h-[10px] top-[204px] left-[13px] bg-colors-statuscolor-red rounded-[5.15px/5.01px] shadow-[0px_2.29px_4.58px_#0147263d]" />
          <div className="absolute w-[22px] h-[22px] top-[13px] left-[163px] bg-colors-statuscolor-yellow rounded-[10.82px] shadow-[0px_3.93px_7.87px_#0147263d]" />
          <div className="absolute w-[10px] h-[10px] top-[70px] left-[109px] bg-colors-statuscolor-red rounded-[4.92px] shadow-[0px_3.93px_7.87px_#0147263d]" />
          <div className="absolute w-[14px] h-[13px] top-0 left-[49px] bg-colors-maincolors-button rounded-[6.88px/6.64px] shadow-[0px_3.93px_7.87px_#0147263d]" />
          <div className="absolute w-[5px] h-[5px] top-[65px] left-0 bg-colors-maincolors-primary rounded-[2.7px] shadow-[0px_3.93px_7.87px_#0147263d]" />
        </div>
        <div className="hidden md:inline-block top-[158px] left-[1005px] rotate-180 absolute w-[185px] h-[214px]">
          <div className="absolute w-[18px] h-[17px] top-[66px] left-[49px] bg-colors-secondry-color rounded-[8.85px/8.6px] shadow-[0px_3.93px_7.87px_#0147263d]" />
          <div className="absolute w-[10px] h-[10px] top-0 left-[13px] bg-colors-statuscolor-red rounded-[5.15px/5.01px] shadow-[0px_2.29px_4.58px_#0147263d]" />
          <div className="absolute w-[22px] h-[22px] top-[179px] left-[163px] bg-colors-statuscolor-yellow rounded-[10.82px] shadow-[0px_3.93px_7.87px_#0147263d]" />
          <div className="absolute w-[10px] h-[10px] top-[134px] left-[109px] bg-colors-statuscolor-red rounded-[4.92px] shadow-[0px_3.93px_7.87px_#0147263d]" />
          <div className="absolute w-[14px] h-[13px] top-[200px] left-[49px] bg-colors-maincolors-button rounded-[6.88px/6.64px] shadow-[0px_3.93px_7.87px_#0147263d]" />
          <div className="absolute w-[5px] h-[5px] top-[143px] left-0 bg-colors-maincolors-primary rounded-[2.7px] shadow-[0px_3.93px_7.87px_#0147263d]" />
        </div>
      </div>
    </div>
      
    </div>
  );
};
export default NeedHelp;