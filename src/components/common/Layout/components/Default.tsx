import React from "react";

interface LayoutDefaultProps {
  children?: React.ReactNode;
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => (
  <>
    <header>Header default</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default LayoutDefault;
