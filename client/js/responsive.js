function handlePageSize() {
  var burgerButton = document.getElementById("burger-menu-button");
  var toolbar = document.getElementById("toolbar");
  var pageWidth = window.innerWidth;
  var pageHeight = window.innerHeight;

  document.body.style.height = `${pageHeight}px`;

  if (pageWidth < 600) {
    burgerButton.style.display = "block";
    toolbar.style.display = "none";
  } else {
    burgerButton.style.display = "none";
    toolbar.style.display = "flex";
  }
}

window.onload = function () {
  handlePageSize();
  window.addEventListener("resize", handlePageSize);
};
