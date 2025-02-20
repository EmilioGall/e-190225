/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./src/**/*.{js,jsx,ts,tsx}",

  ],

  theme: {

    extend: {

      screens: {

        'xs': '422px',

        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',

      },

      colors: {

        customLight: '#FBF4E6',
        customGrey: '#51686F',
        customDark: '#010D10',

        customYellow: '#FCBF49',
        customDarkBlue: '#051E2C',

      },

      fontFamily: {

        customRoboto: ['Roboto', 'sans-serif'],
        customRobotoSlab: ['Roboto Slab', 'serif'],

      },

      fontWeight: {

        customLight: 300,
        customNormal: 400,
        customMedium: 500,
        customBold: 700,

      },

      fontSize: {

        '3xs': '11px',
        '2xs': '13px',
        'xs': '14px',
        'sm': '15px',
        'base': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '36px',
        '3xl': '48px',

      },

      backgroundImage: theme => ({

        'image-1': "url('./src/assets/img/iStock-1279248902 1.png')",
        'image-2': "url('./src/assets/img/iStock-1279248902 2.png')",

      }),

      keyframes: {

        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc((1/5)*-100%))" },
        },

      },

      animation: {

        "infinite-scroll": "infinite-scroll 8s linear infinite",

      },

    },

  },

  plugins: [

  ],

}

