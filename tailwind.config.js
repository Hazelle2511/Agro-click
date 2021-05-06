const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal
      },
      backgroundImage: (theme) => ({
        // contactImg: "url('https://images.unsplash.com/photo-1596334791409-bf0c1f7c2c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=817&q=80')"
        contactImg: "url('https://cdn.dribbble.com/users/730703/screenshots/4198456/colin-bigelow-tropicana-orange-trees.jpg?compress=1&resize=800x600')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
