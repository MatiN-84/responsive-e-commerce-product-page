/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // مسیر فایل‌هایی که از کلاس‌های Tailwind استفاده می‌کنن
  ],
  theme: {
    extend: {
      colors: {
        orangi: 'hsl(26, 100%, 55%)',
        orangi2: 'hsl(25, 100%, 94%)',
        darkblue: 'hsl(220, 13%, 13%)',
        grayishblue: 'hsl(220, 14%, 75%)',
        lightgrayishblue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
      },
      screens:{
        "xs":"480px"
      }
    },
  },
  plugins: [],
};
