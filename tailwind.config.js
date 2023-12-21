/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
    extend: {
      width: {
        '135': '33.75rem'
      },
      maxWidth: {
        '135': '33.75rem'
      },
      colors: {
        'text-color-dark-mode': '#ffffff',
        'stroke-color-dark-mode': '#FFFFFF80',
        'surface-color-dark-mode': '#FFFFFF1A',
        'surface-color-dark-mode-hover': '#FFFFFF0D',
        'highlight-color-dark-mode': '#FFFFFF33',
        'text-color-light-mode': '#000000',
        'stroke-color-light-mode': '#00000080',
        'surface-color-light-mode': '#0000000D',
        'surface-color-light-mode-hover': '#00000005',
        'highlight-color-light-mode': '#00000010'
      },
      backgroundImage: {
        'dark-mobile': "url('bg-mobile.jpg')",
        'light-mobile': "url('bg-mobile-light.jpg')",
        'desktop-light': "url('bg-desktop-light.jpg')",
        'desktop-dark': "url('bg-desktop.jpg')"
      },
      // transitionProperty: {
      //   'height': 'height',
      //   'spacing': 'margin, padding',
      // },
    },
  },
  darkMode: 'class',
  plugins: [],
}
