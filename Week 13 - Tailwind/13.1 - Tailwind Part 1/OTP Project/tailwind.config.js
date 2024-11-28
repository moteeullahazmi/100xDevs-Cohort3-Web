/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#8095AC",
          500: "#193F6A",
          700: "#002A5B",
        },
        green: {
          400: "#42E8D5",
        },
      },
    },
  },
  plugins: [],
};
