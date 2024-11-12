import React from "react";
import TextHeaders from "../atoms/TextHeaders";
import TextBodys from "../atoms/TextBodys";

const SlideData2: React.FC = () => {
  return (
    <div className="border flex flex-col w-[300px] h-[400px] p-3 gap-3 rounded-md">
      <TextHeaders>
        시청각장애인 등 방송소외계층의 미디어 접근성 제고방안 연구
      </TextHeaders>
      <TextBodys>미디어 전략 연구소</TextBodys>
      <TextBodys>방송통신위원회</TextBodys>
      <div>
        <TextBodys>2010-04~2010-11</TextBodys>
      </div>
    </div>
  );
};

export default SlideData2;
