import React from "react";
import Image from "next/image";
import { banner2 } from "@/images/BannerImg";

const Banner: React.FC = () => {
  return (
    <div className="w-full">
      <Image src={banner2} alt="photo" className="w-full h-[100vh]" />
    </div>
  );
};

export default Banner;
