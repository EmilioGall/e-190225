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
        customDark: '#010D10',

        customYellow: '#FCBF49',
        customDarkBlue: '#051E2C',

      },

      fontFamily: {

        customRoboto: ['Roboto', 'sans-serif'],
        customRobotoSlab: ['Roboto Slab', 'serif'],

      },

      fontWeight: {

        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,

      },

      fontSize: {

        '2xs': '11px',
        'xs': '13px',
        'sm': '15px',
        'base': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',

      },

    },

  },

  plugins: [

  ],

}

