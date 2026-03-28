/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#010408',
        secondary: '#050c14',
        accent: '#FFC107',
      },
      backgroundImage: {
        'poker-gradient': 'linear-gradient(135deg, #010408 0%, #000204 50%, #010408 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'card-float': 'cardFloat 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
