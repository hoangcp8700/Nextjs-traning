import React from "react";

interface TextProps {
  type?: "p" | "span" | "div";
  content?: string;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ type = "p", content, children }) => {
  const Element = type;
  return content ? (
    <Element dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <Element>{children}</Element>
  );
};

export default Text;
