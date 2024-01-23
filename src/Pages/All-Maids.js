import React, { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Search from "../components/Search/Search";
import Filters from "../components/Filter-Section/Filter";
// import FilterSidebar from "../components/Filter-Section/FilterSidebar";
import AllMaidsProfiles from "../components/All-Maids-Profiles/All-Maids-Profiles";
import { Helmet } from "react-helmet";

const AllMaidsProfilePage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    
    return (
        <>
            <Helmet>
            <link rel="canonical" href="https:// https://www.alghawalimanpower.com/nepali-srilankan-housemaids" />

                <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Get the best housemaid services in Oman with Al Ghawali. Our experienced housekeepers are trained to provide quality services." />
                <title>Muscat House Maid Services by Al Ghawali</title>
            </Helmet>
            <Navbar />
            <Search onSearch={setSearchTerm} />
            <div className="flex justify-between my-8 container">
                <Filters />
                <AllMaidsProfiles searchTerm={searchTerm} />
            </div>
        </>
    );
}

export default AllMaidsProfilePage;
