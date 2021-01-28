import { ThemeProvider, Preflight } from '@xstyled/styled-components';
import { Footer } from '../components/molecules';
import { Navbar } from '../components/organisms';
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
