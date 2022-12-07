import Link from "next/link";
import React from "react";

import styles from "../index.module.css";

interface LayoutPrimaryProps {
  children?: React.ReactNode;
}
const LayoutPrimary: React.FC<LayoutPrimaryProps> = ({ children }) => (
  <>
    <header>Header primary</header>
    <main>{children}</main>
    <footer className={styles.footer}>
      <Link
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{" "}
      </Link>
    </footer>
  </>
);

export default LayoutPrimary;
