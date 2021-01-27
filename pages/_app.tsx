import { ThemeProvider, Preflight } from '@xstyled/styled-components';
import { Footer, Navbar } from '../components';
import { theme, GlobalStyle } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
