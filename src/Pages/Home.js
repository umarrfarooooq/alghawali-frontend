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
const Home = () => {
  return (
    <>
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
