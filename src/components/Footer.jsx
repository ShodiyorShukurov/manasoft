import React from 'react';
import logo from '../assets/logo/manasoft.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const {t} = useTranslation()

  return (
    <footer className="text-white border-t-[2px] border-[#9191b633] py-[30px]">
      <div className="container">
        <ul className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
          <li className="flex md:flex-col justify-between col-span-3 md:col-span-2">
            <a
              className="flex justify-center md:justify-start items-center"
              href="/"
            >
              <img
                src={logo}
                alt="Manasoft"
                className="w-[20px] md:w-[28px] h-[20px] md:h-[28px]"
              />
              <span className="font-bold text-[#61A6FF] text-[20px] md:text-[32px] leading-[100%] ml-[4px]">
                Manasoft
              </span>
            </a>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://www.facebook.com/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.626 2.625H3.37598C2.96113 2.625 2.62598 2.96016 2.62598 3.375V20.625C2.62598 21.0398 2.96113 21.375 3.37598 21.375H20.626C21.0408 21.375 21.376 21.0398 21.376 20.625V3.375C21.376 2.96016 21.0408 2.625 20.626 2.625ZM18.4604 8.09766H16.9627C15.7885 8.09766 15.5611 8.65547 15.5611 9.47578V11.2828H18.3643L17.9986 14.1117H15.5611V21.375H12.6385V14.1141H10.1939V11.2828H12.6385V9.19687C12.6385 6.77578 14.1174 5.45625 16.2783 5.45625C17.3143 5.45625 18.2025 5.53359 18.4627 5.56875V8.09766H18.4604Z"
                    fill="white"
                    fillOpacity="0.7"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9973 6.86903C9.15795 6.86903 6.86644 9.16058 6.86644 12C6.86644 14.8394 9.15795 17.131 11.9973 17.131C14.8367 17.131 17.1282 14.8394 17.1282 12C17.1282 9.16058 14.8367 6.86903 11.9973 6.86903ZM11.9973 15.3348C10.1611 15.3348 8.66262 13.8362 8.66262 12C8.66262 10.1638 10.1611 8.66525 11.9973 8.66525C13.8335 8.66525 15.332 10.1638 15.332 12C15.332 13.8362 13.8335 15.3348 11.9973 15.3348ZM17.3383 5.46308C16.6754 5.46308 16.14 5.99845 16.14 6.66139C16.14 7.32434 16.6754 7.8597 17.3383 7.8597C18.0013 7.8597 18.5366 7.32684 18.5366 6.66139C18.5368 6.50397 18.5059 6.34806 18.4458 6.20259C18.3856 6.05711 18.2974 5.92493 18.1861 5.81362C18.0748 5.70231 17.9426 5.61405 17.7971 5.5539C17.6516 5.49375 17.4957 5.46289 17.3383 5.46308ZM21.9989 12C21.9989 10.6191 22.0114 9.25064 21.9338 7.87221C21.8563 6.27113 21.4911 4.85017 20.3203 3.67938C19.147 2.50609 17.7286 2.14334 16.1275 2.06579C14.7466 1.98824 13.3782 2.00074 11.9998 2.00074C10.6189 2.00074 9.25051 1.98824 7.8721 2.06579C6.27105 2.14334 4.85012 2.50859 3.67935 3.67938C2.50608 4.85267 2.14334 6.27113 2.06579 7.87221C1.98824 9.25314 2.00074 10.6216 2.00074 12C2.00074 13.3784 1.98824 14.7494 2.06579 16.1278C2.14334 17.7289 2.50858 19.1498 3.67935 20.3206C4.85262 21.4939 6.27105 21.8567 7.8721 21.9342C9.25301 22.0118 10.6214 21.9993 11.9998 21.9993C13.3807 21.9993 14.7491 22.0118 16.1275 21.9342C17.7286 21.8567 19.1495 21.4914 20.3203 20.3206C21.4936 19.1473 21.8563 17.7289 21.9338 16.1278C22.0139 14.7494 21.9989 13.3809 21.9989 12ZM19.7974 17.899C19.6148 18.3543 19.3947 18.6945 19.0419 19.0448C18.6892 19.3975 18.3515 19.6176 17.8962 19.8003C16.5803 20.3231 13.4558 20.2055 11.9973 20.2055C10.5389 20.2055 7.4118 20.3231 6.09593 19.8028C5.64064 19.6201 5.30041 19.4 4.95018 19.0473C4.59745 18.6945 4.37731 18.3568 4.19469 17.9015C3.67434 16.5831 3.79192 13.4585 3.79192 12C3.79192 10.5415 3.67434 7.4144 4.19469 6.09851C4.37731 5.6432 4.59745 5.30298 4.95018 4.95274C5.30291 4.6025 5.64064 4.37985 6.09593 4.19723C7.4118 3.67688 10.5389 3.79446 11.9973 3.79446C13.4558 3.79446 16.5828 3.67688 17.8987 4.19723C18.354 4.37985 18.6942 4.6 19.0444 4.95274C19.3972 5.30548 19.6173 5.6432 19.7999 6.09851C20.3203 7.4144 20.2027 10.5415 20.2027 12C20.2027 13.4585 20.3203 16.5831 19.7974 17.899Z"
                    fill="white"
                    fillOpacity="0.7"
                  />
                </svg>
              </a>
              <a href="https://x.com/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
                    fill="#B3B3B6"
                  />
                </svg>
              </a>
            </div>
          </li>

          <li>
            <h4 className="mb-[8px] font-medium md:text-[16px] md:leading-[24px]">
              {t('footer.link_title1')}
            </h4>
            <ul className="space-y-2 text-[#ffffffb3] text-[12px] md:text-[14px] leading-[100%] md:leading-[20px] font-medium">
              <li>
                <NavLink to="/">{t('footer.link1')}</NavLink>
              </li>
              <li>
                <NavLink to="/services">{t('footer.link2')}</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">{t('footer.link3')}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t('footer.link4')}</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <h4 className="mb-[8px] font-medium md:text-[16px] md:leading-[24px]">{t('footer.link_title2')}</h4>
            <ul className="space-y-2 text-[#ffffffb3] text-[12px] md:text-[14px] leading-[100%] md:leading-[20px] font-medium">
              <li>
                <NavLink to="/">{t('footer.link5')}</NavLink>
              </li>
              <li>
                <NavLink to="/">{t('footer.link6')}</NavLink>
              </li>
              <li>
                <NavLink to="/">{t('footer.link7')}</NavLink>
              </li>
              <li>
                <NavLink to="/">{t('footer.link8')}</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <h4 className="mb-[8px] font-medium md:text-[16px] md:leading-[24px]">{t('footer.link_title3')}</h4>
            <ul className="space-y-2 text-[#ffffffb3] text-[12px] md:text-[14px] leading-[100%] md:leading-[20px] font-medium">
              <li>
                <a href="tel:+998938883388">+998 93 888 33 88</a>
              </li>
              <li>
                <a className='text-wrap' href="malito:manasoft@gmail.com">manasoft@gmail.com</a>
              </li>
              <li>
                <p>{t('footer.location')}</p>
              </li>
            </ul>
          </li>
        </ul>

        {/* Copyright */}
        <div className="mt-[12px] md:mt-8 text-[#ffffffb3] text-center text-[12px] md:text-[14px] leading-[20px]">
        {t('footer.text')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
