/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      rewayBlue: "#00A2FF",
      rewayBlack: "#111111",
      rewayGrey: "#828282",
      rewayWhite: "#FFFFFF",
      rewayLightgray: "rgba(130,130,130,.5)",
    },
  },
  plugins: [],
};
