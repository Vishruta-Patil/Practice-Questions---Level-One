var passwordInput = document.querySelector(".password");
var passwordBtn = document.querySelector(".password-btn");
var checkPassword = document.querySelector(".password-checker");

function PasswordChecker() {
  passwordBtn.disabled = true;
  if (passwordInput.value.length > 10) {
    checkPassword.style.backgroundColor = "green";
    checkPassword.innerText = "Your password is correct";
  } else {
    checkPassword.style.backgroundColor = "red";
    checkPassword.innerText =
      "ERROR!!! Your password is incorrect \n Length of password must be minimum 10";
  }
}

passwordBtn.addEventListener("click", PasswordChecker);
