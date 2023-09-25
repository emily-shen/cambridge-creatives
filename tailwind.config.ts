import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors:{
        "cc-teal":{
          light:"#d8e8d8",
          DEFAULT:"#b6cab6",
          dark:"#a0baa0",
          contrast:"#c2e0c2"
        },
        "cc-blue":{
          DEFAULT:"#384855",
          contrast:"#4b6d88"
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
} satisfies Config