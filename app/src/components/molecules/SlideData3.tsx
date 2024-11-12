import React from "react";
import TextHeaders from "../atoms/TextHeaders";
import TextBodys from "../atoms/TextBodys";

const SlideData3: React.FC = () => {
  return (
    <div className="border flex flex-col w-[300px] h-[400px] p-3 gap-3 rounded-md">
      <TextHeaders>
        방송통신융합 환경에서 방송소외계층 범주 및 권익 개선방안 연구
      </TextHeaders>
      <TextBodys>미디어전약연구소</TextBodys>
      <TextBodys>한국전파진흥원</TextBodys>
      <div>
        <TextBodys>2010-04~2010-09</TextBodys>
      </div>
    </div>
  );
};

export default SlideData3;
