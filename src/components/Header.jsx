import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logomark.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header>
      <div className="container">
        <div className="flex pt-[23px] justify-between items-center">
          <a className="flex " href="/">
            <img src={logo} alt="Manasoft" width={28} height={28} />
            <span className="font-bold text-[#4266B1] text-[28px] leading-[100%] ml-[4px] tracking-[-1.12px]">
              Manasoft
            </span>
          </a>

          {/* Navbar */}
          <nav className="hidden lg:flex bg-white/10 px-12 py-4 rounded-[32px]">
            <ul className="flex space-x-12 text-[#E4DAD7]">
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

          {/* Button */}
          <button className="hidden lg:block bg-[#4266B1] text-[#050100] text-[16px] rounded-[24px] px-6 py-3">
            Button
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 text-[24px]"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MODAL MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          {/* Sidebar Menu */}
          <div className="bg-gray-900 text-white w-[280px] h-full shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
              <a href="/" className=" cursor-pointer">
                <img src={logo} alt="Manasoft" width={28} height={28} />
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <ul className="px-6 py-4 space-y-4 pl-6">
              {['Home', 'Services', 'Portfolio', 'Contact'].map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-blue-400 font-semibold'
                          : 'hover:text-gray-400'
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            <button className="lg:block bg-[#4266B1] text-[#050100] text-[16px] rounded-[24px] px-6 py-3 ml-6">
              Button
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
