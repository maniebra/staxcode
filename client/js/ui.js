function closePopUp() {
  var popup = document.getElementById("popup");
  popup.style.animationName = "popup-close";
  popup.style.animationDuration = "0.5s";
  popup.style.animationTimingFunction = "ease-in-out";
  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
}

function createPopUp(innerHTML) {
  var code = `
    <button onclick="closePopUp()" id="close" class="close">
      <img
      src="../icons/close.svg" style="width: 32px;height: 32px;"
    ></button>
    ${innerHTML}
  </div>
</div>
    `;
  document.getElementById("content-popup").innerHTML = code;
  var popup = document.getElementById("popup");
  popup.style.animationName = "popup";
  popup.style.animationDuration = "0.5s";
  popup.style.animationTimingFunction = "ease-in-out";
  closeBurgerMenu();
}

function showLoginUI() {
  createPopUp(`<form action="#" method="POST">
    <h2>Login</h2>
    <label for="login-username">Username:</label>
    <input type="text" id="login-username" name="login-username" required>
    
    <label for="login-password">Password:</label>
    <input type="password" id="login-password" name="login-password" required>
    
    <button type="submit">Login</button>`);
  document.getElementById("popup").style.display = "flex";
}
