import React from "react";
import MediaVideo from "../organisms/MediaVideo";

const ComVideo2: React.FC = () => {
  return (
    <div className="w-full h-[100vh] bg-black flex flex-col justify-center items-center">
      <div className="py-6">
        <p className="text-white flex flex-row justify-center font-bold">
          Scroll to Discover
        </p>
      </div>
      <MediaVideo />
    </div>
  );
};

export default ComVideo2;
