import React, { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Search from "../components/Search/Search";
import FilterSection from "../components/Filter-Section/FiltersSection";
import AllMaidsProfiles from "../components/All-Maids-Profiles/All-Maids-Profiles";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";
import NeedHelp from "../components/Need-Help/NeedHelp";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const AllMaidsProfilePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterSearchTerm, setFilterSearchTerm] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedReligions, setSelectedReligions] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedExperiences, setSelectedExperiences] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const category = new URLSearchParams(location.search).get('category');
    const handleFilterToggle = () => {
      setIsFilterOpen(!isFilterOpen);
    };
    console.log(selectedCountries);
    const handleFilterClose = () => {
      setIsFilterOpen(false);
    };
    const backgroundImageUrl = 'https://res.cloudinary.com/dtcz2zuev/image/upload/v1707893084/alghawalimanpower/qubkrpihvvdey8uznlpm.jpg';

    return (
        <>
            <Helmet>
                <link rel="canonical" href="https:// https://www.alghawalimanpower.com/nepali-srilankan-housemaids" />
                <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Get the best housemaid services in Oman with Al Ghawali. Our experienced housekeepers are trained to provide quality services." />
                <title>Muscat House Maid Services by Al Ghawali</title>
            </Helmet>
            <Navbar />

        
            <div style={{ backgroundImage: `url(${backgroundImageUrl})`}} className="bg-cover py-12">
            <div className="flex container items-center gap-4 mb-2 md:mb-0">
                <div onClick={() => navigate(-1)} className='bg-[#fff] cursor-pointer p-3 rounded-lg'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 5L5 12L12 19" stroke="#262F32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19 12L5 12" stroke="#262F32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                </div>
                <span className="text-base md:text-2xl font-bold">{category ? category : "Available Profiles"}</span>
            </div>
                <div className="md:hidden container flex items-start sm:items-center  flex-col sm:flex-row justify-between gap-2">
                    <Search onSearch={setSearchTerm} />
                    <div onClick={handleFilterToggle} className="bg-blue-950 p-3 rounded-md">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#FDFCFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </span>
                    </div>
                </div>
            <div className="relative flex justify-between items-start gap-8 mt-8 container">
                {isFilterOpen && <FilterSection
                onClose={handleFilterClose} 
                setSelectedCountries={setSelectedCountries} 
                setSelectedReligions={setSelectedReligions}
                setSelectedLanguages={setSelectedLanguages}
                setSelectedExperiences={setSelectedExperiences}
                filteredCountries={selectedCountries}
                filteredReligions={selectedReligions}
                filteredExperience={selectedExperiences}
                filteredLanguages={selectedLanguages}

                />}
                <span className="hidden md:inline-block"><FilterSection  
                onFilterSearch={setFilterSearchTerm}
                setSelectedCountries={setSelectedCountries} 
                setSelectedReligions={setSelectedReligions}
                setSelectedLanguages={setSelectedLanguages}
                setSelectedExperiences={setSelectedExperiences}
                filteredCountries={selectedCountries}
                filteredReligions={selectedReligions}
                filteredExperience={selectedExperiences}
                filteredLanguages={selectedLanguages}

                /></span>
                <AllMaidsProfiles
                searchTerm={searchTerm}
                filterSearchTerm={filterSearchTerm}
                selectedCountries={selectedCountries}
                selectedExperiences={selectedExperiences}
                selectedLanguages={selectedLanguages}
                selectedReligions={selectedReligions}
                />
            </div>
            </div>
            <NeedHelp bgColor="#F2F2F2"/>
            <Footer />
        </>
    );
}

export default AllMaidsProfilePage;
