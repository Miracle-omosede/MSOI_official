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
                            <a href='#' className='link-item'><span>About us</span> &nbsp;
                                <ChevronDown size={14} strokeWidth={2.25} className='i'/>
                            </a>
                            <div className='dropdown-menu absolute top-[100%] left-0  w-[10rem] opacity-0 bg-white transform transition-[.3s]'>
                                <ul className='relative'>
                                    <li className="dropdown-link">
                                        <a href='#' className='dropdown-link-item'>History</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Vision, Mission and Values</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Board of Directors</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Annual Reports</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Research</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Job Opportunities</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Funders and Partners</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Contact</a>
                                    </li>
                                    <div className="arrow absolute w-[11px] h-[11px] top-[-5.5px] left-[32px] bg-white rotate-[45deg] cursor-pointer transition-[.3s]"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'>Programs</a>
                        </li>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'><span>Housing</span> &nbsp;
                                <ChevronDown size={14} strokeWidth={2.25} className='i'/>
                            </a>
                            <div className='dropdown-menu absolute top-[100%] left-0  w-[10rem] opacity-0 bg-white transform transition-[.3s]'>
                                <ul className='relative'>
                                    <li className="dropdown-link">
                                        <a href='#' className='dropdown-link-item'>About MSOI</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Locations</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Diversity</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Who can apply</a>
                                    </li>
                                    <div className="arrow absolute w-[11px] h-[11px] top-[-5.5px] left-[32px] bg-white rotate-[45deg] cursor-pointer transition-[.3s]"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'><span>Take Action</span> &nbsp;<ChevronDown size={14} strokeWidth={2.25} className='i'/></a>
                            
                            <div className='dropdown-menu absolute top-[100%] left-0  w-[10rem] opacity-0 bg-white transform transition-[.3s]'>
                                <ul className='relative'>
                                    <li className="dropdown-link">
                                        <a href='#' className='dropdown-link-item'>Donate</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Learn. Act. Give</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Volunteer</a>
                                    </li>
                                  
                                    <div className="arrow absolute w-[11px] h-[11px] top-[-5.5px] left-[32px] bg-white rotate-[45deg] cursor-pointer transition-[.3s]"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link relative">
                            <a href='#' className='link-item'><span>What's New</span> &nbsp;<ChevronDown size={14} strokeWidth={2.25} className='i'/>
                            </a>
                            <div className='dropdown-menu absolute top-[100%] left-0  w-[10rem] opacity-0 bg-white transform transition-[.3s]'>
                                <ul className='relative'>
                                    <li className="dropdown-link">
                                        <a href='#' className='dropdown-link-item'>Our stories</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Videos</a>
                                    </li>
                                    <li className="dropdown-link">
                                    <a href='#' className='dropdown-link-item'>Blog</a>
                                    </li>
                                  
                                    <div className="arrow absolute w-[11px] h-[11px] top-[-5.5px] left-[32px] bg-white rotate-[45deg] cursor-pointer transition-[.3s]"></div>
                                </ul>
                            </div>
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
