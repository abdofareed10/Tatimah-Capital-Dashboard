module.exports = {
  content: [
    "./index.html",
    "./login.html",
    "./forgot-password.html",
    "./otp.html",
    "./profile.html",
    "./assets/js/**/*.js",
    "./assets/css/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        border: {
          secondary: "#19D7C1",
        },
        primary: {
          500: "#292852",
          400: "#7776bc",
        },
        secondary: {
          500: "#19d7c1",
        },
        neutral: {
          200: "#caccce",
        },
        neutral: {
          400: "#95999D",
        },
        gray: {
          DEFAULT: "#999999",
          50: "#F7F8FA",
          100: "#F2F4F7",
        },
        darkgray: "#201b13",
        black: "#1b1b1b",
        error: "#b42318",
        white: "#ffffff",
        "bg-gray-opacity-40": "#cccccc33",
        "border-error": "#b42318",
        "base-white": "#ffffff",
        "black-opacity": "#0d0d0d40",
        "sidebar-active": "#E6F7F5",
        "sidebar-hover": "#F2F4F7",
      },

      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["14px", { lineHeight: "20px" }],
        md: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        h5: ["32px", { lineHeight: "1.4" }],
        caption: ["12px", { lineHeight: "1.5" }],
        "2xl": ["24px", { lineHeight: "32px" }],
      },
      borderRadius: {
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        xl: "24px",
        xxl: "32px",
        50: "50px",
        "rounded-20": "20px",
      },
      spacing: {
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        16: "64px",
        xs: "8px",
        xxs: "6px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        xxl: "32px",
      },
      boxShadow: {
        login: "29px 0px 0px -5px rgba(25,215,193,0.25)",
        input: "0px 0px 1px 2px rgba(204,204,204,0.2)",
        button:
          "0px -2px 2px 0px inset rgba(204,204,204,0.2),0px 0px 0px 2px inset #222222",
        card: "0px 0px 0px 1px rgba(0,0,0,0.05)",
        boxShadow: {
          glow: "0px 0px 0px 7px rgba(25, 215, 193, 0.25)",
        },
      },
      width: {
        xs: "384px",
        "4xl": "1440px",
      },
      minWidth: {
        xs: "384px",
      },
      maxWidth: {
        xs: "384px",
        "4xl": "1440px",
        inherit: "inherit",
      },
      minHeight: {
        xs: "384px",
      },
      maxHeight: {
        xs: "384px",
        "4xl": "1440px",
        inherit: "inherit",
      },
      borderWidth: {
        DEFAULT: "1px",
        thin: "0.5px",
        bold: "3px",
        extrathin: "0.5px",
      },
    },
  },
  plugins: [],
};
