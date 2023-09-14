import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";
import { useTranslation } from 'react-i18next';
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
const MaidDetailMainSection = (props) => {
  const { t } = useTranslation();

  const { maidID } = useParams();
  const [maidDetails, setMaidDetails] = useState(null);
  const [interviewPlanned, setInterviewPlanned] = useState(false);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchMaidData = async () => {
      try {
        const response = await axiosInstense.get(
          "api/v1/maids/" + maidID
        );
        setMaidDetails(response.data);
      } catch (error) {
        console.error("Error fetching maids:", error);
      }
    };

    fetchMaidData();
  }, [maidID]);

  const handlePlanInterview = async () => {
    
    try {
      const userPhoneNumber = localStorage.getItem("phonenoofuser");

      const response = await axiosInstense.post(
        "api/v1/interviews",
        {
          phoneNumber: userPhoneNumber,
          maidId: maidDetails.code,
        }
      );

      if (response.status === 201) {
        setInterviewPlanned(true);
      } else {
        console.error("Error planning interview");
      }
    } catch (error) {
      console.error("Error planning interview:", error);
    }
  };

  const handleDownloadCV = async () => {
    setLoading(true);
    try {
      const maidID = maidDetails._id;

      const response = await axiosInstense.get(
        `cv/${maidID}`,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `maid_${maidID}_cv.pdf`;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      setLoading(false);

    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };
  // const videoId = "ycAyrekLBvE";
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      {maidDetails && (
        <div className="maid-detail-main-section container my-8">
          {interviewPlanned && (
            <p className="ml-4 bg-green-700 rounded-lg text-white px-4 py-6">
            {t('maidDetail.interviewSuccessMessage')}
            </p>
          )}
          <p className="mx-3">
          {t('maidDetail.codeLabel')}<span className="text-blue-700 text-xl mb-4"> {maidDetails.code}</span>
          </p>
          <div className="flex flex-col md:flex-row items-start gap-x-6 justify-between container">
            <div className="leftSection w-full">
              <YouTube videoId={maidDetails.videoLink} opts={opts} className="rounded-lg overflow-hidden shadow-md" />
            </div>
            <div className="rightSection w-full md:ml-8 md:mt-0 mt-8 ml-0">
              <h2 className="font-semibold text-4xl mb-3">{maidDetails.name}</h2>
              <p className="mb-3">{t('maidDetail.nationalityLabel')} <span>{maidDetails.nationality}</span></p>
              <p className="mb-3">{t('maidDetail.ageLabel')} <span>{maidDetails.age} </span>Years</p>
              <p className="mb-3">{t('maidDetail.experienceLabel')} <span>2 </span>Years Kuwait</p>
              <p className="mb-3">{t('maidDetail.salaryLabel')} <span>{maidDetails.salery} </span>OMR </p>
              <p className="mb-3">{t('maidDetail.priceLabel')} <span>{maidDetails.price} </span>OMR </p>
              {loading && <p>Downloading...</p>}

              <div className="flex items-center gap-4 mt-8">
                <button
                  style={{ background: "#253061" }}
                  className="py-2 text-white rounded-md px-6"
                  onClick={handleDownloadCV}
                >
                  {t('maidDetail.downloadCVButton')}
                </button>
                <button
                  style={{ background: "#249D64" }}
                  className="py-2 text-white rounded-md px-6"
                  onClick={handlePlanInterview}
                  disabled={interviewPlanned}
                >
                  {t('maidDetail.planInterviewButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MaidDetailMainSection;
