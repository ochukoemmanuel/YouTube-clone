module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'Arial', 'sans-serif'],
      },
      spacing: {
        14: '3.5rem',
        18: '4.5rem',
        68: '16rem',
        94: '24rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
