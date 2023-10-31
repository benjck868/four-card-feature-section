/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        "4CFS-red": "hsl(0, 78%, 62%)",
        "4CFS-cyan": "hsl(180, 62%, 55%)",
        "4CFS-orange": "hsl(34, 97%, 64%)",
        "4CFS-blue": "hsl(212, 86%, 64%)",
        "4CFS-very-dark-blue": "hsl(234, 12%, 34%)",
        "4CFS-grayish-blue": "hsl(229, 6%, 66%)",
        "4CFS-very-light-gray": "hsl(0, 0%, 98%)"
      },
      fontFamily: {
        "4CFS-poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

