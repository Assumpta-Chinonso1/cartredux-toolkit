/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: Must be 'class' for Redux toggle
  darkMode: 'class', 
  
  // CRITICAL: Tells Tailwind where to scan for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}