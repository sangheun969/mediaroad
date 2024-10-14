import React from "react";
import Image from "next/image";
import { media1, media2 } from "@/images/sample";

const ComIntro: React.FC = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="flex justify-center items-center w-full h-full border gap-[200px]">
        <div>
          <Image src={media1} alt="photo1" className="w-[600px] h-[400px]" />
        </div>
        <div>
          <Image src={media2} alt="photo2" className="w-[600px] h-[600px]" />
        </div>
      </div>
    </div> 
  );
};

export default ComIntro;
