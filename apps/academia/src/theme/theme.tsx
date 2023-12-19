import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import NextLink, { LinkProps } from 'next/link';
import { forwardRef } from 'react';

const LinkBehaviour = forwardRef<HTMLAnchorElement, LinkProps>(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});



const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    // #42424a: rgb(66, 66, 74)
    // #191919: rgb(25, 25, 25)

    primary: {
      main: '#e5c148'
    },

    secondary: {
      main: '#d85727'
    },
    // rgb(229, 193, 72)

    gradient: 'linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6))',

  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour
      }
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:before': {
            display: 'none',
          }
        }
      }
    },
  },
});

export default theme;