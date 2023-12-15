import React from "react";
import Navbar from "../components/Header/Navbar";
import Main from "../components/Main/Main";
import Services from "../components/Services/Services";
import Profile from "../components/Profiles/Profile";
import AboutCompany from "../components/About-Company/About-Company";
import Testimonials from "../components/Testimonials/Testimonials";
import { ContactCompo } from "../components/Contact-Us-HomePage/ContactComponentHome";
import WhyChooseUs from "../components/Why-Choose-Us/Why-Choose-Us";
import NeedHelp from "../components/Need-Help/NeedHelp";
import Footer from "../components/Footer/Footer";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
        <meta name="description" content="Al Ghawali provides housemaid services in Oman. Get in touch with us right now to get the best housemaid services in Oman." />
        <title>House Maid Service in Muscat | Al Ghawali</title>
      </Helmet>
      <Navbar />
      <Main />
      <Services />
      <Profile />
      <AboutCompany />
      <WhyChooseUs />
      <Testimonials />
      <ContactCompo />
      <NeedHelp />
      <Footer />
    </>
  );
}

export default Home;
