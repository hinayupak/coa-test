/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'orange': '#ff6200',
          'dark-orange': '#be3600',
          'black-custom': '#313131',
          'gray-custom-1': '#f8f8f8',
          'gray-custom-2': '#454545',
          'gray-custom-3': '#333333',
        },
        width: {
          'container-narrow': '970px',
        }
      },
    },
    plugins: [],
  }