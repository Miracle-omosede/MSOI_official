import Image from "next/image";
import React from "react";
import education from "../assets/education.webp";
import {
  House,
  GraduationCap,
  Languages,
  BriefcaseBusiness,
  HeartPulse,
  Handshake,
} from "lucide-react";

const StrategyCard = ({ cardHeading, cardDescription, cardIcon, cardImages, id }) => {
  return (
    <div className="grid grid-cols-12 h-full relative font-lato">
      <div className="md:col-span-6 col-span-12">
        <div key={id} className="flex md:flex-row flex-col gap-5">
          <div className="bg-[#f3f3f3] rounded-xl w-14 h-14 p-4 flex items-center justify-center">{cardIcon}</div>

          <div>
          <h1 className="md:text-[17px] text-[12px]">{cardHeading}</h1>
          <p className="md:text-[2rem] text-[1.2rem] md:w-4/5">{cardDescription}</p>
          </div>
        </div>       
      </div>

      <div className="md:col-span-6 col-span-12 md:p-10 p-0 h-full">
            <div className="w-full h-full flex items-center justify-center bg-[#f2f2f2] rounded-2xl relative">
                <Image src={cardImages} className="rounded-2xl object-cover h-full w-full"/>
            </div>
        </div>
    </div>
  );
};

export default StrategyCard;
