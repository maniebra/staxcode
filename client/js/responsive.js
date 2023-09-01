function handlePageSize() {
  var burgerButton = document.getElementById("burger-menu-button");
  var burgerMenu = document.getElementById("burger-menu");
  var toolbar = document.getElementById("toolbar");
  var pageWidth = window.innerWidth;
  var pageHeight = window.innerHeight;

  document.body.style.height = `${pageHeight}px`;

  if (pageWidth < 700) {
    burgerButton.style.display = "block";
    toolbar.style.display = "none";
  } else {
    burgerMenu.style.display = "none";
    burgerButton.style.display = "none";
    toolbar.style.display = "flex";
  }
}

function openBurgerMenu() {
  var burgerMenu = document.getElementById("burger-menu");
  burgerMenu.style.animationName = "burger-menu-anim-in";
  burgerMenu.style.animationDuration = "0.6s";
  burgerMenu.style.animationTimingFunction = "ease-in-out";
  document.body.style.overflow = "hidden";
  burgerMenu.style.display = "flex";
}

function closeBurgerMenu() {
  var burgerMenu = document.getElementById("burger-menu");
  document.body.style.overflow = "auto";
  burgerMenu.style.animationName = "burger-menu-anim-out";
  burgerMenu.style.animationDuration = "0.6s";
  burgerMenu.style.animationTimingFunction = "ease-in-out";
  setTimeout(() => {
    burgerMenu.style.display = "none";
  }, 600);
}

window.addEventListener("load", function () {
  handlePageSize();
  window.addEventListener("resize", handlePageSize);
});
