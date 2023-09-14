import React, { useEffect, useState } from "react";
import MaidProfiles from "../Profiles/MaidProfiles";
import "../Filter-Section/Filter.modules.css"
import axios from "axios";
import ButtonEl from "../UI/Button/Button";
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const AllMaidsProfiles = ({ searchTerm }) => {
  const [maidData, setMaidData] = useState([]);
  const [itemsToLoad, setItemsToLoad] = useState(6);

  useEffect(() => {
    const fetchMaidProfiles = async () => {
      try {
        const response = await axiosInstense.get("api/v1/maids", {
          params: { search: searchTerm },
        });
        setMaidData(response.data);
      } catch (error) {
        console.error("Error fetching maid profiles:", error);
      }
    };

    fetchMaidProfiles();
  }, [searchTerm]);

  const currentItems = maidData.slice(0, itemsToLoad);

  const handleLoadMore = () => {
    setItemsToLoad(itemsToLoad + 6);
  };

  return (
    <>
    <div
      className="allprofilesmaid space-y-4 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0"
      style={{ height: 200, width: "70%" }}
    >
      {currentItems.map((maid, index) => (
        <MaidProfiles key={index} data={maid} />
      ))}
      <div className="load-more w-full">
    <button
        className="mb-8 block"
        onClick={handleLoadMore}
        style={{ display: itemsToLoad >= maidData.length ? "none" : "block" }}
    >
        <ButtonEl
        bgColor="#253061"
        hoverBgColor="#1c2b4d"
        buttonTxt="Load More"
        />
    </button>
    </div>

    </div>
    
    </>
    
  );
};

export default AllMaidsProfiles;
