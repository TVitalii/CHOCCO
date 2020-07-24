document.querySelector(".hamburger").onclick = function(){
  document.querySelector(".hamburger__plank").classList.toggle("hamburger__plank-active");
}

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("menu_768");
  menu__list.classList.toggle("menu_768");
})
