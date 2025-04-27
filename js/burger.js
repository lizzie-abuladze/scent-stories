export function initBurgerMenu() {
  let hamburger = document.getElementById("burgerBar");
  let menu = document.getElementById("navBar");
  let bod = document.querySelector(".header-box");
  
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("isActive");
    menu.classList.toggle("active");
  });
}


