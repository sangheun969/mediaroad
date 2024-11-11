import React from "react";
import TextHeaders from "../atoms/TextHeaders";
import TextBodys from "../atoms/TextBodys";

const SlideData: React.FC = () => {
  return (
    <div className="border flex flex-col w-[300px] h-[400px]">
      <TextHeaders>
        미디어 융합 환경에서 문화다양성의 의미 변화와 전망
      </TextHeaders>
      <TextBodys>미디어 전략 연구소</TextBodys>
      <TextBodys>정보통신정책연구원</TextBodys>
      <div>
        <TextBodys>2010-04~2010-10</TextBodys>
      </div>
    </div>
  );
};

export default SlideData;
