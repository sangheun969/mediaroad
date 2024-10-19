import React from "react";
import { motion } from "framer-motion";

const MediaVideo: React.FC = () => {
  return (
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
      <video className="w-[1200px] my-8" controls>
        <source src="/videos/media2.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default MediaVideo;
