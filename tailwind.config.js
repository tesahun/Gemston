/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      animation: {
        blob: "blob 4s infinite",
      },

      animation: {
        marquee: "marquee 10s linear infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, -20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },

        marquee: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },

      backgroundImage: {
        "img-bg": "url(../public/img/phys.jpg)",
        "cls-bg": "url(../public/img/physio.jpg)",
        "tes-1": "url(../public/img/pp.jpg)",
        "about-bg": "url(../public/img/about.jpg)",
        "banner-1": "url(../public/img/77.jpg)",
        "care-1": "url(../public/img/gelgelu.jpg)",
        "minist-2": "url(../public/img/minist.jpg)",
        "care-3": "url(../public/img/mcare3.png)",
        "place-p": "url(../public/img/place.png)",
        "serv-1": "url(../public/img/mass1.jpg)",
        "ston-1": "url(../public/img/ston.jpg)",
        "sky-bg": "url(../public/img/sky.jpg)",
        "dimo-bg": "url(../public/img/dimond.jpg)",
        "ston-3": "url(../public/img/ston-3.jpg)",
        "logoo-bg": "url(../public/img/logoo.png)",
        "opal-bg": "url(../public/img/opal.jpg)",
        "emrerald-bg": "url(../public/img/emerald.jpg)",
        "sapph-bg": "url(../public/img/sapphire.jpg)",
        "aquam-bg": "url(../public/img/aquam.jpg)",
        "topaz-bg": "url(../public/img/topaz.jpg)",
        "ruby-bg": "url(../public/img/ruby.jpg)",
        "tourma-bg": "url(../public/img/tourma.jpg)",
        "garnet-bg": "url(../public/img/garnet.jpg)",
        "peridot-bg": "url(../public/img/peridot.jpg)",
        "hexa-bg": "url(../public/img/hexa.jpg)",
      },

      colors: {
        newcolor: "#343434",
      },
    },
  },
  plugins: [],
};
