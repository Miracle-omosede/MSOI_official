"use client";

import React, { useEffect } from "react";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "motion/react";
import { HandCoins } from "lucide-react";

const Hero = () => {
  const [titleScope, titleAnimate] = useAnimate();

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines, words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      { transform: "translateY(0)" },
      {
        duration: 0.5,
        delay: stagger(0.3),
      }
    );
  }, []);

  return (
    <section className="md:h-[calc(90vh-4rem)] w-full bg-white overflow-hidden relative">
      <div
        className="h-full w-full flex items-end relative object-cover"
        style={{
          background: `linear-gradient(#080f0aca, #142a1a66), url("/img1.webp")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full items-center justify-center py-[7rem] z-[999]">
          <div className="banner-text max-w-[1376px] mx-auto flex flex-col gap-[.8rem] leading-none md:py-0 py-5 px-10">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="title font-lato uppercase font-[400] tracking-[1px] md:text-[52px] text-[45px] text-white"
              ref={titleScope}
            >
              Empowering Newcomers to Thrive in Canada
            </motion.h1>
            <p className="md:text-[20px] leading-tight font-[400] tracking-[.4px] font-dm-sans text-white md:w-[600px] w-[300px] text-[16px]">
              Providing resources, support, and a community that welcomes you
              with open arms.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col items-start justify-start md:flex-row gap-[2rem] py-5">
              <motion.a
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
                href="#"
                className="border flex border-light bg-light uppercase text-white font-lato font-bold py-[16px] px-[32px] hover:text-light md:text-[15px] text-[13px] tracking-[2.5px] hover:border-light hover:bg-white transition-all delay-75 items-center justify-center"
              >
                <HandCoins/>
                &nbsp;
                <span>donate</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
                href="#"
                className="border border-white bg-white uppercase text-light font-lato font-bold py-[20px] px-[32px] hover:text-white md:text-[15px] text-[13px] tracking-[2.5px] hover:border-light hover:bg-light transition-all delay-75"
              >
                <span>get support today.</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
