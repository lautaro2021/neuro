import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
    font-family: Proxima Nova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scroll-behavior: auto !important;
    @font-face {
    font-family: 'ProximaNova';
    src: local('ProximaNova'),
    url('src/public/assets/Proxima-nova.otf') format('truetype');
  }
   overflow-x: hidden;
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
