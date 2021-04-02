module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
