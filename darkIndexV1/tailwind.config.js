/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily : {
        "roboto":['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}

