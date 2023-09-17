import React from 'react';
import logo from './img/logo.svg'
import "./Footer.css"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 container">
      <div>
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={logo} className=" h-24" alt="Company Logo Logo" />
            </Link>
          </div>
            
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('footer.Services')}</h2>
              <ul className="text-gray-600 dark:text-gray-400">
              
                <li className="mb-4">
                  <Link to={"/all-profiles"}>Maids</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/services"}>Nurses</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/services"}>Barista</Link>
                </li>
                <li>
                  <Link to={"/services"}>Waitress</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('footer.followUsTitle')}</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href='https://instagram.com/al.ghawalimanpower?igshid=MzRlODBiNWFlZA=='>Instagram</a>
                  
                </li>
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href="https://twitter.com/alghawaliman" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/company/alghawalimanpower/?viewAsMember=true" className="hover:underline">LinkedIn</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" target='_blank' href="https://web.facebook.com/profile.php?id=61550262875345" className="hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('footer.legalTitle')}</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                <Link to={"/privacy-policy"}>{t('footer.privacyPolicy')}</Link>
                </li>
                <li>
                <Link to={"/terms-conditions"}>{t('footer.termsAndConditions')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {t('footer.copyright')}
          </span>
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default Footer;
