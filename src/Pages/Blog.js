import React from "react";
import Navbar from "../components/Header/Navbar";
import { Helmet } from "react-helmet";
import BlogData from "../components/Blog-Components/BlogData";
import Footer from "../components/Footer/Footer";
import NewBreadCrumb from "../components/UI/NewBreadcrumb/NewBreadCrumb";
import { useTranslation } from 'react-i18next';

const BlogPage = () =>{
    const { t } = useTranslation();
    const backgroundImageUrl = 'https://res.cloudinary.com/dtcz2zuev/image/upload/v1707748346/ndygmdky0do3chml1lxj.png';

    return(
        <>
            <Helmet>
            <link rel="canonical" href="https:// https://www.alghawalimanpower.com/nepali-maids-muscat" />
                <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Al Ghawali provides reliable and quality housekeeping services in Oman. Contact us for experienced maids." />
                <title>house maid agency in Oman | Al Ghawali </title>
            </Helmet>
            <Navbar />
            {/* <div className="flex items-center justify-center w-screen h-screen">
            <p className="text-4xl font-bold">COMING SOON</p>
            </div> */}
            <div  style={{ backgroundImage: `url(${backgroundImageUrl})`}} className="bg-cover py-10">
            <NewBreadCrumb
                pageName={t('breadcrumb.blogs.pageName')}
                title={t('breadcrumb.blogs.title')}
                discription={t('breadcrumb.blogs.description')}
            />

                <BlogData />
            </div>
            <Footer />
            
        </>
    )
}

export default BlogPage;