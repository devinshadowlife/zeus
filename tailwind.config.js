/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,ts,jsx,tsx,css}",

  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        lora: ['var(--font-lora)'],
      },
    },
  },
  plugins: [],
};
