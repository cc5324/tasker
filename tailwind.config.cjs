/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#34d399",
        red: "#f87171",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  safelist: [
    "text-primary",
    "btn-primary",
    "text-error",
    "btn-error",
    "text-green",
    "btn-green",
    "text-red",
    "text-info",
    "btn-info",
    "text-secondary",
    "btn-secondary",
    "text-neutral",
  ],
};
