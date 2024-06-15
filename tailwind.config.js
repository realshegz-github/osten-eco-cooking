/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
module.exports= withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
 ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#333',
        secondary: '#333',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        shadowBlue: '#9AB4D4',
        nightBlue: '#000E1E',
      },
      fontFamily: {
        sans: ["Open Sans", 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1220px',
      xl: '1700px',
    },
    fontSize: {
      sm: [
        '0.875rem',
        {
          fontWeight: '300',
        },
      ],
      base: [
        '1.125rem',
        {
          fontWeight: '400',
        },
      ],
      lg: [
        '1.875rem',
        {
          fontWeight: '600',
        },
      ],
      xl: [
        '2.5rem',
        {
          fontWeight: '700',
        },
      ],
      '2xl': [
        '3.375rem',
        {
          fontWeight: '700',
        },
      ],
    },
  },
  variants: {
    // Other variants...
    height: ['responsive'],
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.h-calc': {
          height: 'calc(100vh - 100px)',
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
});
