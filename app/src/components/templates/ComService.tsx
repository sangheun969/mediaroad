import React from "react";
import Link from "next/link";
import ServiceSlide from "../organisms/ServiceSlide";

const ComService: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <ServiceSlide />
    </div>
  );
};

export default ComService;
