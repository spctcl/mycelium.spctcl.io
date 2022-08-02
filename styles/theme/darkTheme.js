import { createTheme } from '@nextui-org/react';
import * as Theme from './settings';

const darkColors = {
  background: '#1d1d1d',
  text: '#fff',
  myDarkColor: '#ff4ecd',
  primaryLight: '$blue200',
  primaryLightHover: '$blue300', // commonly used on hover state
  primaryLightActive: '$blue400', // commonly used on pressed state
  primaryLightContrast: '$blue600', // commonly used for text inside the component
  primary: '$blue600',
  primaryBorder: '$blue500',
  primaryBorderHover: '$blue600',
  primarySolidHover: '$blue700',
  primarySolidContrast: '$white', // commonly used for text inside the component
  primaryShadow: '$blue500'
}

const DarkTheme = createTheme({
  type: 'dark',
  colors: { ...Theme.colors, ...darkColors },
  borderWeights: Theme.borderWeights,
  breakpoints: Theme.breakpoints,
  dropShadows: Theme.dropShadows,
  fonts: Theme.fonts,
  fontSizes: Theme.fontSizes,
  fontWeights: Theme.fontWeights,
  letterSpacings: Theme.letterSpacings,
  lineHeights: Theme.lineHeights,
  radii: Theme.radii,
  shadows: Theme.shadows,
  space: Theme.space,
})

export default DarkTheme;
