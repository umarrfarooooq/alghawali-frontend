import React from "react";
import './Contact-us.css';
import ButtonEl from "../UI/Button/Button";
import { useTranslation } from 'react-i18next';

const ContactUsComponent = () => {
  const { t } = useTranslation();

  const handleContactUsForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-us-main container">
      <div className="contact-form-page py-4 flex items-start gap-x-8">
        <div className="contact-inTouch-form">
          <h2 className="font-bold text-3xl py-4">
            {t("contactForm.sectionTitle")}{" "}
          </h2>
          <form className="contactUsForm" onSubmit={handleContactUsForm}>
            <input
              placeholder={t("contactForm.placeholderName")}
              type="text"
              name="name"
              required
            />
            <input className="rtlinputt ml-2"
              placeholder={t("contactForm.placeholderEmail")}
              type="email"
              name="email"
              required
            />
            <input
              className="block w-full"
              placeholder={t("contactForm.placeholderPhone")}
              type="number"
              name="number"
            />
            <textarea
              required
              className="block w-full resize-none"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder={t("contactForm.placeholderMessage")}
            ></textarea>
            <ButtonEl
              bgColor="#253061"
              hoverBgColor="#1c2b4d"
              buttonTxt={t("contactForm.submitButton")}
              px={8}
              py={1.5}
            />
          </form>
        </div>
        <div className="contact-support ml-48">
          <h2 className="font-bold text-3xl py-4">
            {t("supportSection.sectionTitle")}
          </h2>
          <div className="contact-support-content">
            <div className="general-office">
              <h3 className="font-bold text-xl py-1">
                {t("supportSection.dubaiOffice.title")}
              </h3>
              <p>
                {t("supportSection.dubaiOffice.address")}
              </p>
            </div>
            <div className="store-hours mt-4">
              <h3 className="font-bold text-xl py-1">
                {t("supportSection.omanOffice.title")}
              </h3>
              <p>
                {t("supportSection.omanOffice.address")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
