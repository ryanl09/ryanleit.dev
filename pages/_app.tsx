import '@/styles/globals.css'
import { GoogleAnalytics } from "nextjs-google-analytics";
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
