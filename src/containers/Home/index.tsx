import type { NextPage } from "next";

import Icon, { IconName } from "@/components/atoms/Icon";
import NextImage from "@/components/atoms/Image";
import SEO from "@/components/common/SEO";
import Link from "@/components/atoms/Link";
import ICON_LISTS from "@/components/atoms/Icon/constants";

import styles from "./index.module.css";

export interface HomeContainerProps {}

const listIcon = Object.keys(ICON_LISTS).map((item) => item as IconName);

const Home: NextPage<HomeContainerProps> = () => (
  <div className={styles.container}>
    <SEO
      title='Home Page'
      description='Home page Lorem'
      keyword='home home home'
      imgSrc='https://source.unsplash.com/random'
      themeColor='#f9f'
    />

    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href={`https://nextjs.org${"abc"}`}>Next.js!</a>
      </h1>
      {listIcon.map((item, index) => (
        <div key={`icon-${index.toString()}`} style={{ marginLeft: 7 }}>
          <Icon iconName={item} size={32} />
        </div>
      ))}

      <NextImage
        src='https://source.unsplash.com/random'
        alt='alt'
        width={300}
        height={400}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
      />

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/index.tsx</code>
      </p>
      <div className={styles.grid}>
        <Link href='https://nextjs.org/docs' className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>

        <Link href='https://nextjs.org/learn' className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Link>

        <Link href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </Link>

        <Link
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
