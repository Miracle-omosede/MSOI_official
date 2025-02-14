"use client";

import { ChevronDown, HandCoins } from "lucide-react";
import Image from "next/image";
import logo from "../assets/MSOIlogo.svg";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-[99999] h-[6rem] bg-white flex items-center justify-start font-lato border-b-[5px] border-b-light">
      <div className="container flex md:max-w-[1376px] py-0 md:px-[2rem] pr-[1rem] md:pr-0 h-[3rem] mx-auto relative">
        
        {/* Logo Section */}
        <div className="logo-container font-semibold flex-1 flex items-center md:ml-0 ml-[-2rem]">
          <Image src={logo} alt="logo" width={290} />
        </div>

        {/* Navigation & Mobile Menu */}
        <div className="flex gap-[9rem]">
          <div
            className={`flex-[3] flex nav-btns items-center justify-center transition-transform duration-300 
            ${open ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"}`}
          >
            <nav className="nav-links">
            <ul className='flex justify-center items-center'>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'>Home</a>
                        </li>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'><span>Programs</span> &nbsp;
                                <ChevronDown size={14} strokeWidth={2.25} className='i'/>
                            </a>
                            <div className='dropdown-menu absolute top-[100%] left-0  w-[10rem] opacity-0 bg-white transform transition-[.3s]'>
                                <ul className='relative'>
                                    <li className="dropdown-link">
                                        <a href='#' className='dropdown-link-item'>link 1</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>link 2</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>link 3</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>link 4</a>
                                    </li>
                                    <div className="arrow absolute w-[11px] h-[11px] top-[-5.5px] left-[32px] bg-white rotate-[45deg] cursor-pointer transition-[.3s]"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'><span>Housing</span> &nbsp;
                                <ChevronDown size={14} strokeWidth={2.25} className='i'/>
                            </a>
                            <div className='dropdown-menu absolute top-[100%] left-0  w-[10rem] opacity-0 bg-white transform transition-[.3s]'>
                                <ul className='relative'>
                                    <li className="dropdown-link">
                                        <a href='#' className='dropdown-link-item'>link 5</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>link 6</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>link 7</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>link 8</a>
                                    </li>
                                    <div className="arrow absolute w-[11px] h-[11px] top-[-5.5px] left-[32px] bg-white rotate-[45deg] cursor-pointer transition-[.3s]"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'>Take action</a>
                        </li>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'>What's New</a>
                        </li>
                    </ul>
            </nav>
          </div>

          {/* Donate Button */}
          <div className="md:flex hidden justify-center items-center font-lato">
            <a href="#" className="btn flex items-center gap-2">
              <HandCoins /> <span>Donate</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden  flex items-center justify-end focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <div className="w-[2.5rem] h-[2.5rem] flex flex-col items-center justify-center space-y-1 relative">
            <div
              className={`w-[1.6rem] h-[3px] bg-light transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></div>
            <div
              className={`w-[1.6rem] h-[3px] bg-light transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[0px]" : ""
              }`}
            ></div>
          </div>
        </button>

      </div>
    </header>
  );
};

export default Navbar;
