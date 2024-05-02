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
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        
          ".text-shadow":{
            textShadow: "0 1px 3px black, 0 1px 2px black"
          },

          ".text-shadow-sm":{
            textShadow: "0 1px 2px black"
          },

          ".text-shadow-md":{
            textShadow: "0 4px 6px black, 1px 2px black"
          },
          
          ".text-shadow-lg":{
            textShadow: "0 5px 10px black, 2px 3px black"
          },

          ".text-shadow-none":{
            textShadow: "0 0 #0000"
          },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
