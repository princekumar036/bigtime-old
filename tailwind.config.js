/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'RubikMono': ['Rubik Mono One', 'monospace'],
        'Rubik': ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

