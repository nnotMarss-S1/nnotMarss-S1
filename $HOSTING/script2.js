document.addEventListener("DOMContentLoaded", function () {
  const mainMenu = document.querySelector(".main-menu");
  const subMenu = mainMenu.querySelector(".sub-menu");

  mainMenu.addEventListener("mouseenter", function () {
    subMenu.classList.add("show-sub-menu");
  });

  mainMenu.addEventListener("mouseleave", function () {
    subMenu.classList.remove("show-sub-menu");
  });
});