/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumilux: {
          teal: {
            DEFAULT: '#154a56',
            50: '#f2f7f8',
            100: '#deebed',
            200: '#bfd7dc',
            600: '#154a56',
            700: '#113b45',
            800: '#0d2d34',
            900: '#091e23',
          },
          lime: {
            DEFAULT: '#d7d225',
            light: '#e8e556',
            dark: '#9a960f',
            bg: 'rgba(215, 210, 37, 0.15)',
          },
          gold: {
            DEFAULT: '#b8982f',
            light: '#cca937',
            dark: '#876e1f',
            bg: 'rgba(184, 152, 47, 0.15)',
          },
          charcoal: {
            DEFAULT: '#231f20',
            muted: '#525d66',
            light: '#76838d',
          },
          surface: {
            DEFAULT: '#ffffff',
            subtle: '#f8fafb',
            muted: '#f1f5f7',
            card: '#ffffff',
            border: 'rgba(21, 74, 86, 0.12)',
            borderStrong: 'rgba(21, 74, 86, 0.25)',
          }
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'lumilux-subtle': '0 2px 10px rgba(21, 74, 86, 0.06)',
        'lumilux-card': '0 10px 25px -3px rgba(21, 74, 86, 0.08), 0 4px 6px -2px rgba(21, 74, 86, 0.04)',
        'lumilux-elevated': '0 20px 35px -5px rgba(21, 74, 86, 0.12), 0 8px 10px -6px rgba(21, 74, 86, 0.04)',
        'lumilux-lime': '0 4px 20px rgba(215, 210, 37, 0.35)',
      }
    },
  },
  plugins: [],
}
