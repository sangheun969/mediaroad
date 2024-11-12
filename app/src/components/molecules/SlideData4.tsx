import React from "react";
import TextHeaders from "../atoms/TextHeaders";
import TextBodys from "../atoms/TextBodys";

const SlideData4: React.FC = () => {
  return (
    <div className="border flex flex-col w-[300px] h-[400px] p-3 gap-3 rounded-md">
      <TextHeaders>정부의 위기극복을 위한 PR에 관한 연구</TextHeaders>
      <TextBodys>미디어 전략 연구소</TextBodys>
      <TextBodys>행정연구원</TextBodys>
      <div>
        <TextBodys>2009-05~2009-11</TextBodys>
      </div>
    </div>
  );
};

export default SlideData4;
