const COLOUR_MODE = "colour-mode";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

const toggle = document.getElementById("theme-toggler");
const rootEl = document.documentElement;
if (toggle) {
  toggle.addEventListener("click", () => {
    rootEl.classList.toggle("dark");
    let colourMode = rootEl.classList.contains("dark")
      ? DARK_THEME
      : LIGHT_THEME;
    localStorage.setItem(COLOUR_MODE, colourMode);
  });
}
