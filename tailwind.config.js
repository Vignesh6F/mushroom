/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#F5EDE2",
        "background": "#F5EDE2",
        "surface-bright": "#FAF4ED",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#FAF4ED",
        "surface-container": "#F2E7D9",
        "surface-container-high": "#EAE0CF",
        "surface-container-highest": "#E2D5C3",
        "surface-dim": "#D9CBB7",
        "primary": "#1D1E18",
        "primary-container": "#2D4229",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#D1E6BF",
        "secondary": "#475C3E",
        "secondary-container": "#E2EBDA",
        "on-secondary-container": "#263B22",
        "tertiary": "#1B2E18",
        "tertiary-container": "#1F331A",
        "on-surface": "#1D1E18",
        "on-surface-variant": "#4A4C42",
        "outline": "#828577",
        "outline-variant": "#DFD7CB",
        "forest-dark": "#1C2A1A",
        "forest-card": "#243821",
        "accent-sage": "#7E8D6B",
        "accent-olive": "#566A4B"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "space-lg": "1.75rem",
        "space-md": "1rem",
        "space-sm": "0.5rem",
        "space-xl": "3rem",
        "gutter-mobile": "1rem",
        "gutter": "1.5rem",
        "space-xs": "0.25rem",
        "margin": "3rem",
        "margin-mobile": "1.25rem"
      },
      fontFamily: {
        "serif": ["'Playfair Display'", "serif"],
        "sans": ["'Plus Jakarta Sans'", "sans-serif"],
        "headline-sm": ["'Playfair Display'", "serif"],
        "display-lg": ["'Playfair Display'", "serif"],
        "headline-lg": ["'Playfair Display'", "serif"],
        "headline-md": ["'Playfair Display'", "serif"],
        "headline-lg-mobile": ["'Playfair Display'", "serif"],
        "display-lg-mobile": ["'Playfair Display'", "serif"],
        "body-lg": ["'Plus Jakarta Sans'", "sans-serif"],
        "body-md": ["'Plus Jakarta Sans'", "sans-serif"],
        "body-sm": ["'Plus Jakarta Sans'", "sans-serif"],
        "label-lg": ["'Plus Jakarta Sans'", "sans-serif"],
        "label-md": ["'Plus Jakarta Sans'", "sans-serif"],
        "label-sm": ["'Plus Jakarta Sans'", "sans-serif"]
      },
      fontSize: {
        "headline-sm": ["22px", { lineHeight: "30px", fontWeight: "600" }],
        "display-lg": ["56px", { lineHeight: "64px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "700" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "500" }],
        "headline-md": ["28px", { lineHeight: "36px", fontWeight: "500" }],
        "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }]
      }
    }
  },
  plugins: [],
};
