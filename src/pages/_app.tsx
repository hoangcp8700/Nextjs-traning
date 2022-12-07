import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";

import { NextPageWithLayout } from "@/types/page";

type Props = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout || Fragment;

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}

export default MyApp;
