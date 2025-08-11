import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/contexts/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f47400', // xBond Orange
          50: '#fff3e8',
          100: '#ffe5d1',
          200: '#ffc6a3',
          300: '#ffa373',
          400: '#ff8a4f',
          500: '#f47400',
          600: '#ce5f00',
          700: '#a44a00',
          800: '#7a3600',
          900: '#532400',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Noto Sans", "Cantarell", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(244, 116, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
export default config