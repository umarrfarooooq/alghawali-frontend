import React from "react";
import Navbar from "../components/Header/Navbar";
import Main from "../components/Main/Main";
import Services from "../components/Services/Services";
import Profile from "../components/Profiles/Profile";
import Testimonials from "../components/Testimonials/Testimonials";
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
      <WhyChooseUs />
      <Testimonials />
      <NeedHelp />
      <Footer />
    </>
  );
}

export default Home;
