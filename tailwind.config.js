/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If using a src directory
  ],
  theme: {
    extend: {
      // Add custom theme extensions here if needed
    },
  },
  plugins: [
    // Add Tailwind plugins here if needed, e.g., require('@tailwindcss/forms')
  ],
});
