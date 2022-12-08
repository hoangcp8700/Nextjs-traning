/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./containers/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            "h1,h2": {
              fontWeight: 700,
              color: theme("colors.gray.900"),
              letterSpacing: theme("letterSpacing.tight"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            "h1,h2": {
              fontWeight: 700,
              color: theme("colors.gray.100"),
              letterSpacing: theme("letterSpacing.tight"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"), // use to truncate text to a fixed number of lines.
    // require("@tailwindcss/aspect-ratio"), // give an element a fixed aspect ratio.
    plugin(({ matchUtilities, addUtilities, addBase, theme, addVariant, e }) => {
      // registering new base styles
      addBase({
        h1: { fontSize: theme("fontSize.3xl"), fontWeight: 700, color: theme("colors.gray.900") },
        h2: { fontSize: theme("fontSize.2xl"), fontWeight: 700, color: theme("colors.gray.900") },
        h3: { fontSize: theme("fontSize.xl"), fontWeight: 700, color: theme("colors.gray.900") },
        h4: { fontSize: theme("fontSize.lg"), fontWeight: 700, color: theme("colors.gray.900") },
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
