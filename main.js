var slide = document.querySelector(".nav-list")
var toggle = document.querySelector("#nav-hamburger")
function toggleMenu() {
  const visibility = toggle.getAttribute("aria-expanded");
  if (visibility === "false") {
    toggle.setAttribute("aria-expanded", true);
    slide.setAttribute("data-visible", true);
  }
  else {
    toggle.setAttribute("aria-expanded", false);
    slide.setAttribute("data-visible", false);
  }
}