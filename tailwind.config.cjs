module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  mode: "jit",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"],
  },
};
