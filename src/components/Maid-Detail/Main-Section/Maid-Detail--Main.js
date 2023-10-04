import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { VerifyTokenFrontend } from "../../Authentication-components/verifyToken";
import Loading from "../../Loading/Loading";
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
const MaidDetailMainSection = (props) => {
  const isAuthenticated = VerifyTokenFrontend();
  const { t } = useTranslation();

  const { maidID } = useParams();
  const [maidDetails, setMaidDetails] = useState(null);
  const [interviewPlanned, setInterviewPlanned] = useState(false);
  // const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  // const location = useLocation();
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
    if (!isAuthenticated) {
      localStorage.setItem('prevPage', window.location.pathname);
      navigate('/login');
      return null;
    }
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

  // const handleDownloadCV = async () => {
  //   setLoading(true);
  //   try {
  //     const maidID = maidDetails._id;

  //     const response = await axiosInstense.get(
  //       `cv/pdf/${maidID}`,
  //       {
  //         responseType: "blob",
  //       }
  //     );

  //     const blob = new Blob([response.data], { type: "application/pdf" });
  //     const url = window.URL.createObjectURL(blob);

  //     const a = document.createElement("a");
  //     a.style.display = "none";
  //     a.href = url;
  //     a.download = `maid_${maidID}_cv.pdf`;

  //     document.body.appendChild(a);
  //     a.click();

  //     window.URL.revokeObjectURL(url);
  //     setLoading(false);

  //   } catch (error) {
  //     console.error("Error downloading CV:", error);
  //   }
  // };

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const extractYouTubeVideoId = (url) => {
    // Check if the URL is a YouTube Shorts URL
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^\n?#]+)/);
    if (shortsMatch) {
      return shortsMatch[1] || null;
    }
  
    // Check for standard YouTube video URLs
    const match = url.match(/youtu(?:\.be\/|be\.com\/watch\?v=)([^\n?#]+)/);
    return (match && match[1]) || null;
  };
  
  



  return (
    <>
      {maidDetails ? (
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
            <YouTube videoId={extractYouTubeVideoId(maidDetails.videoLink)} opts={opts} className="rounded-lg overflow-hidden shadow-md" />
            {console.log(extractYouTubeVideoId(maidDetails.videoLink))}
            {console.log(maidDetails.videoLink)}
            </div>
            <div className="rightSection w-full md:ml-8 md:mt-0 mt-8 ml-0">
              <h2 className="font-semibold text-4xl mb-3">{maidDetails.name}</h2>
              <p className="mb-3">{t('maidDetail.nationalityLabel')} <span>{maidDetails.nationality}</span></p>
              <p className="mb-3">{t('maidDetail.ageLabel')} <span>{maidDetails.age} </span>Years</p>
              <p className="mb-3">{t('maidDetail.salaryLabel')} <span>{maidDetails.salery} </span>OMR </p>
              {/* {loading && <p>Downloading...</p>} */}

              <div className="flex items-center gap-4 mt-8">
              <a href={`${process.env.REACT_APP_API_URL}cv/pdf/${maidID}`}>
                <button
                    style={{ background: "#253061" }}
                    className="py-2 text-white rounded-md px-6"
                  >
                    {t('maidDetail.downloadCVButton')}
                  </button>
              </a>
                
                {/* <button
                  style={{ background: "#253061" }}
                  className="py-2 text-white rounded-md px-6"
                  onClick={handleDownloadCV}
                >
                  {t('maidDetail.downloadCVButton')}
                </button> */}
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
      ): <Loading />}
    </>
  );
};

export default MaidDetailMainSection;
