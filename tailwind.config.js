// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        text: 'var(--color-text)',
        rosewater: 'var(--color-rosewater)',
        flamingo: 'var(--color-flamingo)',
        pink: 'var(--color-pink)',
        mauve: 'var(--color-mauve)',
        red: 'var(--color-red)',
        peach: 'var(--color-peach)',
        yellow: 'var(--color-yellow)',
        green: 'var(--color-green)',
        teal: 'var(--color-teal)',
        sky: 'var(--color-sky)',
        sapphire: 'var(--color-sapphire)',
        blue: 'var(--color-blue)',
        lavender: 'var(--color-lavender)',
        // si quieres más roles (surface0, surface1, subtext) añádelos aquí
      }
    }
  },
  plugins: [],
}
