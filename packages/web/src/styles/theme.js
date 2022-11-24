import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      gray_100: '#F5f6f8',
      gray_200: '#e0e5e9',
      gray_300: '#c8cdd1',
      gray_800: '#5f7280',
      blue_100: '#B5CDDE',
      blue_300: '#77A1BD',
      blue_500: '#00bcd5',
      blue_800: '#063859',
      blue_900: '#031e30',
    },
    fontSizes: {
      sm: '1.5rem',
      md: '2rem',
      ml: '3rem',
      lg: '4rem',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    mx: value => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: value => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: value => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});