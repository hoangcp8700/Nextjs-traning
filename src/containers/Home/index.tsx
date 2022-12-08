import type { NextPage } from "next";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

import Icon, { IconName } from "@/components/atoms/Icon";
import NextImage from "@/components/atoms/Image";
import SEO from "@/components/common/SEO";
import Link from "@/components/atoms/Link";
import ICON_LISTS from "@/components/atoms/Icon/constants";
import Button from "@/components/atoms/Button";

import styles from "./index.module.css";

export interface HomeContainerProps {}

const listIcon = Object.keys(ICON_LISTS).map((item) => item as IconName);

const Home: NextPage<HomeContainerProps> = () => {
  const { theme, setTheme } = useTheme();

  const renderSwitchTheme = useCallback(
    () => (
      <Button variants='primary' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme} Mode
      </Button>
    ),
    [setTheme, theme],
  );

  return (
    <div className={styles.container}>
      <SEO
        title='Home Page'
        description='Home page Lorem'
        keyword='home home home'
        imgSrc='https://source.unsplash.com/random'
        themeColor='#f9f'
      />

      <section className={styles.main}>
        <div className='prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark'>
          <h1>
            Welcome to <Link href={`https://nextjs.org${"abc"}`}>Next.js!</Link>
          </h1>
        </div>
        <div className='flex'>
          {listIcon.map((item, index) => (
            <div key={`icon-${index.toString()}`} style={{ marginLeft: 7 }}>
              <Icon iconName={item} size={32} />
            </div>
          ))}
        </div>
        <div className='p-10 bg-gray-500 dark:bg-blue-500'>
          <h1 className='dark:text-red-700'>THEME MODE: ${theme}</h1>
          {renderSwitchTheme()}
        </div>

        <div>
          <NextImage
            src='https://source.unsplash.com/random'
            alt='alt'
            width={300}
            height={400}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
          />
        </div>

        <div>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </div>
        <div className={styles.grid}>
          <Link href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
          </Link>

          <Link href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
          </Link>

          <Link
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
          </Link>

          <Link
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
