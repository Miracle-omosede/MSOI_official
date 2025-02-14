"use client"
import {useRef } from "react";
import Image from "next/image";
import mapleLeaf from "../assets/MARPLE LEAVE left.png"
import { ArrowRight, ChevronRight, Heart, MoveUpRight, Sparkle } from "lucide-react";
import kindness  from "../../../public/kindness-white.png"
import  solidarity  from "../../../public/solidarity-white.png"
import charity  from "../../../public/charity-white.png"
import { useScroll, useTransform, motion } from "motion/react";
import react from "react";


const HeroAbt = () => {
     const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Moves text HORIZONTALLY as user scrolls
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    const phrase = `Migrants and diaspora communities are recognized for their
                invaluable role in society due to their rich cultural
                contributions, diverse voices, and their economic contributions to
                the countries they live in and come from, including philanthropy,
                entrepreneurship, and innovations. iDiaspora provides a platform
                to share your voice, to gain knowledge, and to engage with the
                global community committed to the importance of diaspora`
  
    return (
      <section className="relative" id="intro">
          {/* <div className="absolute left-0 md:top-[30%] top-[10%] z-[-1] opacity-20" >
              <Image src={mapleLeaf} alt="maple-leaf" />
          </div> */}
        <div className="grid md:grid-cols-2 md:max-w-[1376px] mx-auto md:py-[4rem] py-[2rem] md:gap-[8rem]">
          <div className="flex flex-col gap-4 relative px-5 md:px-0">
            <div className="flex flex-col gap-5 relative">
              <h2 className="uppercase text-light font-bold font-lato tracking-[2.5px] text-[30px]">
                welcome to msoi.{" "}
              </h2>
              <p className="font-dm-sans text-green/60 md:text-[16px] text-[15px] tracking-tighter font-[400] text-justify pb-[1rem]">
              Manitoba Society of Immigration (MSOI) aims to empower Newcomers by providing comprehensive support and resources that facilitate their successful settlement in Canada.
              </p>

              <h3 className="font-semibold font-lato uppercase text-light tracking-[.1rem]">Mission Statement</h3>
              <p  className="font-dm-sans text-green/60 md:text-[16px] text-[15px] tracking-tighter font-[400] text-justify pb-[1rem]">
              MSOI mission is to foster social inclusion by offering access to essential services, including housing, education, healthcare, seminars language training, workshop and employment opportunities. Through collaboration with community partners and advocacy, we aim to create an environment where individuals and families can thrive, achieve self-sufficiency, and fully participate in their new society.
              </p>

              <h3  className="font-semibold font-lato uppercase text-light tracking-[.1rem]">Goal</h3>
              <p  className="font-dm-sans text-green/60 md:text-[16px] text-[15px] tracking-tighter font-[400] text-justify pb-[1rem]">
              MSOI seek to create a society where every Newcomers feels welcomed, supported, and empowered to achieve their full potential.
              </p>
            </div>

           
          </div>
          <div className="relative z-[9999]"  ref={sectionRef}>
          <div className="bg-green md:h-[550px] relative md:w-[95%] md:absolute md:top-[-40%]  gap-[1rem] p-[4rem] flex flex-col items-center justify-center font-lato shadow-xl  ">
            <div></div>
                
                <div className="flex items-center justify-between group/card-item relative cursor-pointer isolate w-full py-[1rem]">
                    <div className="flex md:flex-col gap-7  md:items-start md:justify-start items-center justify-center">
                        <Image src={kindness} className="w-[50px] h-[px]" />
                        <div className="gap-[.8rem] flex flex-col">
                        <h2 className="text-white uppercase text-[10px] tracking-[1.9px] font-lato md:text-2xl">Donate to us</h2>
                        <p className="tracking-[.4px] font-dm-sans text-left font-[300] md:w-3/4 text-white/75 text-[11px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti error sapiente omnis</p>

                        <button className="flex items-center justify-start uppercase font-lato text-white text-[9px] tracking-[.1rem]">
                            <span>Learn more</span>
                            <ChevronRight className="size-3"/>
                        </button>
                        </div>

                       
                    </div>
                </div>

                
                <hr className="bg-white border-white border w-full"/>

                <div className="flex items-center justify-between group/card-item relative cursor-pointer isolate w-full py-[1rem]">
                    <div className="flex md:flex-col gap-7 md:items-start md:justify-start items-center justify-center">
                        <Image src={charity}  className="w-[50px] h-[px]" />
                        <div className="gap-[.8rem] flex flex-col" >
                        <h2 className="text-white uppercase text-[10px] tracking-[1.9px] font-lato md:text-2xl">Partner with us</h2>
                        <p className="tracking-[.4px] font-dm-sans text-left font-[300] md:w-3/4 text-white/75 text-[11px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti error sapiente omnis</p>
                        <button className="flex items-center justify-start uppercase text-white text-[9px] tracking-[.1rem]">
                            <span>Learn more</span>
                            <ChevronRight className="size-3"/>
                        </button>
                        </div>
                    </div>
                </div>


              {/* <a href="#" className="flex items-center justify-between group/card-item relative cursor-pointer isolate w-full py-[1rem]">
                  <div>
                  <h1 className="text-white uppercase tracking-[2.5px] font-[300] text-[30px]">Volunteer with Us</h1>
                  <p className="text-[15px] font-dm-sans text-white">Share your skills, time, and compassion to help newcomers succeed.</p>
                  </div>
                  <MoveUpRight className="text-white/80 text-[30px] size-[32px]" />
  
                  <div className="absolute w-0 h-[5px] bg-light group-hover/card-item:w-full transition-all duration-500 bottom-0 -z-10"></div>
              </a> */}
  
  
              {/* donate */}
              {/* <a href="#" className="flex items-center justify-between group/card-item relative cursor-pointer isolate w-full py-[1rem]">
                  <div>
                  <h1 className="text-white uppercase tracking-[2.5px] font-[300] text-[30px]">Donate</h1>
                  <p className="text-[15px] font-dm-sans text-white">Your generosity can transform lives by funding essential programs and resources.</p>
                  </div>
                  <MoveUpRight className="text-white/80 text-[30px] size-[32px]" />
  
                  <div className="absolute w-0 h-[5px] bg-light group-hover/card-item:w-full transition-all duration-500 bottom-0 -z-10"></div>
              </a>
              <a href="#" className="flex items-center justify-between group/card-item relative cursor-pointer isolate w-full py-[1rem]">
                  <div>
                  <h1 className="text-white uppercase tracking-[2.5px] font-[300] text-[30px]">Partner with Us</h1>
                  <p className="text-[15px] font-dm-sans text-white">Join us in building a welcoming and thriving community for newcomers.</p>
                  </div>
                  <MoveUpRight className="text-white/80 text-[30px] size-[32px]" />
  
                  <div className="absolute w-0 h-[5px] bg-light group-hover/card-item:w-full transition-all duration-500 bottom-0 -z-10"></div>
              </a> */}
          </div>
          </div>
          
        </div>
        <div className="h-[60px] flex items-center justify-center px-10 bg-light  w-full absolute bottom-0  md:z-[-9999] z-[9999] overflow-x-hidden">
                <motion.div style={{ x }} className="flex flex-row relative justify-center items-center w-full text-white font-lato text-[2rem] tracking-tighter gap-5 text-nowrap">
                <span>Support</span>
                <span><Sparkle/></span>
                <span>See Smile</span>
                <span><Heart/></span>
                <span>Support</span>
                <span><Sparkle/></span>
                <span>Share Love</span>
                <span><Heart /></span>
                <span>Support</span>
                <span><Sparkle/></span>
                <span>Donate</span>
                <span><Sparkle/></span>
                <span>Support</span>
                <span><Heart/></span>
                <span>See Smile</span>
                <span><Sparkle/></span>
                <span>Support</span>
                <span><Heart /></span>
                <span>Share Love</span>
                <span><Sparkle/></span>
                <span>Support</span>
                </motion.div>
            </div>
      </section>
    );
  };

export default HeroAbt