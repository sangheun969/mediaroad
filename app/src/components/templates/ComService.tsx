import React from "react";
import Link from "next/link";

const ComService: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex flex-row justify-center items-center ">
      <Link href="" className="p-[100px] bg-[#DC7878]">
        영상 콘텐트 기획/제작
      </Link>
      <Link href="" className="p-[100px] bg-[#405d9a]">
        프로모션 콘텐트 기획/제작
      </Link>
    </div>
  );
};

export default ComService;
