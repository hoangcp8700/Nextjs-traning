import React from "react";

interface HeadingProps {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content?: string;
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ type = "h2", children, content }) => {
  const Element = type;
  return content ? (
    <Element dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <Element>{children}</Element>
  );
};

export default Heading;
