/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        tertiary: 'hsl(var(--tertiary))',
        muted: 'hsl(var(--muted))',
        // input: 'hsl(var(--input))',
        // ring: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [],
};
