"use client";

import {
  House,
  GraduationCap,
  Languages,
  BriefcaseBusiness,
  HeartPulse,
  Handshake,
} from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { useRef, useEffect, useState } from "react";
import StrategyCard from "./StrategyCard";

import education from "../assets/education.webp";
import consultation from "../assets/consultation.webp";
import housing from "../assets/housing.webp";
import jobOffer from "../assets/job-offer.webp";
import language from "../assets/language.webp";
import community from "../assets/community.webp";

const cardData = [
  [
    {
      heading: "Housing Assistance",
      description: "Finding safe and affordable housing to help you feel secure and at home.",
      id: "housing",
      icon: <House />,
      img: education,
    },
    {
      heading: "Education Opportunities",
      description: "Connecting you to schools, workshops, and mentorship programs to enhance your skills and knowledge.",
      id: "education",
      icon: <GraduationCap />,
      img: jobOffer,
    },
    {
      heading: "Language Training",
      description: "Offering ESL classes and conversation groups to help you communicate confidently.",
      id: "language",
      icon: <Languages />,
      img: language,
    },
    {
      heading: "Employment Support",
      description: "Resume building, job search guidance, and professional networking opportunities to kickstart your career.",
      id: "employment",
      icon: <BriefcaseBusiness />,
      img: jobOffer,
    },
    {
      heading: "Healthcare Guidance",
      description: "Helping you navigate Canada’s healthcare system to ensure your family’s well-being.",
      id: "healthcare",
      icon: <HeartPulse />,
      img: consultation,
    },
    {
      heading: "Community Engagement",
      description: "Workshops, cultural celebrations, and events to help you feel connected and included.",
      id: "community",
      icon: <Handshake />,
      img: community,
    },
  ],
];

function Strategy() {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start 70vh", "end end"],
  });

  useEffect(() => {
    scrollY.on("change", (latest) => {
      console.log(`Scroll Position: ${latest}`);
    });
  }, [scrollY]);

  const scale = useTransform(scrollY, [0, 1540], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 6640], [1, 0]);

  // Animating the width of the pseudo-line
  const lineWidth = useTransform(scrollY, [0, 1000], ["0%", "100%"]);

  return (
    <section
      ref={targetRef}
      className="flex flex-col h-full w-full items-center justify-center py-[2rem] md:py-[10rem]"
      style={{
        background: `linear-gradient(#080f0a83, #142a1a66), url("/ProjectCoverLarge2.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center overflow-clip max-w-[1376px] mx-auto">
        {/* Text Wrapper */}
        <motion.div
          className="md:h-[400px] h-[200px] sticky top-[5rem] w-full flex items-center"
          style={{ scale, opacity }}
        >
          <h1 className="w-full uppercase text-white flex flex-col items-center justify-center font-lato">
            <span className="text-[10px] tracking-[.2rem]"> how we are making a </span>
            <span className="text-[40px] tracking-[.2rem]">difference</span>
            <div className="w-2/5 h-[10px] bg-white rounded-xl"></div>
          </h1>
        </motion.div>

        {/* Cards Animation */}
        {cardData[0].map((cardItem, i) => (
          <motion.div
            key={cardItem.id}
            className="flex flex-col h-[500px] bg-white w-4/5 mb-10 p-10 rounded-2xl sticky top-[9rem]"
          >
            <StrategyCard
              cardHeading={cardItem.heading}
              cardDescription={cardItem.description}
              cardIcon={cardItem.icon}
              cardImages={cardItem.img}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Strategy;
