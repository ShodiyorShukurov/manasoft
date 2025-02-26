import React from "react";
import logo from "../assets/logo/manasoft.svg";
import facebook from "../assets/logo/facebook.svg";
import instagram from "../assets/logo/instagram.svg";
import twitter from "../assets/logo/twitter.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white border-t-[2px] border-[#9191b633] py-[30px]">
      <div className="container px-4 sm:px-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-[15px] text-[#d1d1eb9e] font-medium text-center md:text-left">
          <li className="flex flex-col justify-between">
            <a className="flex justify-center md:justify-start items-center" href="/">
              <img src={logo} alt="Manasoft" width={28} height={28} />
              <span className="font-bold text-[#4266B1] text-[28px] leading-[100%] ml-[4px] tracking-[-1.12px]">
                Manasoft
              </span>
            </a>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook} alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://x.com/" target="_blank">
                <img src={twitter} alt="Twitter" width={24} height={24} />
              </a>
            </div>
          </li>

          {/* Company */}
          <li>
            <h4 className="mb-[8px] text-[#D7D7E4] font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><NavLink to="/">About Us</NavLink></li>
              <li><NavLink to="/">Careers</NavLink></li>
              <li><NavLink to="/">Press</NavLink></li>
              <li><NavLink to="/">Blog</NavLink></li>
              <li><NavLink to="/">Contact</NavLink></li>
            </ul>
          </li>

          {/* Services */}
          <li>
            <h4 className="mb-[8px] text-[#D7D7E4] font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><NavLink to="/">Web Design</NavLink></li>
              <li><NavLink to="/">Software Development</NavLink></li>
              <li><NavLink to="/">Technical Support</NavLink></li>
              <li><NavLink to="/">Consulting</NavLink></li>
              <li><NavLink to="/">Custom Solutions</NavLink></li>
            </ul>
          </li>

          {/* Legal */}
          <li>
            <h4 className="mb-[8px] text-[#D7D7E4] font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><NavLink to="/">Privacy Policy</NavLink></li>
              <li><NavLink to="/">Terms of Service</NavLink></li>
              <li><NavLink to="/">Cookie Policy</NavLink></li>
            </ul>
          </li>

          {/* Support */}
          <li>
            <h4 className="mb-[8px] text-[#D7D7E4] font-semibold">Support</h4>
            <ul className="space-y-2">
              <li><NavLink to="/">Help Center</NavLink></li>
              <li><NavLink to="/">FAQs</NavLink></li>
              <li><NavLink to="/">Contact Support</NavLink></li>
            </ul>
          </li>
        </ul>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          © 2025 Manasoft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
