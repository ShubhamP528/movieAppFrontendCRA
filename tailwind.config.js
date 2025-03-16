/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        nl: "1080px", // custom large breakpoint
        nh: "1132px", // custom large breakpoint
      },
    },
  },
  plugins: [],
};
