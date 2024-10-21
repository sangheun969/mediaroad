import React from "react";

interface TextHeaderProps {
  children: string;
}

const TextHeaders: React.FC<TextHeaderProps> = ({ children }) => {
  return <p className="text-2xl font-noto">{children}</p>;
};

export default TextHeaders;
