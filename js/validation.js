export function validation() {
  const formEl = document.getElementById("form-el");

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = {};

    let usernameValue = document.getElementById("username").value;
    let passwordValue = document.getElementById("password").value;
    let passwordValue2 = document.getElementById("password2").value;

    if (usernameValue === "") {
      errors.usernameField = "Enter your name";
    }
    if (passwordValue === "") {
      errors.passwordField = "Enter your password";
    }
    if (passwordValue2 === "") {
      errors.passwordField2 = "please repeat password";
    } else if (passwordValue !== passwordValue2) {
      errors.passwordField2 = "Repeat correctly";
    }
    console.log(errors);

    for (let item in errors) {
      console.log(item);

      let errorText = document.getElementById("error_" + item);
      console.log(errorText);

      if (errorText) {
        errorText.textContent = errors[item];
      }

     
    }
  });
}
