/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      boxShadow: {
        card: "2px 2px 5px #797979, -2px -2px 5px #ffffff",
        "card-hover":
          "rgba(0, 0, 0, 0.3) 0px 15px 25px, rgba(0, 0, 0, 0.15) 0px 20px 40px",
        "add-shadow":
          "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
        "add-shadow-hover":
          "inset -2px -2px 5px #bebebe, inset 2px 2px 5px #ffffff",
        task: "rgba(0, 0, 0, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px inset, rgba(0, 0, 0, 0.2) 0px -3px 0px",
        "task-hover":
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        "alert-shadow": "2px 2px 5px #797979, -2px -2px 5px #ffffff",
      },
      borderRadius: {
        card: "23px",
        "add-shadow": "18px",
        "task-list": "16px",
      },
      backgroundColor: {
        card: "#dcdcdc",
        "add-shadow": "#e0e0e0",
      },
      textColor: {
        task: "#717171",
        "task-hover": "#323232",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
