import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { defaultMeta, favicons } from "@/assets/dummyData/SEO";

const SEO: React.FC<SEOType> = ({
  title,
  description,
  keyword,
  siteName,
  imgSrc,
  robots,
  themeColor,
  type,
}) => {
  const router = useRouter();

  const meta = useMemo(
    () => ({
      title: title || defaultMeta.title,
      siteName: siteName || title || defaultMeta.title,
      description: description || defaultMeta.description,
      keyword: keyword || defaultMeta.keyword,
      image: imgSrc || defaultMeta.imgSrc,
      url: `${defaultMeta.url}${router.asPath}`,
      robots: robots || defaultMeta.robots,
      type: type || defaultMeta.type,
      themeColor: themeColor || defaultMeta.themeColor,
    }),
    [title, siteName, description, keyword, imgSrc, robots, type, themeColor, router],
  );
  return (
    <Head>
      {/* Main */}
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta name='description' content={meta?.description} />
      <meta name='keywords' content={meta?.keyword} />
      <meta property='og:url' content={meta.url} />
      <link rel='canonical' href={meta.url} />

      {/* Twitter */}
      <meta name='twitter:title' content={meta?.title} />
      <meta name='twitter:description' content={meta?.description} />
      <meta name='twitter:image' content={meta?.image} />

      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      <meta property='og:url' content={meta.url} />

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content={meta.themeColor} />
    </Head>
  );
};

export default SEO;
