import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'white': '#fff',
      'offwhite': '#f8eded', 
      'gray0': "#D9D9D9",
      'gray1': "#C8C8C8",
      'blue0': '#97DCFF',
      'blue1': '#bcd7db',
      'blue2': '#4687c2', 
      'blue3': '#2c3f56', 
    },
    extend: {
      backgroundImage: {
        'background': "url('/rainbow.png')",
        'background_me': "url('/me.png')", 
        'github_logo': "url('/github.svg')",
        'linkedin_logo': "url('/linkedin.svg')",
        'email_logo': "url('/email.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'solid': '20px -20px 0 0 #bcd7db'
      },
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"], 
      }, 
      keyframes: {
        wiggle: {
          "0%": {
            transform: 'rotate(0deg)'
          },
          "10%": {
            transform: 'rotate(1deg)'
          },
          "20%": {
            transform: 'rotate(2deg)'
          },
          "30%": {
            transform: 'rotate(1deg)'
          },
          "40%": {
            transform: 'rotate(0deg)'
          },
          "50%": {
            transform: 'rotate(-1deg)'
          },
          "60%": {
            transform: 'rotate(-2deg)'
          },
          "70%": {
            transform: 'rotate(-1deg)'
          },
          "80%": {
            transform: 'rotate(0eg)'
          }, 
          "90%": {
            transform: 'rotate(0.5deg)'
          },
          "100%": {
            transform: 'rotate(0.25deg)'
          },          

        }
      }, 
    },
  },
  plugins: [],
};
export default config;
