/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f3f5f9",
      },
      width: {
        pc: "1280px",
        laptop: "",
      },
    },
  },
  plugins: [],
};
