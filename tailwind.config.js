/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/containers/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
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
            a: {
              color: theme("colors.blue.500"),
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.red.900"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.blue.700"),
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"), // use to truncate text to a fixed number of lines.
    plugin(({ matchUtilities, addUtilities, addBase, theme, addVariant, e }) => {
      // registering new base styles
      addBase({
        "h1,h2": {
          fontWeight: 700,
          letterSpacing: theme("letterSpacing.tight"),
        },
        h3: {
          fontWeight: 600,
        },
        a: {
          textDecoration: "none!important",
        },
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
