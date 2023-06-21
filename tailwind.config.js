/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        yeseva: ['Yeseva One', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
        shepp: ['Mrs Sheppards', 'sans-serif'],
      },
      colors: {
        'grey': "#666"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}