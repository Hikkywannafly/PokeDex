/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      fira: ["Outfit", `sans-serif`],

    },
    extend: {

      keyframes: {
        loading: {
          "0%": { top: `0` },
          "100%": { top: `-100vh` },
        },
        loadingIcon: {
          "0%": { transform: 'rotate(0deg)' },
          "100%": { transform: 'rotate(360deg)' }

        },
        loading1: {
          "0%": { top: `0px` },
          "100%": { top: `2px` },
        },
      }
    },
    animation: {
      aniLoad: 'loading ease-in-out 1.5s forwards',
      aniLoadIcon: 'loadingIcon ease-in-out 2s infinite',
      aniload1: 'loading1 ease-in-out 3s infinite',
    },

  },

  plugins: [],
}
