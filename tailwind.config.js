/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "780px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        lightAsh : "#F0F0F0",
        verylightAsh: "#F7F7F7",
      }
    },
  },
  plugins: [],
}

