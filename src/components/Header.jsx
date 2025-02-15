import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logomark.svg';

const Header = () => {
  const [showLangMenu, setShowLangMenu] = React.useState(false);
  const [selectedLang, setSelectedLang] = React.useState('Uz');

  return (
    <header>
      <div className="container">
        <div className="flex py-[20px] justify-between items-center">
          {/* LOGO */}
          <a className="flex items-center" href="/">
            <img src={logo} alt="Manasoft" width={28} height={28} />
            <span className="font-bold text-[#4266B1] text-[24px] sm:text-[28px] leading-[100%] ml-[4px] tracking-[-1.12px] font-[Sen]">
              Manasoft
            </span>
          </a>

          {/* DESKTOP NAVBAR */}
          <nav className="lg:flex bg-white/10 px-8 py-3 lg:px-12 lg:py-4 rounded-[32px]">
            <ul className="lg:flex space-x-6 lg:space-x-12 text-[#E4DAD7]">
              {['Home', 'Services', 'Portfolio', 'Contact'].map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-blue-500 font-semibold'
                          : 'hover:text-gray-400 transition'
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex gap-[16px]">
            {/* Language & Button */}
            <div
              className="relative"
              onMouseEnter={() => setShowLangMenu(true)}
              onMouseLeave={() => setShowLangMenu(false)}
            >
              <button className="flex items-center gap-2 bg-white/10 p-[12px] rounded-full text-[#fff] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.757 4.5c.18.217.376.42.586.608.153-.61.354-1.175.596-1.678A5.53 5.53 0 0 0 3.757 4.5ZM8 1a6.994 6.994 0 0 0-7 7 7 7 0 1 0 7-7Zm0 1.5c-.476 0-1.091.386-1.633 1.427-.293.564-.531 1.267-.683 2.063A5.48 5.48 0 0 0 8 6.5a5.48 5.48 0 0 0 2.316-.51c-.152-.796-.39-1.499-.683-2.063C9.09 2.886 8.476 2.5 8 2.5Zm3.657 2.608a8.823 8.823 0 0 0-.596-1.678c.444.298.842.659 1.182 1.07-.18.217-.376.42-.586.608Zm-1.166 2.436A6.983 6.983 0 0 1 8 8a6.983 6.983 0 0 1-2.49-.456 10.703 10.703 0 0 0 .202 2.6c.72.231 1.49.356 2.288.356.798 0 1.568-.125 2.29-.356a10.705 10.705 0 0 0 .2-2.6Zm1.433 1.85a12.652 12.652 0 0 0 .018-2.609c.405-.276.78-.594 1.117-.947a5.48 5.48 0 0 1 .44 2.262 7.536 7.536 0 0 1-1.575 1.293Zm-2.172 2.435a9.046 9.046 0 0 1-3.504 0c.039.084.078.166.12.244C6.907 13.114 7.523 13.5 8 13.5s1.091-.386 1.633-1.427c.04-.078.08-.16.12-.244Zm1.31.74a8.5 8.5 0 0 0 .492-1.298c.457-.197.893-.43 1.307-.696a5.526 5.526 0 0 1-1.8 1.995Zm-6.123 0a8.507 8.507 0 0 1-.493-1.298 8.985 8.985 0 0 1-1.307-.696 5.526 5.526 0 0 0 1.8 1.995ZM2.5 8.1c.463.5.993.935 1.575 1.293a12.652 12.652 0 0 1-.018-2.608 7.037 7.037 0 0 1-1.117-.947 5.48 5.48 0 0 0-.44 2.262Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{selectedLang}</span>
              </button>

              {showLangMenu && (
                <div className="absolute right-0 w-24 bg-white/10 text-white rounded-lg shadow-md z-50">
                  {['En', 'Uz', 'Ру'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setShowLangMenu(false);
                      }}
                      className={`flex items-center justify-between w-full px-4 py-2 ${
                        lang == 'En'
                          ? 'rounded-t-lg'
                          : lang == 'Ру'
                          ? 'rounded-b-lg'
                          : ''
                      } hover:bg-gray-700 cursor-pointer`}
                    >
                      {lang}
                      {selectedLang === lang && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4"
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

            <button className="hidden lg:block bg-[#4266B1] text-[#fff] text-[16px] rounded-[24px] px-6 py-3">
              Bog'lanish
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
