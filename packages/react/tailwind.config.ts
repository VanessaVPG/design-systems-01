import { Config } from 'tailwindcss'
import {
  colors,
  fontWeights,
  fontSizes,
  radii,
  space,
  lineHeights,
  fonts,
} from '@vanessa-ui/tokens'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      borderRadius: radii,
      spacing: space,
      fontFamily: fonts,
      lineHeight: lineHeights,
    },
  },
  plugins: [
    // Extensão de regras personalizadas
    function ({ addVariant, e }) {
      addVariant('not-disabled-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `not-disabled-hover${separator}${className}`,
          )}:not(:disabled):hover`
        })
      })
    },
  ],
} satisfies Config
