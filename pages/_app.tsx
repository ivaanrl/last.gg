import { ThemeProvider, Preflight } from '@xstyled/styled-components';
import { Navbar } from '../components';
import { theme, GlobalStyle } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
