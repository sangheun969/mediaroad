import React from "react";
import Image from "next/image";
import MediaIntro from "../organisms/MediaIntro";
import { media1, media2 } from "@/images/sample";

const ComIntro: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center border">
      <MediaIntro />
    </div>
  );
};

export default ComIntro;
