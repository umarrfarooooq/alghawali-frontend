import React from "react";
import './NeedHelp.css'
import { useTranslation } from 'react-i18next';

const NeedHelp = ()=>{
    const { t } = useTranslation();

    return(
        <div>
            <div className="needHelpContainer py-6 container flex items-center justify-between">
                <div className="w-full">
                    <h3>{t('needHelpSection.title')}</h3>
                    <p>{t('needHelpSection.description')}</p>
                </div>
                <div className="emailContainer w-full ml-8">
                    <form>
                        <input className="border border-black rounded-md outline-none pl-2 pr-8 py-2" type="text"/>
                        <button type="button" style={{textDecoration:"none", background:"#253061"}} className="text-white rounded-md py-2 px-6 ml-4 sm:text-xl dark:text-gray-400">{t('needHelpSection.buttonText')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NeedHelp;