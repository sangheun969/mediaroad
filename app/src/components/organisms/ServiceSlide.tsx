"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideData from "../molecules/SlideData";
import SlideData2 from "../molecules/SlideData2";
import SlideData3 from "../molecules/SlideData3";
import SlideData4 from "../molecules/SlideData4";

const ServiceSlide: React.FC = () => {
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);

  const boxVariants = {
    entry: (back: boolean) => ({
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: (back: boolean) => ({
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5 },
    }),
  };
  return (
    <div>
      <SlideData />
      <SlideData2 />
      <SlideData3 />
      <SlideData4 />
    </div>
  );
};

export default ServiceSlide;
