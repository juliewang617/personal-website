import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'offwhite': '#f8eded', 
      'blue0': '#e4f0f0',
      'blue1': '#bcd7db',
      'blue2': '#4687c2', 
      'blue3': '#2c3f56', 
    },
    extend: {
      backgroundImage: {
        'background': "url('/cats1.png')",
        'background_me': "url('/me.jpg')", 
        'github_logo': "url('/github.svg')",
        'linkedin_logo': "url('/linkedin.png')",
        'email_logo': "url('/email.png')",
        'aliens_td_thumbnail': "url('/aliens-td/thumbnail.png')",
        'carpool_thumbnail': "url('/carpool/thumbnail.png')",
        'cattit_thumbnail': "url('/cattit/thumbnail.png')",
        'connect4_thumbnail': "url('/connect4/thumbnail.png')",
        'ez_ed_thumbnail': "url('/ez-ed/thumbnail.png')",
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
            transform: 'rotate(-2deg)'
          },
          "10%": {
            transform: 'rotate(-1deg)'
          },
          "20%": {
            transform: 'rotate(0deg)'
          },
          "30%": {
            transform: 'rotate(1deg)'
          },
          "40%": {
            transform: 'rotate(2deg)'
          },
          "50%": {
            transform: 'rotate(1deg)'
          },
          "60%": {
            transform: 'rotate(0deg)'
          },
          "70%": {
            transform: 'rotate(-1deg)'
          },
          "80%": {
            transform: 'rotate(-2deg)'
          }, 
          "90%": {
            transform: 'rotate(-2.2deg)'
          },
          "100%": {
            transform: 'rotate(-2.1deg)'
          },          

        }
      }, 
    },
  },
  plugins: [],
};
export default config;
