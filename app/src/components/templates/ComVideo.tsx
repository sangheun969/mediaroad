"use client";

import React, { useState } from "react";
import VideoIntro1 from "../organisms/VideoIntro1";

const ComVideo: React.FC = () => {
  const [translateY, setTranslateY] = useState(0);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const deltaY = e.deltaY;
    setTranslateY((prev) => {
      const newTranslateY = prev + deltaY * 0.1;
      return Math.max(-50, Math.min(50, newTranslateY)); // -50%에서 50% 사이로 제한
    });
  };
  return (
    <div
      className="relative w-full h-full flex justify-center items-center"
      onWheel={handleWheel}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/videos/BgVideo3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <VideoIntro1 translateY={translateY} />
      </div>
    </div>
  );
};

export default ComVideo;
