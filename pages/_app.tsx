import "react-notion/src/styles.css";
import "tailwindcss/tailwind.css";
import splitbee from "@splitbee/web";
import { Analytics } from "@vercel/analytics/react";
import { setup } from "goober";
import { prefix } from "goober-autoprefixer";
import AppLayout from "../layouts/app-layout";

import "../styles.css";
import "../public/prism.css";
import React, { useEffect } from "react";

setup(React.createElement, prefix);

export default function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    splitbee.init({
      apiUrl: "/sb-api",
      scriptUrl: "/sb.js",
    });
  }, []);

  const getLayout =
    Component?.getLayout ||
    ((page: React.ReactNode) => <AppLayout>{page}</AppLayout>);

  return getLayout(
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
