import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import Testimonial from "./Testimonial";
import "./Testimonials.css"
import range from "lodash/range";
import TestimonialData from "./testimonials.json"
import { useTranslation } from 'react-i18next';


const Testimonials = ()=> {
    const [children, setChildren] = useState([]);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [numberOfCards, setNumberOfCards] = useState(3);
    const { t } = useTranslation();

    useEffect(() => {
      setTimeout(() => {
        setChildren(createChildren(4));
      }, 100);
    }, []);
  
  
    const createChildren = (n) =>
      range(n).map((i) => (
        <div className={`flex items-center bg-white justify-between py-8 px-4 text-sm
        ${TestimonialData[i].even && 'evenBg'}
        `} key={i} style={{ height: "15rem", width:"100%" }}>
          <div className="testimonials flex flex-col items-start">
            <Testimonial testimonial = {TestimonialData[i]}/>
          </div>
        </div>
      ));
  
    const changeActiveItem = (activeItemIndex) =>
      setActiveItemIndex(activeItemIndex);
  
      useEffect(() => {
          setChildren(createChildren(5));
          updateNumberOfCards();
      
          window.addEventListener("resize", updateNumberOfCards);
          return () => {
            window.removeEventListener("resize", updateNumberOfCards);
          };
        }, []);
  
        const updateNumberOfCards = () => {
          if (window.innerWidth <= 770) {
            setNumberOfCards(1);
          }else {
            setNumberOfCards(2);
          }
        };
  
    return (
      <div className="testimonialsContainer my-12 py-12">
          <div className="container">
          <div className="mb-6 lg:mb-8 flex items-center justify-between">
              <h2 className=" text-4xl tracking-tight font-extrabold  dark:text-white" style={{color:"#fff"}}>{t('testimonials.title')}</h2>
          </div>
          <div className="carousel-container" dir="ltr">
            <ItemsCarousel
                enablePlaceholder
                numberOfPlaceholderItems={4}
                minimumPlaceholderTime={1000}
                placeholderItem={
                <div style={{ height: 200, background: "blue" }}>
                Placeholder
                </div>
                }
                // Carousel configurations
                numberOfCards={numberOfCards}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}
                // Active item configurations
                requestToChangeActive={changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={"center"}
                chevronWidth={24}
                rightChevron={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.90997 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.90997 4.07996" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
                leftChevron={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.09 19.92L8.57 13.4C7.8 12.63 7.8 11.37 8.57 10.6L15.09 4.07996" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                }
                outsideChevron={false}
            >
                
                {children}
            </ItemsCarousel>
          </div>
          
          </div>
      </div>
      
    );
    
}

export default Testimonials;
