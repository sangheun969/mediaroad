import React from "react";
import VideoIntro1 from "../organisms/VideoIntro1";

const ComVideo: React.FC = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
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
        <VideoIntro1 />
      </div>
    </div>
  );
};

export default ComVideo;
