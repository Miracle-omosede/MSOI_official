/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/src/app/assets/img1.jpg')",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "serif"],
        "poppins": ["Poppins", "serif"],
        "lato": ["lato", "serif"],
      },
      colors: {
        'light':'#2f7c49',
        'green':'#245131',
        'dark':'#142618',
        'dark-green':'#204e50',
      }
    },
  },
  plugins: [],
};
