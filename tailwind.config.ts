import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        gunmetal: "var(--color-gunmetal)",
        "deep-aquamarine": "var(--color-deep-aquamarine)",
        "aurometal-saurus": "var(--color-aurometal-saurus)",
        "deep-aquamarine-hover": "var(--color-deep-aquamarine-hover)",
      },
      fontFamily: {
        fraunces: [
          "var(--font-fraunces)",
          { fontFeatureSettings: "'clig' off 'liga' off" },
        ],
        montserrat: [
          "var(--font-montserrat)",
          { fontFeatureSettings: "'clig' off 'liga' off" },
        ],
      },
      maxWidth: {
        c600: "37.5rem",
        c343: "21.4375rem",
      },
      borderRadius: {
        c10: "0.625rem",
      },
      fontSize: {
        c12: "0.75rem",
        c13: "0.8125rem",
        c32: "2rem",
      },
      lineHeight: {
        c23: "1.4375rem",
      },
      letterSpacing: {
        c5: "0.313em",
      },
      gap: {
        c19: "1.19rem",
        c11: "0.72594rem",
      },
      padding: {
        c21: "1.313rem",
      },
      margin: {
        c29: "1.813rem",
        c30: "1.875rem",
      },
    },
  },
  plugins: [],
};
export default config;
