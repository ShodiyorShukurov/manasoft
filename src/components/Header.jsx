import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/manasoft.svg';
import global from '../assets/logo/global.svg';
import burgerMenu from '../assets/logo/menu.svg';
import facebookIcon from '../assets/logo/facebook.svg';
import instagramIcon from '../assets/logo/instagram.svg';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Uz');
  const { t, i18n } = useTranslation();
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const changeValues = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
    };

    if (showLangMenu || showMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLangMenu, showMobileMenu]);

  return (
    <header className="w-full bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex pt-4 sm:pt-6 lg:pt-9 justify-between items-center">
          {/* MOBILE BURGER BUTTON */}
          <button
            className="block xl:hidden p-2 sm:p-3 rounded-3xl bg-[#FFFFFF1A] cursor-pointer"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            <img
              className="w-5 sm:w-6 h-5 sm:h-6"
              src={burgerMenu}
              alt="Burger Menu"
            />
          </button>

          {/* LOGO */}
          <a className="flex items-center" href="/">
            <img
              src={logo}
              alt="Manasoft"
              className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8"
            />
            <span className="font-bold text-[#61A6FF] text-sm sm:text-xl lg:text-2xl leading-tight ml-1 sm:ml-2 tracking-tight font-[Sen]">
              Manasoft
            </span>
          </a>

          {/* DESKTOP NAVBAR */}
          <nav className="hidden xl:flex bg-white/10 px-6 lg:px-12 py-2 lg:py-4 rounded-3xl">
            <ul
              style={{ fontFamily: 'Public Sans' }}
              className="flex space-x-6 lg:space-x-12 text-[#FFFFFFCC] text-sm lg:text-base"
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold'
                      : 'hover:text-gray-400 transition'
                  }
                >
                  {t('navbar.home')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold'
                      : 'hover:text-gray-400 transition'
                  }
                >
                  {t('navbar.services')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold'
                      : 'hover:text-gray-400 transition'
                  }
                >
                  {t('navbar.portfolio')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold'
                      : 'hover:text-gray-400 transition'
                  }
                >
                  {t('navbar.contact')}
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* LANGUAGE AND CONTACT */}
          <div className="flex gap-2 sm:gap-4" ref={menuRef}>
            <div className="relative">
              <button
                className="flex items-center gap-1 sm:gap-2 bg-white/10 p-2 sm:p-3 rounded-full text-white cursor-pointer"
                onClick={() => setShowLangMenu((prev) => !prev)}
              >
                <img
                  src={global}
                  alt="global"
                  className="w-5 sm:w-6 h-5 sm:h-6"
                />
                <span className="text-xs sm:text-sm lg:text-base">{selectedLang}</span>
              </button>

              {showLangMenu && (
                <div className="absolute right-0 w-20 sm:w-24 bg-white/10 text-white rounded-lg shadow-md z-50">
                  {['En', 'Uz', 'Ру'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        changeValues(lang.toLowerCase());
                        setShowLangMenu(false);
                      }}
                      className={`flex items-center justify-between w-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${
                        lang === 'En' ? 'rounded-t-lg' : lang === 'Ру' ? 'rounded-b-lg' : ''
                      } hover:bg-gray-700 cursor-pointer`}
                    >
                      {lang}
                      {selectedLang === lang && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-3 sm:w-4 h-3 sm:h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              style={{ fontFamily: 'Public Sans' }}
              className="hidden xl:block bg-[#61A6FF] text-white text-sm lg:text-base rounded-3xl px-4 lg:px-6 py-2 lg:py-3 cursor-pointer"
            >
              {t('navbar.contact_button')}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <nav
            ref={mobileMenuRef}
            className="fixed top-0 left-0 block xl:hidden bg-black w-full h-screen z-50 px-4 sm:px-6"
          >
            <button
              className="absolute top-4 left-4 p-2 sm:p-3 rounded-3xl bg-[#FFFFFF1A] cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 sm:w-6 h-5 sm:h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <ul
              style={{ fontFamily: 'Public Sans' }}
              className="flex flex-col items-center justify-center space-y-6 text-white mt-20 sm:mt-24"
            >
              <li className="w-full text-center">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold text-sm sm:text-base'
                      : 'hover:text-gray-400 transition text-sm sm:text-base'
                  }
                  onClick={() => setShowMobileMenu(false)}
                >
                  {t('navbar.home')}
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold text-sm sm:text-base'
                      : 'hover:text-gray-400 transition text-sm sm:text-base'
                  }
                  onClick={() => setShowMobileMenu(false)}
                >
                  {t('navbar.services')}
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold text-sm sm:text-base'
                      : 'hover:text-gray-400 transition text-sm sm:text-base'
                  }
                  onClick={() => setShowMobileMenu(false)}
                >
                  {t('navbar.portfolio')}
                </NavLink>
              </li>
              <li className="w-fulltext-center">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold text-sm sm:text-base'
                      : 'hover:text-gray-400 transition text-sm sm:text-base'
                  }
                  onClick={() => setShowMobileMenu(false)}
                >
                  {t('navbar.contact')}
                </NavLink>
              </li>
            </ul>

            <a
              href="tel:+998912345678"
              style={{ fontFamily: 'Public Sans' }}
              className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 text-white bg-[#61A6FF] text-sm sm:text-base rounded-3xl px-4 sm:px-6 py-2 sm:py-3 cursor-pointer"
            >
              {t('navbar.contact_button')}
            </a>

            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-2 bg-[#FFFFFF1A] rounded-full hover:bg-gray-700 transition"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-5 sm:w-6 h-5 sm:h-6"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-2 bg-[#FFFFFF1A] rounded-full hover:bg-gray-700 transition"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-5 sm:w-6 h-5 sm:h-6"
                />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;