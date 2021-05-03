module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


// const defaultTheme = require('tailwindcss/defaultTheme');

// module.exports = {
//   purge: ['./src/**/*.jsx', './src/**/*.js'],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter var', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };