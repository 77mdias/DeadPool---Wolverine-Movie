import "./style.css";

document.querySelector(".button-menu").addEventListener("click", function () {
  const menuMob = document.querySelector(".menu-mobal");
  if (menuMob.classList.contains("open")) {
    menuMob.classList.remove("open");
    document.querySelector(".icon").src = "assets/menu_white_36dp.svg";
    document.querySelector(".main").style.display = "flex";
  } else {
    menuMob.classList.add("open");
    document.querySelector(".icon").src = "assets/close_white_36dp.svg";
    document.querySelector(".main").style.display = "none";
  }
});
