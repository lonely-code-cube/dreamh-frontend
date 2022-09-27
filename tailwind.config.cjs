const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0e0e0f',
        'dark-fg': '#1c1e1d',
        'light-bg': '#d0d9e8',
        'light-fg': '#b3d1d6',
        'theme-light': '',
        'theme-dark': '',
      },
      animation: {
        'spin': 'spin 3s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
};