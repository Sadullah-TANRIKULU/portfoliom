/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}", "index.html","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        ff:['Kanit', 'Acme', 'sans-serif'],
        code:['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 10px rgba(16, 185, 129, 0.15)' },
          '100%': { boxShadow: '0 0 25px rgba(16, 185, 129, 0.45)' },
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
