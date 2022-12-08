import "../styles/index.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { ThemeProvider } from "next-themes";

import { NextPageWithLayout } from "@/types/page";
import constants from "@/utils/constants";
import useHydrationMismatch from "@/hooks/useHydrationMismatch";

type Props = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout || Fragment;
  const { showChild } = useHydrationMismatch();

  if (!showChild) {
    return <div>Loading render</div>;
  }
  return (
    <ThemeProvider attribute='class' defaultTheme={constants.THEME}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </ThemeProvider>
  );
}

export default MyApp;
