import constants from "@/utils/constants";

export const favicons: Array<React.ComponentPropsWithoutRef<"link">> = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  { rel: "manifest", href: "/favicon/site.webmanifest" },
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#00e887",
  },
  { rel: "shortcut icon", href: "/favicon/favicon.ico" },
];

export const defaultMeta = {
  title: "Next.js + Tailwind CSS + TypeScript Starter",
  siteName: "Next.js + Tailwind CSS + TypeScript Starter",
  description:
    "A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky",
  keyword: "NextJS, Typescript, Tailwindcss",
  url: constants.DOMAIN_CLIENT || "https://tsnext-tw.thcl.dev",
  type: "website",
  robots: "follow, index",
  imgSrc: "https://tsnext-tw.thcl.dev/images/large-og.png",
  themeColor: "#ffffff",
};
