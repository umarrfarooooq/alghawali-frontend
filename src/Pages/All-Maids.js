import React, { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Search from "../components/Search/Search";
import Filters from "../components/Filter-Section/Filter";
// import FilterSidebar from "../components/Filter-Section/FilterSidebar";
import AllMaidsProfiles from "../components/All-Maids-Profiles/All-Maids-Profiles";

const AllMaidsProfilePage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
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
