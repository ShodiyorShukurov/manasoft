import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logomark.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header
      className={`w-full bg-transparent sticky top-0 z-50 ${
        menuOpen ? '' : 'backdrop-blur-[30px]'
      } shadow-md`}
    >
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
          <nav
          // className="hidden lg:flex

          // bg-white/10
          // px-8 py-3 lg:px-12 lg:py-4 rounded-[32px]
          // "
          >
            <ul className="hidden lg:flex space-x-6 lg:space-x-12 text-[#E4DAD7]">
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

          {/* <button className="hidden lg:block bg-[#4266B1] text-[#050100] text-[16px] rounded-[24px] px-6 py-3">
            Button
          </button> */}

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-gray-700 text-[24px]"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#4266B1"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-[-100%]'
        }`}
      >
        <div className="absolute top-6 left-6 text-white text-2xl">
          <a className="flex items-center" href="/">
            <img src={logo} alt="Manasoft" width={28} height={28} />
            <span className="font-bold text-[#4266B1] text-[24px] sm:text-[28px] leading-[100%] ml-[4px] tracking-[-1.12px] font-[Sen]">
              Manasoft
            </span>
          </a>
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        <ul className="space-y-6 text-white text-xl font-semibold">
          {['Home', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-700 w-[200px] text-center pb-2"
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 font-semibold'
                    : 'hover:text-gray-300 transition'
                }
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
