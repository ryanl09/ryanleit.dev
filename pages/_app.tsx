import '@/styles/globals.css'
import { AppProps } from 'next/app';
import { GoogleAnalytics } from "nextjs-google-analytics";
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
