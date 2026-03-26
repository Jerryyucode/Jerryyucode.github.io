const header = document.querySelector(".site-header");
const isSubpage = document.body.classList.contains("subpage");

if (!isSubpage && header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
