"use client"
import { Facebook, Linkedin, LocateIcon, MapPin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import logo from "../assets/MSOIlogoalt.svg";

const Content = () => {
  return (
    <div className='bg-green h-full w-full md:max-w-[1320px] md:mx-auto md:pt-0 px-[2rem] pt-[7rem] overflow-x-hidden'>
        <div className='grid grid-cols-12'>
            <div className='col-span-6'>
                {/* <div className='flex items-center justify-center'>
                <Image src={logo} width={290} className='w-[7rem]'/>
                </div> */}

                <div>
                    <p className='text-white flex flex-col gap-2 items-start font-dm-sans text-md'>
                        <MapPin/>
                        <span> 215 Isabel Street,
                        Winnipeg, Manitoba R3A 1R5
                        Canada</span>
                        <a href='#' className='link text-blue-600 underline'>view map</a>
                    </p>
                </div>
            </div>
            <div className='col-span-12 md:col-span-6'>
                <div className='flex md:flex-row flex-col justify-between py-10 md:gap-0 gap-5'>
                   <div className='flex flex-row justify-between '>
                     {/* what's new */}
                     <div> 
                        <h2 className='footer-heading'>What's New</h2>
                        <ul className='unordered-styling'>
                            <li className='footer-link'>About MSOI</li>
                            <li className='footer-link'>Meet the advisory board</li>
                            <li className='footer-link'>Partners</li>
                            <li className='footer-link'>Blog</li>
                        </ul>
                    </div>
                    {/* contact us */}
                    <div>
                    <h2 className='footer-heading'>Contact us</h2>
                        <ul className='unordered-styling'>
                            <li className='footer-link'>Admin</li>
                            <li className='footer-link'>support</li>
                            <li className='footer-link'>Partners</li>
                        </ul>
                    </div>
                   </div>

                    {/* socials */}
                    <div>
                        <h2 className='footer-heading'>Follow us</h2>
                        <ul className='unordered-styling'>
                            <li className='footer-link'>
                                <span><Facebook /></span>
                                <span>Facebook</span>
                            </li>
                            <li className='footer-link'>
                            <span><Linkedin/></span>
                            <span>Linkedin</span>
                            </li>
                            <li className='footer-link'>
                                <span><Twitter/></span>
                                <span>Twitter</span>
                            </li>
                            <li className='footer-link'>
                                <span><Youtube/></span>
                                <span>Youtube</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex md:flex-row flex-col  justify-between md:justify-between w-full h-[100px] md:py-0 pt-5 md:items-center border-t-2'>
            <div className="overflow-x-hidden text-white font-dm-sans tracking-[1px] font-[200] md:text-[10px] text-[9px]">Copyrights © 2025 <br className='md:hidden block'/> All Rights Reserved by MSOI Inc.</div>
            <div className='underline text-white font-dm-sans tracking-[1px] font-[200] md:text-[10px] text-[9px]'>Privacy policy</div>
        </div>
    </div>
  )
}

export default Content