"use client";

import React from "react";
import { motion } from "framer-motion";

const MediaIntro: React.FC = () => {
  return (
    <div className="w-[70%] font-noto text-[35px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 3,
          y: { duration: 1.5 },
        }}
      >
        <p className="h-[100vh] flex items-center">
          21세기 현대 사회(Convergence) 혹은 통섭의 사회(consilience society)라
          말합니다. 다양한 사회적 분야와 학문적 영역들이 융합하고, 상호 교류
          하면서 새로운 창의성이 발현되고 또 다른 차원의 발전을 이루게 됩니다.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 3,
          y: { duration: 1.5 },
        }}
      >
        <p className="h-[100vh] items-center">
          저희 미디어 로드는 열린 마음으로 인문학에서부터 자연과학에 이르기까지
          다양한 지식의 영역들을 수용하고 새로운 창의성을 구현하는 정신을
          기본으로 합니다.
        </p>
      </motion.div>
    </div>
  );
};

export default MediaIntro;
