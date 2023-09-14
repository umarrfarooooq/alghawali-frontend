import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { Link } from 'react-router-dom';
import axios from "axios";
import ButtonEl from "../UI/Button/Button";
import MaidProfiles from "./MaidProfiles";
import "./Profile.css"
import { useTranslation } from 'react-i18next';
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
function Profile() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [maids, setMaids] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axiosInstense.get('api/v1/maids')
      .then(response => {
        setMaids(response.data);
      })
      .catch(error => {
        console.error("Error fetching maids:", error);
      });
  }, []);

  const changeActiveItem = (activeItemIndex) =>
    setActiveItemIndex(activeItemIndex);

  useEffect(() => {
    updateNumberOfCards();
    window.addEventListener("resize", updateNumberOfCards);
    return () => {
      window.removeEventListener("resize", updateNumberOfCards);
    };
  }, []);

  const updateNumberOfCards = () => {
    if (window.innerWidth <= 770) {
      setNumberOfCards(1);
    } else if (window.innerWidth <= 992) {
      setNumberOfCards(2);
    } else {
      setNumberOfCards(3);
    }
  };

  return (
    <div className="profileContainer my-12">
      <div className="container">
        <div className="mb-6 lg:mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-4xl tracking-tight bg-white font-extrabold  dark:text-white" style={{color:"#253061"}}>{t('profilesSection.title')}</h2>
          <Link to="/all-profiles">
            <ButtonEl bgColor="#253061" hoverBgColor="#1c2b4d" buttonTxt={t('profilesSection.buttonText')}/>
          </Link>
          
        </div>
        <div className="carousel-container" dir="ltr">
        <ItemsCarousel
          
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: "blue" }}>Placeholder</div>}
          numberOfCards={numberOfCards}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}
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
          {maids.slice(0, 5).map((maid, index) => (
          <MaidProfiles key={index} data={maid} />
            ))}
        </ItemsCarousel>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
