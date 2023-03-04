import Head from 'next/head';
import { useEffect } from 'react';
import '../src/styles/globals.scss'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {


  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Jimmie Swaggthorne Template</title>
        <meta name="description" content="Chicago Based Interdisciplinary performance artist specializing in Burlesque" />
        <link rel="manifest" crossOrigin="use-credentials" href="/manifest.webmanifest" />
        <meta content="/social.png" name="og:image" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
