import React from "react";
import Navbar from "../components/Header/Navbar";
// import Breadcrumb from "../components/UI/Breadcrumbs/Breadcrumb";
import AboutUsMain from "../components/About/About";
import Footer from "../components/Footer/Footer";
import {Helmet} from "react-helmet";
import NewBreadCrumb from "../components/UI/NewBreadcrumb/NewBreadCrumb";
import { useTranslation } from 'react-i18next';
const AboutUs = () => {
    const backgroundImageUrl = 'https://res.cloudinary.com/dtcz2zuev/image/upload/v1707893084/alghawalimanpower/qubkrpihvvdey8uznlpm.jpg';
    const { t } = useTranslation();
    return(
        <>
            <Helmet>
            <link rel="canonical" href="https:// https://www.alghawalimanpower.com/oman-nepali-housemaid" />
                <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Are you trying to find housemaid services in Oman? Al Ghawali offers full-time housemaids in Muscat and other cities." />
                <title>Housekeeping Services in Muscat | Al Ghawali</title>
            </Helmet>
            <Navbar />
            <div className="bg-cover" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
            <NewBreadCrumb
                pageName={t('breadcrumb.aboutUs.pageName')}
                title={t('breadcrumb.aboutUs.title')}
                discription={t('breadcrumb.aboutUs.description')}
             />
            <AboutUsMain />
            </div>
            
            <Footer />
        </>
    )
}

export default AboutUs;