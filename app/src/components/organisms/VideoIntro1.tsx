import React from "react";

const VideoIntro1: React.FC = () => {
  return (
    <div className="w-[1500px] flex flex-row justify-around border">
      <video className="w-[700px]" controls>
        <source src="/videos/media2.mp4" type="video/mp4" />
      </video>
      <div>
        <p>
          미디어로드 사업 분야 미디어로드는 AI, 블록체인, 빅데이터, 플랫폼 기반
        </p>
        <p>
          산업 체계의 변화, 이미지와 영상 기 반 디지털 콘텐츠 생산과 소비 시대를
        </p>
        <p>맞아 이용자와 소비자 중심의 다양한 디지털 IT 서 비스를 제공하는</p>
        <p>
          기업입니다. 미디어로드의 사업 분야는 IT 서비스와 디지털 미디어 영상
        </p>
        <p>
          콘텐츠 서비스 분야입니다. IT분야에서는 Iot(사물인터넷) 기반 스마트
        </p>
        <p>도시농업 및 반려식물 생장 시스템 구축, 파이 썬 및 R 프로그램 기반</p>
        <p>
          빅데이터 분석 서비스 등을 제공합니다. 디지털 미디어 이미지 및 영상
        </p>
        <p>
          콘텐츠 서비스는 다양한 홍보 영상, 스토리텔링 기반 픽션 영상 및 영화
          등의
        </p>
        <p>
          제작 서 비스를 제공합니다. 디지털 융합 시대에는 IT기술, 소프트웨어,
        </p>
        <p>
          이미지 및 영상 콘텐츠가 상호 기술적으로 연 결되고 생산 되면서 산업
        </p>
        <p>
          구조를 형성하고 있습니다. 따라서 미디어로드의 사업은 이러한 시대
          변화에
        </p>
        <p>
          부응하고, 선도하면서 많은 젊은 인재들이 공동생산(coproduction), 공유
        </p>
        <p>(coownership), 참여(involvement)의 기회를 함께 만들어 내고 사회에</p>
        <p>기여하는 활 동을 지향하고 있습니다.</p>
      </div>
    </div>
  );
};

export default VideoIntro1;
