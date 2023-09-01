function closePopUp() {
  var popup = document.getElementById("popup");
  popup.style.animationName = "popup-close";
  popup.style.animationDuration = "0.5s";
  popup.style.animationTimingFunction = "ease-in-out";
  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
}

function createPopUp(innerHTML, animate = true) {
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
  if (animate) {
    var popup = document.getElementById("popup");
    popup.style.animationName = "popup";
    popup.style.animationDuration = "0.5s";
    popup.style.animationTimingFunction = "ease-in-out";
  }

  document.getElementById("popup").style.display = "flex";
  closeBurgerMenu();
}

function showLoginUI(animate) {
  createPopUp(
    `<form action="#" method="POST">
    <h2>Login</h2>
    <label for="login-username">Username:</label>
    <input type="text" id="login-username" name="login-username" required>
    
    <label for="login-password">Password:</label>
    <input type="password" id="login-password" name="login-password" required>
    
    <button type="submit">Login</button>
    <a href="#" onclick="showRegisterUI()" style="text-align: center;">Register</a>
    </form>
    `,
    animate
  );
}

function showRegisterUI() {
  createPopUp(
    `<form action="/register" method="POST" style="overflow-y: auto;">
    <h2>Register</h2>
    <label for="register-username">Username:</label>
    <input type="text" id="register-username" name="register-username" required>

    <label for="register-email">Email:</label>
    <input type="text" id="register-email" name="register-email" required>

    <label for="register-fullname">Full Name:</label>
    <input type="text" id="register-fullname" name="register-fullname" required>
    
    <label for="register-password">Password:</label>
    <input type="password" id="register-password" name="register-password" required>

    <label for="register-confirm-password">Confirm Password:</label>
    <input type="password" id="register-confirm-password" name="register-confirm-password" required>
    
    <button type="submit">Sign Up</button>
    Have an account? <a href="#"  onclick="showLoginUI(false)">Login</a>
    </form>
`,
    false
  );
}

window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const popup = urlParams.get("popup");
  console.log(popup);
  if (popup == "registersuccess") {
    createPopUp(
      `<H2>Your account has been successfully registered</H2>
    <p> Thank you for choosing our website! </p>`,
      false
    );
  }
});
