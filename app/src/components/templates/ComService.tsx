import React from "react";
import Link from "next/link";
import ServiceSlide from "../organisms/ServiceSlide";

const ComService: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-[100px]">
      <p className="text-6xl">Research achievements</p>
      <ServiceSlide />
    </div>
  );
};

export default ComService;
