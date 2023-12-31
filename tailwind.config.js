/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      xxl: '1536px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        black: '#000000',
        white: '#f5f5f5',
        yellow: '#feda75',
        orange: '#fa7e1e',
        pink: '#d62976',
        violet: '#962fbf',
        purple: '#4f5bd5',
        gris : '#1a1a1ad9',
        rojoNotificacion : "#FF5353",
        verificado : "#4CB4F8"
      },
      
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  }
};
