/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: { },
  },
  daisyui: {
    themes: ['light', 'dark'],
    darkTheme: "dark"
  },
  plugins: [
    require('daisyui')
  ],
}
