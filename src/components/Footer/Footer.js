import React from 'react';
import logo from "../Header/images/Group 2.svg"
import "./Footer.css"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();

  return (
    <div style={{backgroundColor:"#253061", color:"white"}}>
    <footer className="p-4 sm:p-6 container">
      <div>
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={logo} className=" h-24" alt="Company Logo" />
            </Link>
          </div>
          <div className='footerDesc '>
          <h3 className='text-sm sm:text-base lg:text-lg'>Al Ghawali</h3>
            <p className='text-xs mb-4'>
            Your trusted partner for top-tier maid <br /> services, enhancing your home life with <br /> skilled and dependable professionals.
            </p>
            <div style={{color:"#28BB76"}} className="sm:flex sm:items-center sm:justify-start mb-4">
          <span className="flex items-center gap-1 text-sm sm:text-center">
          <span dir='ltr'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
            <path id="Vector" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#28BB76"/>
            </g>
          </svg>
          </span>
          <span dir='ltr'>+968 7744 7719</span>
          </span>
            </div>
            <div style={{color:"#28BB76"}} className="sm:flex sm:items-center sm:justify-start">
              <span className="flex items-center gap-1 text-sm sm:text-center">
              <span dir='ltr'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame">
                <path id="Vector" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#28BB76"/>
                </g>
              </svg>
              </span>
              <span dir='ltr'>info@alghawalimanpower.com</span>
              </span>
            </div>
          </div>
          </div>
          <div className="footerItems grid text-white grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">{t('footer.Services')}</h2>
              <ul className="text-white">
              
                <li className="mb-4">
                  <Link to={"/all-profiles"}>Maids</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/services"}>Nurses</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/services"}>Barista</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/services"}>Waitress</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/services"}>Drivers</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">{t('footer.followUsTitle')}</h2>
              <ul className="">
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href='https://instagram.com/al.ghawalimanpower?igshid=MzRlODBiNWFlZA=='>Instagram</a>
                </li>
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href="https://twitter.com/alghawaliman" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/company/alghawalimanpower/?viewAsMember=true" className="hover:underline">LinkedIn</a>
                </li>
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href="https://web.facebook.com/profile.php?id=61550262875345" className="hover:underline">Facebook</a>
                </li>
                {/* <li style={{color:'#28BB76'}} className="mb-4">
                <span className="flex items-center gap-1 text-sm">
                  <span dir='ltr'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                    <path id="Vector" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#28BB76"/>
                    </g>
                  </svg>
                  </span>
                  <span dir='ltr'>+968 7744 7719</span>
                  </span>
                </li>
                <li style={{color:'#28BB76'}}>
                <span className="flex items-center gap-1 text-sm">
                  <span dir='ltr'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                    <path id="Vector" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#28BB76"/>
                    </g>
                  </svg>
                  </span>
                  <span dir='ltr'>info@alghawalimanpower.com</span>
                  </span>
                </li> */}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">{t('footer.legalTitle')}</h2>
              <ul className="">
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
        {/* <div style={{color:"#28BB76"}} className="sm:flex sm:items-center sm:justify-end">
          <span className="flex items-center gap-1 text-sm sm:text-center">
          <span dir='ltr'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
            <path id="Vector" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#28BB76"/>
            </g>
          </svg>
          </span>
          <span dir='ltr'>+968 7744 7719</span>
          </span>
        </div>
        <div style={{color:"#28BB76"}} className="sm:flex sm:items-center sm:justify-end">
          <span className="flex items-center gap-1 text-sm sm:text-center">
          <span dir='ltr'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
            <path id="Vector" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#28BB76"/>
            </g>
          </svg>
          </span>
          <span dir='ltr'>info@alghawalimanpower.com</span>
          </span>
        </div> */}

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center text-center sm:justify-center">
          <span className="text-sm sm:text-center">
          {t('footer.copyright')}
          </span>
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default Footer;
