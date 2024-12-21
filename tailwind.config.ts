import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        transparent: 'transparent',
        // mainThemeLight : "rgba(197, 222, 22, 0.1)",
        mainThemeLight : "rgba(228, 245, 100, 0.2)",
        grayColor : 'rgba(22, 22, 26, 0.6)',
        greenTheme: 'rgb(17, 94, 86)',
        
        neutral: {
          100: '#141414',
          200: '#1A1A1A',
          300: '#333333',
          400: '#595959',
          500: '#666666',
          600: '#E2E2E1',
          700: '#F6F6F6',
          800: '#808080',
          900: '#707070',
          1000: '#E6E6E6',
        },
        brand: {
          800: '#EAFB06',
          500: '#F8FF99',
        },
        secondary: {
          800: '#0809EC',
          700: '#041624',
          500: '#8A8BFF',
          600: '#FFFCF6',
        },
        warning: {
          800: '#EBA013',
          500: '#FFCF76',
        },
        error: {
          800: '#F35858',
          500: '#FF9292',
        },
        orange: {
          500: '#FF2EAB',
        },
        pink: {
          400: '#9B00FF',
          500: '#C433FF',
          600: '#D368FF',
          700: '#BA5AF9',
          900: '#F1E3FF',
        },
        gray: {
          100: '#f9f2ff00',
          200: '#f9f2ff',
          300: '#232323',
          400: '#cccccc',
          500: '#B3B3B3',
        },
        green: {
          400: '#48BB78',
          500: '#38A169',
          600: '#2F855A',
          700: '#276749',
          800: '#12B52C',
          900: '#1C4532',
        },
      },
      backgroundColor: {
        light: '#f6f6f6',
        dark: '#292929',
        yellow: '#ECAD09',
        naviBlue: '#041624',
        disable: '#DDDDDD',
        modalOpverlay: 'rgba(0, 0, 0, 0.70)',
        lightGray: 'rgba(18, 18, 18, 0.08)',
        bannerGray : 'rgba(22, 22, 26, 0.06)',
        bannerGrayDark : 'rgba(22, 22, 26, 0.1)',
        grayPrimary: 'rgba(255, 255, 255, 0.04)',
        graySecondary: 'rgba(255, 255, 255, 0.1)',
        greenTheme: 'rgba(17, 94, 86, 1)',
      },

      dropShadow: {
        'card': ' 0px 1px 1px 0px rgba(0, 0, 0, 0.05)',
     
      },
   
  
    },
  },
  plugins: [],
} satisfies Config;
