/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
}

// module.exports = {
//   content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
//   plugins: [
//     require('tw-elements/dist/plugin')
//   ]
// }