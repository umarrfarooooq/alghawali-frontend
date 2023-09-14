import React from 'react';
import logo from './img/logo.svg'
import "./Footer.css"
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 container">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 h-24" alt="FlowBite Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('footer.resourcesTitle')}</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Alghawali</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Swift</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('footer.followUsTitle')}</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('footer.legalTitle')}</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/" className="hover:underline">{t('footer.privacyPolicy')}</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">{t('footer.termsAndConditions')}</a>
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
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* ... Facebook SVG path here ... */}
              </svg>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* ... Twitter SVG path here ... */}
              </svg>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* ... LinkedIn SVG path here ... */}
              </svg>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* ... Instagram SVG path here ... */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default Footer;
