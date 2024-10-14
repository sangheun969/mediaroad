"use client";

import React, { useState } from "react";
import Image from "next/image";
import { potatoImg, filmImg, teamImg } from "@/images/sample";

const VideoIntro1: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <div className="flex flex-col justify-around my-9">
      <div className="my-10">
        <p className="text-white flex flex-row justify-center font-bold">
          Scroll to Discover
        </p>
      </div>
      <video className="w-[1200px]" controls>
        <source src="/videos/media2.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-row gap-5 w-full h-full">
        <div className="flex flex-col w-[500px] justify-center items-center">
          <h1 className="text-white font-bold text-[50px]">About</h1>
          <p className="text-white text-[20px]">
            AI, 블록체인, 빅데이터, 플랫폼 기반 산업 체계의 변화, 이미지와 영상
            기 반 디지털 콘텐츠 생산과 소비 시대를 맞아 이용자와 소비자 중심의
            다양한 디지털 IT 서 비스를 제공
          </p>
        </div>
        <div className="flex flex-col justify-center items-center font-jua text-white font-bold text-[22px] w-[700px] h-full gap-6">
          <div className="border rounded-br-2xl w-[750px] h-[450px] relative">
            <Image
              src={potatoImg}
              alt="photo1"
              className="w-full h-full opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="p-4">
                미디어로드의 사업 분야는 IT 서비스와 디지털 미디어 영상 콘텐츠
                서비스 분야입니다. IT분야에서는 Iot(사물인터넷) 기반 스마트
                도시농업 및 반려식물 생장 시스템 구축, 파이썬 및 R 프로그램 기반
                빅데이터 분석 서비스 등을 제공합니다.
              </p>
            </div>
          </div>

          <div className="border rounded-br-2xl w-[750px] h-[450px] relative">
            <Image
              src={filmImg}
              alt="photo1"
              className="w-full h-full opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="p-4">
                디지털 미디어 이미지 및 영상 콘텐츠 서비스는 다양한 홍보 영상,
                스토리텔링 기반, 픽션, 영상 및 영화 등의 제작 서비스를
                제공합니다.
              </p>
            </div>
          </div>
          <div className="border rounded-br-2xl w-[750px] h-[450px] relative">
            <Image
              src={teamImg}
              alt="photo1"
              className="w-full h-full opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="p-4">
                디지털 융합 시대에는 IT기술, 소프트웨어, 이미지 및 영상 콘텐츠가
                상호 기술적으로 연결되고 생산 되면서 산업 구조를 형성하고
                있습니다. 따라서 미디어로드의 사업은 이러한 시대 변화에
                부응하고, 선도하면서 많은 젊은 인재들이 공동생산(coproduction),
                공유 (coownership), 참여(involvement)의 기회를 함께 만들어 내고
                사회에 기여하는 활동을 지향하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro1;
