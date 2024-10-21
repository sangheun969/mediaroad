import React from "react";

interface TextBodys {
  children: string;
}

const TextBodys: React.FC<TextBodys> = ({ children }) => {
  return <p className="font-noto">{children}</p>;
};

export default TextBodys;
