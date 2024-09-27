/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      redbg: "#D01C28",
      white: "#ffffffff",
      borderclr: "#00000000",
      my_color: 'rgba(90, 89, 89, 1)',
    },
    extend: {},
  },
  plugins: [],
}

