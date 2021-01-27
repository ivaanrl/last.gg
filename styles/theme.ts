import { createGlobalStyle, defaultTheme } from '@xstyled/styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Object Sans' ;
    src: url('/fonts/ObjectSans/ObjectSans-Regular.otf') format('opentype');
    font-weight:400
  }

  @font-face {
    font-family: 'Pangram Sans' ;
    src: url('/fonts/PangramSans/Pangram-Regular.otf') format('opentype');
    font-weight:400
  }

  @font-face {
    font-family: 'Pangram Sans' ;
    src: url('/fonts/PangramSans/Pangram-Black.otf') format('opentype');
    font-weight:900
  }

  @font-face {
    font-family: 'Pangram Sans' ;
    src: url('/fonts/PangramSans/Pangram-Bold.otf') format('opentype');
    font-weight:700
  }

  @font-face {
    font-family: 'Pangram Sans' ;
    src: url('/fonts/PangramSans/Pangram-ExtraLight.otf') format('opentype');
    font-weight:700
  }

  body{
    font-family:'Pangram Sans';
    background-color:rgba(20,30,44,1);
    color:white;
  }
`;

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: 'rgba(20,30,44,1)',
    primaryOpaque: 'rgba(30,41,57,1)',
    primaryOpaqueDark: '#182332',
    secondary: 'rgba(252,223,0,1)',
    secondaryOpaque: '#424523',
    greyOutline: 'rgba(50,62,80,1)',
    secondaryText: 'rgba(140,155,176,1)',
    primaryText: 'rgba(255,255,255,1)',
    tertiary: '#FF5188',
  },
  fonts: {
    fonts: {},
  },
  breakpoints: {
    med: 768,
    lar: 1024,
  },
};
