import React from "react";
import Navbar from "../components/Header/Navbar";
import Main from "../components/Main/Main";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/Why-Choose-Us/Why-Choose-Us";
import NeedHelp from "../components/Need-Help/NeedHelp";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import GoogleAdsConversionTracking from "../components/GoogleAdsConversionTracker/GoogleAdsConversionTracker";
const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.alghawalimanpower.com/" />
        <meta
          name="keywords"
          content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help"
        />
        <meta
          name="description"
          content="Al Ghawali provides housemaid services in Oman. Get in touch with us right now to get the best housemaid services in Oman."
        />
        <title>House Maid Service in Muscat | Al Ghawali</title>
        <GoogleAdsConversionTracking />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "@id": "#LocalBusiness",
            url: "https://www.alghawalimanpower.com/",
            legalName: "Al Ghawali Manpower Supply",
            name: "Al Ghawali Manpower Supply",
            description:
              "Al Ghawali is a top domestic worker agency in Oman, offering a wide range of services, including housemaids, housekeepers, and childcare. Al Ghawali recruits skilled professionals from Nepal, India, Sri Lanka, and Myanmar. Our services extend beyond traditional housekeeping, encompassing roles like housemaids, housekeepers, and childcare professionals. Our domestic worker agency takes pride in its meticulous recruitment process, ensuring every professional we supply is skilled and reliable. Our housemaid agency is a trusted partner in building a happy and harmonious home.",
            image:
              "https://res.cloudinary.com/dtcz2zuev/image/upload/v1706017090/alghawalimanpower/ib73jqw78ckysyizor0g.jpg",
            logo: "https://res.cloudinary.com/dtcz2zuev/image/upload/v1706017089/alghawalimanpower/lz9qtdnow1z6tqql2fxo.jpg",
            telephone: "+96877447716",
            faxNumber: "77447719",
            email: "info@alghawalimanpower.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Shop No. 2795, near the Social Security Office",
              addressLocality: "Al-Humber Street",
              addressRegion: "Sohar",
              addressCountry: "Oman",
              postalCode: "311",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.alghawalimanpower.com/",
            logo: "https://res.cloudinary.com/dtcz2zuev/image/upload/v1706017089/alghawalimanpower/lz9qtdnow1z6tqql2fxo.jpg",
          })}
        </script>
      </Helmet>
      <Navbar />
      <div className="whatsapp fixed bottom-[25px] left-[25px] z-50">
        <a rel="noreferrer" target="_blank" href="https://wa.me/96877447716">
          <img
            className="w-[60px] h-[60px]"
            src="https://i.pinimg.com/originals/f3/53/5d/f3535dc3f95e71506f7c80755610176c.png"
            alt="whatsapp icon"
          />
        </a>
      </div>
      <Main />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <NeedHelp />
      <Footer />
    </>
  );
};

export default Home;
