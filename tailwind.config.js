/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./containers/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        xxl: "32px",
      },
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
      },
      screens: {
        xxs: "320px",
        xs: "576px",
        sm: "768px",
        md: "991px",
        lg: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"), // use to truncate text to a fixed number of lines.
    require("@tailwindcss/aspect-ratio"), // give an element a fixed aspect ratio.
    plugin(({ matchUtilities, addUtilities, addBase, theme, addVariant, e }) => {
      // registering new base styles
      addBase({
        h1: { fontSize: theme("fontSize.3xl") },
        h2: { fontSize: theme("fontSize.2xl") },
        h3: { fontSize: theme("fontSize.xl") },
        h4: { fontSize: theme("fontSize.lg") },
        p: { fontSize: theme("fontSize.base") },
        span: { fontSize: theme("fontSize.sm") },
      });

      // registering new static utility styles
      addUtilities({
        ".adjust-flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
      });

      // registering custom variants
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("before-after", ["&:before", "&:after"]);
      addVariant("not-last", "&:not(:last-child)");
      addVariant("not-first", "&:not(:first-child)");
      addVariant("not-disabled", "&:not(:disabled)");
    }),
  ],
};
