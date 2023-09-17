import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes ,Route, Navigate } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { useTranslation } from 'react-i18next';
import { VerifyTokenFrontend } from "./components/Authentication-components/verifyToken";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import('./Pages/Home'));
const AllMaidsProfilePage = lazy(() => import('./Pages/All-Maids'));
const MaidDetail = lazy(() => import('./Pages/Maid-Detail'));
const AboutUs = lazy(() => import('./Pages/About-Us'));
const ServicesPage = lazy(() => import('./Pages/Services-page'));
const LoginPage = lazy(() => import('./Pages/Login'));
const SignUpPage = lazy(() => import('./Pages/sign-up'));
const ContactUs = lazy(() => import('./Pages/Contact-Us'));
const BlogPage = lazy(() => import('./Pages/Blog'));
const TermsAndConditionsPage = lazy(() => import('./Pages/T&C-page'));
const PrivacyPolicyPage = lazy(() => import('./Pages/PrivacyPolicyPage'));
const OnDemandPage = lazy(() => import('./Pages/OnDemandPage'));


i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./locales/en.json'),
      },
      ar: {
        translation: require('./locales/ar.json'),
      },
    },
    fallbackLng: 'ar',
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

  
function App() {
  const isAuthenticated = VerifyTokenFrontend();
  const { i18n } = useTranslation();

  useEffect(() => {
    const detectedLanguage = i18n.language;

    if (detectedLanguage === 'ar') {
      document.body.setAttribute('dir', 'rtl');
      const link = document.createElement('link');
      link.href = "rtl.css";
      link.rel = 'stylesheet';
      link.type = 'text/css';

      document.head.appendChild(link);

    } else {
      document.body.setAttribute('dir', 'ltr');
      const existingLink = document.querySelector('link[href="rtl.css"]');
      if (existingLink) {
        existingLink.remove();
      }
    }
  }, [i18n.language]);


  return (
    <Router>
      <Suspense fallback={<div><Loading /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-profiles" element={<AllMaidsProfilePage />} />
          <Route
            path="/maid-detail/:maidID"
            element={
              isAuthenticated ? <MaidDetail /> : <Navigate to="/login" />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/on-demand" element={<OnDemandPage />} />
          <Route
            path="/terms-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
