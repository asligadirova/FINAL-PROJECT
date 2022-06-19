const nav = document.querySelector("#header__we-do-inside");

function fixedNavbar() {
  if (window.scrollY > 100) {
    nav.classList.add("fix_me");
  } else {
    nav.classList.remove("fix_me");
  }
}
window.addEventListener("scroll", fixedNavbar);
