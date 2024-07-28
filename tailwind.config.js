// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your project structure
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'], // Ensure blur utilities are included
    },
  },
  plugins: [],
}
