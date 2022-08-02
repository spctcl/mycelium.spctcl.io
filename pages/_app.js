import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import { globalStyles } from '../styles/normalize';
import { LightTheme } from '../styles/theme/';
import createEmotionCache from '../utils/createEmotionCache';
const clientSideEmotionCache = createEmotionCache();


// var client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  globalStyles();
  return (
    <CacheProvider value={emotionCache}>
      <NextUIProvider theme={LightTheme}>
        <CssBaseline />
        <Nav />
        {/* <div className='content-container' style={{ marginTop: '100px' }}> */}
        <Component css={{}}{...pageProps} />
        {/* </div> */}
        <Footer />
      </NextUIProvider>
    </CacheProvider>
  );
};

export default MyApp;
