import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};


const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Monument, Helvetica Neue, sans-serif;
    scroll-behavior: auto !important;
    @font-face {
      font-family: 'Monument';
      src: url('assets/PPMonumentExtended-Black.woff');
      font-weight: bold;
    }
    @font-face {
      font-family: 'Monument';
      src: url('assets/PPMonumentExtended-Regular.woff');
      font-weight: 600;
    }
    @font-face {
      font-family: 'Monument';
      src: url('assets/PPMonumentExtended-Light_1.woff');
      font-weight: 200;
    }
    
    background-color: #000;
    background-image: linear-gradient(0, #000000 50%, #0D0D0D 50%);
    background-size: 4px 4px;
    /* background: rgb(0,17,22);
    background: linear-gradient(90deg, rgba(0,17,22,1) 0%, rgba(0,9,18,1) 100%); */
    overflow-x: hidden;
  }
  body::-webkit-scrollbar{
    width: 0px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

`;

export default function App({ Component, pageProps }: AppProps) {
  const [focus, setFocus] = useState(true);

  useEffect(() => {
    let previousTitle = document.title;

    window.addEventListener('blur', () => {
      previousTitle = document.title;
      document.title = 'Are you sure you want to leave?'
      setFocus(false);
    })

    window.addEventListener('focus', () => {
      document.title = previousTitle;
      setFocus(true);
    })

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, [focus])

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, [])

  return (
    <>
    <Head>
    <title>Neuro - Creative Studio</title>
    <meta name="description" content="Neuro Digital Studio" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
