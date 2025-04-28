/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        input_bg: "#3E2142",
        workspace_bg: "#616061",
        profile_flag_bg: "#442848",
        active_menu_bg: "#464b65",
        menu_hover_bg: "#444a62",
        sidebar_bg: "var(--color-sidebar_bg)",
      },
    },
  },
  plugins: [],
};
