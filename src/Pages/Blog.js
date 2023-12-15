import React from "react";
import Navbar from "../components/Header/Navbar";
import { Helmet } from "react-helmet";

const BlogPage = () =>{
    return(
        <>
            <Helmet>
                <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Al Ghawali provides reliable and quality housekeeping services in Oman. Contact us for experienced maids." />
                <title>house maid agency in Oman | Al Ghawali </title>
            </Helmet>
            <Navbar />
            <div className="flex items-center justify-center w-screen h-screen">
            <p className="text-4xl font-bold">COMING SOON</p>
            </div>
        </>
    )
}

export default BlogPage;