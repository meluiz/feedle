import { extendTheme } from '@chakra-ui/react'
import { mauveDark, blueDark, purpleDark } from '@radix-ui/colors'

const Theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'mauve.100',
        backgroundColor: 'mauve.1200',
      },
    },
  },
  fonts: {
    body: 'Outfit, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  colors: {
    mauve: {
      100: mauveDark.mauve12,
      200: mauveDark.mauve11,
      300: mauveDark.mauve10,
      400: mauveDark.mauve9,
      500: mauveDark.mauve8,
      600: mauveDark.mauve7,
      700: mauveDark.mauve6,
      800: mauveDark.mauve5,
      900: mauveDark.mauve4,
      1000: mauveDark.mauve3,
      1100: mauveDark.mauve2,
      1200: mauveDark.mauve1,
    },
    blue: {
      100: blueDark.blue12,
      200: blueDark.blue11,
      300: blueDark.blue10,
      400: blueDark.blue9,
      500: blueDark.blue8,
      600: blueDark.blue7,
      700: blueDark.blue6,
      800: blueDark.blue5,
      900: blueDark.blue4,
      1000: blueDark.blue3,
      1100: blueDark.blue2,
      1200: blueDark.blue1,
    },
    purple: {
      100: purpleDark.purple12,
      200: purpleDark.purple11,
      300: purpleDark.purple10,
      400: purpleDark.purple9,
      500: purpleDark.purple8,
      600: purpleDark.purple7,
      700: purpleDark.purple6,
      800: purpleDark.purple5,
      900: purpleDark.purple4,
      1000: purpleDark.purple3,
      1100: purpleDark.purple2,
      1200: purpleDark.purple1,
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: {
          base: '1280px',
          '3xl': '1536px',
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: '4px',
        fontFamily: 'Kanit, sans-serif',
        _focus: {
          outline: 'none',
          boxShadow: 'unset',
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
        _focus: {
          outline: 'none',
          boxShadow: 'unset',
        },
      },
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
    '3xl': '112em',
  },
})

export default Theme
