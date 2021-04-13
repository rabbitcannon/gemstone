module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cool-gray': {
          50: '#F9FAFB',
          800: '#1F2937',
          'mid': '#E4E7EB'
        },
        'tag-orange': '#F97318',
        'orange-light': '#FFECD5',
        'navy': '#121927'
      },
    },
  },
  variants: {
    extend: {},
  },
  fontFamily: {
    body: ['Monsterrat', 'sans-serif']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
