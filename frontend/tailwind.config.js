/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0d9488',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#0B192C',
        },
        navy: {
          800: '#1E3E62',
          900: '#0B192C',
        }
      },
    },
  },
  plugins: [],
};
