export function showHide() {
  const icon = document.getElementById("icon-password");
  const passwordField = document.getElementById("password");

  function showHidePassword() {
    if (passwordField.type === "password") {
      passwordField.setAttribute("type", "text");
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordField.setAttribute("type", "password");
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  }
  icon.addEventListener("click", showHidePassword);
}
