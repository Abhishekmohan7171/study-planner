/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1f2937', // Dark background color
      },
      gradientColorStops: theme => ({
        'primary-dark': '#1f2937',
        'secondary-dark': '#111827',
      }),
    },
  },
  plugins: [],
}
