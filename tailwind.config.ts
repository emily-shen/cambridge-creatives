import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    screens:{
      "lg":"940px",
      "md":"800px",
      "sm":"550px"
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
          contrast:"#648baa"
        },
      
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
} satisfies Config
